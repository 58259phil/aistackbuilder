// functions/_middleware.js
// Runs before every request. Catches old URL formats and 301-redirects to the new clean URLs.
// Pass-through for everything else so existing functions (e.g. /api/subscribe) keep working.

// Whitelist of valid slugs — only redirect if the slug actually exists.
// If we didn't validate, bots probing /?post=garbage would generate endless 301→404 chains.

const BLOG_SLUGS = new Set([
  'best-ai-tools-faceless-youtube',
  'best-ai-tools-youtube-automation',
  'how-to-start-faceless-youtube-channel',
  'best-ai-voice-generators-youtube',
  'best-ai-video-editors-youtubers',
  'best-ai-tools-youtube-shorts',
  'how-to-make-youtube-videos-without-face',
  'best-ai-thumbnail-makers-youtube',
  'how-to-repurpose-youtube-to-tiktok',
  'best-ai-tools-youtube-beginners',
  'best-ai-tools-youtube-channel-growth',
  'how-to-use-ai-write-youtube-scripts',
  'best-free-ai-tools-youtubers',
  'how-to-make-money-youtube-ai-tools',
  'best-ai-tools-youtube-seo',
  'how-to-create-youtube-channel-no-money',
  'best-ai-caption-generators-youtube',
  'how-to-use-elevenlabs-youtube',
  'best-ai-tools-youtube-0-subscribers',
  'how-to-batch-create-youtube-videos-ai',
])

const COMP_SLUGS = new Set([
  'elevenlabs-vs-murf-ai',
  'opus-clip-vs-repurpose-io',
  'submagic-vs-descript',
  'vidiq-vs-tubebuddy',
  'heygen-vs-ai-studios',
])

export async function onRequest(context) {
  const { request, next } = context
  const url = new URL(request.url)

  // Only handle root path — don't interfere with /api/*, /blog/*, /compare/* etc.
  if (url.pathname === '/' || url.pathname === '') {
    const postSlug = url.searchParams.get('post')
    if (postSlug && BLOG_SLUGS.has(postSlug)) {
      return Response.redirect(`${url.origin}/blog/${postSlug}/`, 301)
    }

    const compSlug = url.searchParams.get('comp')
    if (compSlug && COMP_SLUGS.has(compSlug)) {
      return Response.redirect(`${url.origin}/compare/${compSlug}/`, 301)
    }

    // If the slug is unknown, strip the bogus query and send to homepage
    if ((url.searchParams.has('post') || url.searchParams.has('comp'))) {
      return Response.redirect(`${url.origin}/`, 301)
    }
  }

  // Pass through to the normal handler (static asset, pre-rendered HTML, or another function)
  return next()
}
