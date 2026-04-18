// Pre-render script — generates static HTML for each blog post and comparison
// Run after `vite build` via `npm run build && node prerender.mjs`

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(__dirname, 'dist')
const srcBlog = path.join(__dirname, 'src/Blog.jsx')
const srcComp = path.join(__dirname, 'src/Comparisons.jsx')

// ── Extract POSTS and NEW_POSTS arrays from Blog.jsx ──
// We use a simple extraction approach — read the JSX file as text and evaluate the data arrays
// Since Blog.jsx exports POSTS and NEW_POSTS as plain data, we can extract and eval them

function extractArray(source, exportName) {
  // Find `export const NAME = [` and capture until the closing `]` at indent 0
  const startMarker = `export const ${exportName} = [`
  const startIdx = source.indexOf(startMarker)
  if (startIdx === -1) return []
  const openIdx = startIdx + startMarker.length - 1 // position of `[`
  // Walk forward counting brackets to find matching close
  let depth = 0
  let i = openIdx
  let inString = false
  let stringChar = ''
  let inTemplate = false
  let escape = false
  for (; i < source.length; i++) {
    const c = source[i]
    if (escape) { escape = false; continue }
    if (c === '\\') { escape = true; continue }
    if (inString) {
      if (c === stringChar) { inString = false }
      continue
    }
    if (inTemplate) {
      if (c === '`') { inTemplate = false }
      continue
    }
    if (c === '"' || c === "'") { inString = true; stringChar = c; continue }
    if (c === '`') { inTemplate = true; continue }
    if (c === '[') depth++
    else if (c === ']') {
      depth--
      if (depth === 0) { i++; break }
    }
  }
  const arrText = source.slice(openIdx, i)
  // Evaluate the array literal in a safe-enough context (trusted source code)
  try {
    // eslint-disable-next-line no-eval
    return eval(arrText)
  } catch (e) {
    console.error(`Failed to parse ${exportName}:`, e.message)
    return []
  }
}

const blogSrc = fs.readFileSync(srcBlog, 'utf-8')
const compSrc = fs.readFileSync(srcComp, 'utf-8')

const POSTS = extractArray(blogSrc, 'POSTS')
const NEW_POSTS = extractArray(blogSrc, 'NEW_POSTS')
const COMPARISONS = extractArray(compSrc, 'COMPARISONS')
const ALL_POSTS = [...POSTS, ...NEW_POSTS]

console.log(`Found ${ALL_POSTS.length} blog posts and ${COMPARISONS.length} comparisons`)

// ── Load the built index.html as template ──
const templatePath = path.join(dist, 'index.html')
const template = fs.readFileSync(templatePath, 'utf-8')

const SITE = 'https://www.aistackbuilder.tech'

// ── Helpers ──
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function renderContentAsHtml(content) {
  // Render the content array as HTML for SEO — this is hidden via CSS but visible to Google
  return content.map(block => {
    if (block.type === 'intro' || block.type === 'paragraph') {
      return `<p>${escapeHtml(block.text)}</p>`
    }
    if (block.type === 'h2') {
      return `<h2>${escapeHtml(block.text)}</h2>`
    }
    if (block.type === 'h3') {
      return `<h3>${escapeHtml(block.text)}</h3>`
    }
    if (block.type === 'affiliate') {
      return `<p><a href="${escapeHtml(block.url)}" rel="sponsored nofollow" target="_blank">${escapeHtml(block.cta || block.name)}</a></p>`
    }
    if (block.type === 'list' && Array.isArray(block.items)) {
      return `<ul>${block.items.map(i => `<li>${escapeHtml(i)}</li>`).join('')}</ul>`
    }
    return ''
  }).join('\n      ')
}

function renderPage({ url, title, description, contentHtml, h1 }) {
  let html = template

  // Replace title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(title)}</title>`
  )

  // Replace description meta
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/>/,
    `<meta name="description" content="${escapeHtml(description)}" />`
  )

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${escapeHtml(url)}" />`
  )

  // Replace OG tags
  html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${escapeHtml(url)}" />`
  )
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${escapeHtml(title)}" />`
  )
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${escapeHtml(description)}" />`
  )

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:url" content="[^"]*"\s*\/>/,
    `<meta name="twitter:url" content="${escapeHtml(url)}" />`
  )
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`
  )
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`
  )

  // Inject SEO content inside <div id="root"> so Google sees the text content
  // It gets replaced as soon as React hydrates, so users never see it
  const seoContent = `<div id="root"><div id="seo-content" style="max-width:680px;margin:0 auto;padding:48px 20px;color:#f0ede8;font-family:system-ui,sans-serif"><h1>${escapeHtml(h1)}</h1>${contentHtml}</div></div>`

  html = html.replace(
    /<div id="root"><\/div>/,
    seoContent
  )

  return html
}

// ── Generate blog posts ──
let count = 0
for (const post of ALL_POSTS) {
  const outDir = path.join(dist, 'blog', post.slug)
  fs.mkdirSync(outDir, { recursive: true })
  const url = `${SITE}/blog/${post.slug}/`
  const description = post.excerpt.length > 155 ? post.excerpt.slice(0, 152) + '...' : post.excerpt
  const contentHtml = renderContentAsHtml(post.content)
  const html = renderPage({
    url,
    title: `${post.title} | AI Stack Builder`,
    description,
    contentHtml,
    h1: post.title,
  })
  fs.writeFileSync(path.join(outDir, 'index.html'), html)
  count++
}

// ── Generate comparison pages ──
for (const comp of COMPARISONS) {
  const outDir = path.join(dist, 'compare', comp.slug)
  fs.mkdirSync(outDir, { recursive: true })
  const url = `${SITE}/compare/${comp.slug}/`
  const description = comp.excerpt.length > 155 ? comp.excerpt.slice(0, 152) + '...' : comp.excerpt
  const contentHtml = renderContentAsHtml(comp.content)
  const html = renderPage({
    url,
    title: `${comp.title} | AI Stack Builder`,
    description,
    contentHtml,
    h1: comp.title,
  })
  fs.writeFileSync(path.join(outDir, 'index.html'), html)
  count++
}

// ── Generate blog index page ──
const blogIndexHtml = renderPage({
  url: `${SITE}/blog/`,
  title: 'Blog — AI Tools for YouTubers | AI Stack Builder',
  description: 'In-depth guides and reviews of the best AI tools for YouTube creators — voiceover, video editing, thumbnails, SEO, and more.',
  contentHtml: `<p>In-depth guides to help you pick the right AI tools for your YouTube channel.</p>` +
    ALL_POSTS.map(p => `<article><h2><a href="/blog/${p.slug}/">${escapeHtml(p.title)}</a></h2><p>${escapeHtml(p.excerpt)}</p></article>`).join('\n      '),
  h1: 'YouTube AI Tools — Guides & Reviews',
})
const blogDir = path.join(dist, 'blog')
fs.mkdirSync(blogDir, { recursive: true })
fs.writeFileSync(path.join(blogDir, 'index.html'), blogIndexHtml)
count++

// ── Generate comparisons index page ──
const compIndexHtml = renderPage({
  url: `${SITE}/compare/`,
  title: 'AI Tool Comparisons for YouTubers | AI Stack Builder',
  description: 'Head-to-head comparisons of the top AI tools for YouTube creators — ElevenLabs vs Murf, Submagic vs Descript, and more.',
  contentHtml: `<p>In-depth comparisons to help you choose the right tools for your channel.</p>` +
    COMPARISONS.map(c => `<article><h2><a href="/compare/${c.slug}/">${escapeHtml(c.title)}</a></h2><p>${escapeHtml(c.excerpt)}</p></article>`).join('\n      '),
  h1: 'Tool Comparisons',
})
const compDir = path.join(dist, 'compare')
fs.mkdirSync(compDir, { recursive: true })
fs.writeFileSync(path.join(compDir, 'index.html'), compIndexHtml)
count++

console.log(`✓ Pre-rendered ${count} pages with unique canonical tags + SEO content`)
