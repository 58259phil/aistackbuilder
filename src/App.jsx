import { useState, useEffect, useCallback, lazy, Suspense } from 'react'
import { TOOLS, EXP_ORDER, PAIN_LABELS, TYPE_LABELS } from './tools.js'
import ToolCard from './ToolCard.jsx'
import ToolOfTheMonth from './ToolOfTheMonth.jsx'
import './index.css'

const Blog = lazy(() => import('./Blog.jsx'))
const BlogPostComponent = lazy(() => import('./Blog.jsx').then(m => ({ default: m.BlogPost })))
const Comparisons = lazy(() => import('./Comparisons.jsx'))
const ComparisonPost = lazy(() => import('./Comparisons.jsx').then(m => ({ default: m.ComparisonPost })))

/* ── Analytics helper — swap in your GA4 / Plausible calls here ── */
function track(event, props = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', event, props)
  }
  // Plausible: if (typeof window.plausible === 'function') window.plausible(event, { props })
  console.debug('[analytics]', event, props)
}

/* ── URL state helpers ── */
function encodeState(channelType, budget, painPoints, exp) {
  const p = new URLSearchParams()
  if (channelType) p.set('type', channelType)
  if (budget)      p.set('budget', budget)
  if (painPoints.size) p.set('pain', [...painPoints].join(','))
  if (exp)         p.set('exp', exp)
  return p.toString()
}

function decodeState(search) {
  const p = new URLSearchParams(search)
  return {
    channelType: p.get('type') || null,
    budget:      parseInt(p.get('budget')) || 50,
    painPoints:  new Set(p.get('pain') ? p.get('pain').split(',') : []),
    exp:         p.get('exp') || null,
  }
}

/* ── Constants ── */
const BUDGET_PRESETS = [
  { val: 25,  label: '$25',  sub: 'Bare minimum' },
  { val: 50,  label: '$50',  sub: 'Starter' },
  { val: 100, label: '$100', sub: 'Growing' },
  { val: 200, label: '$200+',sub: 'Pro setup' },
]

const CHANNEL_TYPES = [
  { val: 'faceless', icon: '🎭', label: 'Faceless creator', desc: 'AI voiceover, stock footage, no camera' },
  { val: 'talking',  icon: '🎙️', label: 'Talking head',    desc: 'On-camera, commentary or vlog style' },
  { val: 'tutorial', icon: '💻', label: 'Tutorial / screen',desc: 'Screen recording, how-to, education' },
  { val: 'podcast',  icon: '🎧', label: 'Podcast / interview', desc: 'Long-form, audio-first content' },
]

const EXP_OPTIONS = [
  { val: 'new',         icon: '🌱', label: 'Just starting', desc: '0–3 months · under 1k subs' },
  { val: 'growing',     icon: '📈', label: 'Growing',       desc: '3–18 months · 1k–10k subs' },
  { val: 'established', icon: '🏆', label: 'Established',   desc: '18+ months · 10k+ subs' },
]

const WHY_MAP = {
  scripting:  'Matched for scripting help',
  editing:    'Matched for video editing',
  thumbnails: 'Matched for thumbnails',
  seo:        'Matched for SEO & growth',
  voiceover:  'Matched for voiceover',
  repurpose:  'Matched for repurposing',
  avatar:     'Matched for AI avatars',
  captions:   'Matched for captions',
}

/* ── Main App ── */
export default function App() {
  const [page, setPage]           = useState('home') // 'home' | 'quiz' | 'results' | 'disclosure' | 'blog' | 'blogpost'
  const [step, setStep]           = useState(1)
  const [channelType, setChannelType] = useState(null)
  const [budget, setBudget]       = useState(50)
  const [painPoints, setPainPoints] = useState(new Set())
  const [exp, setExp]             = useState(null)
  const [stack, setStack]         = useState(null)
  const [filterCat, setFilterCat] = useState('all')
  const [filterTier, setFilterTier] = useState('all')
  const [sortBy, setSortBy]       = useState('match')
  const [emailVal, setEmailVal]   = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [emailLoading, setEmailLoading] = useState(false)
  const [copied, setCopied]       = useState(false)
  const [shareUrl, setShareUrl]   = useState('')
  const [blogPostId, setBlogPostId] = useState(null)
  const [compPostId, setCompPostId] = useState(null)
  const [stackCount, setStackCount] = useState(() => {
    try { return parseInt(localStorage.getItem('stackCount') || '999') } catch { return 999 }
  })

  /* ── Fetch live counter on mount ── */
  useEffect(() => {
    fetch('/api/counter').then(r => r.json()).then(d => {
      setStackCount(d.count)
      try { localStorage.setItem('stackCount', String(d.count)) } catch {}
    }).catch(() => {})
  }, [])

  /* ── Load state from URL on mount ── */
  useEffect(() => {
    const { channelType: ct, budget: b, painPoints: pp, exp: e } = decodeState(window.location.search)
    if (ct && pp.size && e) {
      setChannelType(ct); setBudget(b); setPainPoints(pp); setExp(e)
      computeAndShowStack(ct, b, pp, e)
      track('shared_link_loaded', { type: ct })
    }
    // Check for disclosure anchor
    if (window.location.hash === '#disclosure') setPage('disclosure')

    // Path-based routing for pre-rendered pages
    const pathname = window.location.pathname
    const blogMatch = pathname.match(/^\/blog\/([^/]+)\/?$/)
    const compMatch = pathname.match(/^\/compare\/([^/]+)\/?$/)
    if (blogMatch) {
      setBlogPostId(blogMatch[1])
      setPage('blogpost')
    } else if (pathname === '/blog' || pathname === '/blog/') {
      setPage('blog')
    } else if (compMatch) {
      setCompPostId(compMatch[1])
      setPage('comppost')
    } else if (pathname === '/compare' || pathname === '/compare/') {
      setPage('comparisons')
    }
  }, [])

  /* ── Build stack ── */
  function computeAndShowStack(ct, b, pp, e) {
    const userExpVal = EXP_ORDER[e]
    const filtered = TOOLS.filter(t =>
      t.types.includes(ct) &&
      t.price <= b &&
      EXP_ORDER[t.minExp] <= userExpVal &&
      t.tags.some(tag => pp.has(tag))
    )
    const byCat = {}
    filtered.forEach(t => {
      if (!byCat[t.cat] || t.commissionNum > byCat[t.cat].commissionNum) byCat[t.cat] = t
    })
    const result = Object.values(byCat)
    setStack(result)
    setPage('results')
    const url = `${window.location.origin}${window.location.pathname}?${encodeState(ct, b, pp, e)}`
    setShareUrl(url)
    window.history.replaceState({}, '', `?${encodeState(ct, b, pp, e)}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    track('stack_built', { type: ct, budget: b, exp: e, tool_count: result.length })
    // Increment the live counter
    fetch('/api/counter', { method: 'POST' })
      .then(r => r.json())
      .then(d => setStackCount(d.count))
      .catch(() => {})
  }

  function buildStack() {
    computeAndShowStack(channelType, budget, painPoints, exp)
  }

  function restart() {
    setChannelType(null); setBudget(50); setPainPoints(new Set()); setExp(null)
    setStack(null); setStep(1); setFilterCat('all'); setSortBy('match')
    setEmailSent(false); setEmailVal('')
    window.history.replaceState({}, '', window.location.pathname)
    setPage('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function togglePain(key) {
    setPainPoints(prev => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  /* ── Email submit — calls Netlify function → Resend ── */
  async function handleEmailSubmit(e) {
    e.preventDefault()
    if (!emailVal.includes('@')) return
    setEmailLoading(true)
    track('email_submitted', { type: channelType })

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: emailVal,
          channelType,
          budget,
          tools: stack.map(t => ({ name: t.name, desc: t.desc, price: t.price, affiliateUrl: t.affiliateUrl })),
        }),
      })

      if (!res.ok) throw new Error('Server error')
      setEmailSent(true)
    } catch (err) {
      console.error(err)
      alert('Something went wrong — please try again or email us directly.')
    } finally {
      setEmailLoading(false)
    }
  }

  /* ── Copy share URL ── */
  function copyUrl() {
    navigator.clipboard?.writeText(shareUrl).catch(() => {})
    setCopied(true)
    track('share_url_copied', { type: channelType })
    setTimeout(() => setCopied(false), 2000)
  }

  /* ── Derived results data ── */
  const categories = stack ? ['all', ...new Set(stack.map(t => t.cat))] : []

  const displayedStack = stack ? [...stack]
    .filter(t => filterCat === 'all' || t.cat === filterCat)
    .filter(t => filterTier === 'all' || t.tier === filterTier)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      return b.commissionNum - a.commissionNum // default: match (best commission first)
    }) : []

  const withAffiliate = displayedStack.filter(t => t.commissionNum > 0)
  const noAffiliate   = displayedStack.filter(t => t.commissionNum === 0)
  const totalCost     = stack ? stack.reduce((s, t) => s + t.price, 0) : 0
  const sliderPct     = Math.round(((budget - 25) / (250 - 25)) * 100)

  /* ── Why matched ── */
  function getWhy(tool) {
    const matched = tool.tags.find(tag => painPoints.has(tag))
    return matched ? WHY_MAP[matched] : null
  }

  /* ════════════════════════════════════════
     RENDER
  ════════════════════════════════════════ */
  return (
    <div className="page">
      <div className="bg-glow" />
      <div className="container">

        {/* ── Top nav ── */}
        <nav className="topnav">
          <a className="topnav-logo" href="/" onClick={e => { e.preventDefault(); restart() }}>
            <span style={{ color: 'var(--accent)' }}>◆</span> AI Stack Builder
          </a>
          <div className="topnav-links">
            {page !== 'home' && (
              <a className="topnav-link" href="/" onClick={e => { e.preventDefault(); restart() }}>Home</a>
            )}
            <a className="topnav-link" href="#disclosure" onClick={e => { e.preventDefault(); setPage('disclosure'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Disclosure</a>
          </div>
        </nav>

        {/* ══════════ HOME PAGE ══════════ */}
        {page === 'home' && (
          <div className="fade-up">
            <div className="header">
              <div className="logo-pill"><span className="logo-dot" />Free tool · No signup required</div>
              <h1 className="h1">Your personalised AI tool stack — <span className="h1-accent">for YouTubers</span></h1>
              <p className="subtitle">Answer 4 quick questions. Get a curated list of the best AI tools matched to your channel type, budget, and goals.</p>
              <button className="btn-primary btn-lg" onClick={() => { setPage('quiz'); track('quiz_started') }}>
                Build my stack →
              </button>
            </div>

            <div className="counter-card fade-up" style={{ animationDelay: '0.08s' }}>
              <div className="counter-num">{stackCount.toLocaleString()}</div>
              <div className="counter-label">Stacks built by creators</div>
            </div>

            <div className="stat-row">
              {[
                { n: '25+', label: 'AI tools rated & reviewed' },
                { n: '4',   label: 'Questions to get your stack' },
                { n: '100%', label: 'Free to use' },
              ].map((s, i) => (
                <div key={i} className="stat-card fade-up" style={{ animationDelay: `${0.1 + i * 0.08}s` }}>
                  <div className="stat-num">{s.n}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            {/* ── Tool of the Month — auto-rotates by month ── */}
            <ToolOfTheMonth />

            <div className="how-section fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="section-title">How it works</div>
              <div className="how-steps">
                {[
                  { n: '1', title: 'Tell us about your channel', text: 'Channel type, budget, experience level, and where you spend the most time.' },
                  { n: '2', title: 'We match you to tools', text: 'Our algorithm filters 25+ tools to only show what fits your exact situation.' },
                  { n: '3', title: 'Try the tools for free', text: 'Every tool in your stack has a free trial. Try before you subscribe.' },
                  { n: '4', title: 'Share your stack', text: 'Get a unique link to your personalised stack you can save or share.' },
                ].map(s => (
                  <div key={s.n} className="how-step">
                    <span className="how-num">{s.n}</span>
                    <span className="how-text"><strong>{s.title}</strong>{s.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ══════════ QUIZ ══════════ */}
        {page === 'quiz' && (
          <div className="step-wrap">
            <div className="progress-bar">
              {[1,2,3,4].map(i => (
                <div key={i} className={`prog-seg${i < step ? ' done' : ''}${i === step ? ' active' : ''}`} />
              ))}
            </div>
            <div className="step-meta">
              <span className="step-label-text">Step {step} of 4</span>
              <span className="step-counter">AI Stack Builder</span>
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <div className="fade-up">
                <h2 className="step-title">What kind of YouTuber are you?</h2>
                <p className="step-sub">Pick the format that best describes your channel.</p>
                <div className="option-grid">
                  {CHANNEL_TYPES.map(o => (
                    <button key={o.val} className={`option-card${channelType === o.val ? ' selected' : ''}`} onClick={() => setChannelType(o.val)}>
                      {channelType === o.val && <span className="check-dot">✓</span>}
                      <span className="card-icon">{o.icon}</span>
                      <span className="card-label">{o.label}</span>
                      <span className="card-desc">{o.desc}</span>
                    </button>
                  ))}
                </div>
                <div className="nav">
                  <button className="btn-ghost" onClick={() => { setPage('home'); track('quiz_abandoned', { step: 1 }) }}>Back</button>
                  <button className="btn-primary" onClick={() => { setStep(2); track('quiz_step', { step: 1, value: channelType }) }} disabled={!channelType}>Next →</button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="fade-up">
                <h2 className="step-title">What's your monthly tool budget?</h2>
                <p className="step-sub">We'll only show tools that fit within your budget.</p>
                <div className="slider-row">
                  <span className="slider-label">Budget</span>
                  <input type="range" min="25" max="250" step="5" value={budget} className="slider"
                    style={{ '--pct': `${sliderPct}%` }}
                    onChange={e => setBudget(Number(e.target.value))} />
                  <span className="budget-display">${budget}/mo</span>
                </div>
                <div className="option-grid four-col">
                  {BUDGET_PRESETS.map(b => (
                    <button key={b.val} className={`option-card${budget === b.val ? ' selected' : ''}`} onClick={() => setBudget(b.val)}>
                      <span className="card-label">{b.label}</span>
                      <span className="card-desc">{b.sub}</span>
                    </button>
                  ))}
                </div>
                <div className="nav">
                  <button className="btn-ghost" onClick={() => setStep(1)}>Back</button>
                  <button className="btn-primary" onClick={() => { setStep(3); track('quiz_step', { step: 2, value: budget }) }}>Next →</button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="fade-up">
                <h2 className="step-title">What takes the most time?</h2>
                <p className="step-sub">Select all that apply — we'll prioritise tools for these areas.</p>
                <div className="check-grid">
                  {Object.entries(PAIN_LABELS).map(([key, label]) => (
                    <button key={key} className={`check-item${painPoints.has(key) ? ' checked' : ''}`} onClick={() => togglePain(key)}>
                      <span className="check-box">{painPoints.has(key) ? '✓' : ''}</span>
                      <span className="check-label-text">{label}</span>
                    </button>
                  ))}
                </div>
                <div className="nav">
                  <button className="btn-ghost" onClick={() => setStep(2)}>Back</button>
                  <button className="btn-primary" onClick={() => { setStep(4); track('quiz_step', { step: 3 }) }} disabled={painPoints.size === 0}>Next →</button>
                </div>
              </div>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div className="fade-up">
                <h2 className="step-title">How long have you been on YouTube?</h2>
                <p className="step-sub">This helps us match tool complexity to your stage.</p>
                <div className="option-grid three-col">
                  {EXP_OPTIONS.map(o => (
                    <button key={o.val} className={`option-card${exp === o.val ? ' selected' : ''}`} onClick={() => setExp(o.val)}>
                      {exp === o.val && <span className="check-dot">✓</span>}
                      <span className="card-icon">{o.icon}</span>
                      <span className="card-label">{o.label}</span>
                      <span className="card-desc">{o.desc}</span>
                    </button>
                  ))}
                </div>
                <div className="nav">
                  <button className="btn-ghost" onClick={() => setStep(3)}>Back</button>
                  <button className="btn-primary" onClick={buildStack} disabled={!exp}>Build my stack →</button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ══════════ RESULTS ══════════ */}
        {page === 'results' && stack && (
          <div className="results-wrap fade-up" style={{ marginTop: 36 }}>

            <div className="results-header">
              <h2 className="results-title">Your recommended AI stack</h2>
              <p className="results-sub">
                {TYPE_LABELS[channelType]} · ${budget}/mo budget · {exp} creator · {stack.length} tools matched
              </p>
            </div>

            {/* Filter + Sort bar */}
            {stack.length > 2 && (
              <div className="filter-bar">
                <span className="filter-label">Filter:</span>
                {categories.map(cat => (
                  <button key={cat} className={`filter-btn${filterCat === cat ? ' active' : ''}`} onClick={() => setFilterCat(cat)}>
                    {cat === 'all' ? 'All' : cat}
                  </button>
                ))}
                <div className="filter-divider" />
                <button className={`filter-btn${filterTier === 'all' ? ' active' : ''}`} onClick={() => setFilterTier('all')}>All plans</button>
                <button className={`filter-btn${filterTier === 'free' ? ' active' : ''}`} onClick={() => setFilterTier('free')}>Free</button>
                <button className={`filter-btn${filterTier === 'freemium' ? ' active' : ''}`} onClick={() => setFilterTier('freemium')}>Freemium</button>
                <button className={`filter-btn${filterTier === 'paid' ? ' active' : ''}`} onClick={() => setFilterTier('paid')}>Paid only</button>
                <select className="sort-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                  <option value="match">Sort: Best match</option>
                  <option value="price-asc">Sort: Price low–high</option>
                  <option value="price-desc">Sort: Price high–low</option>
                </select>
              </div>
            )}

            {/* Tool cards */}
            {withAffiliate.length > 0 && (
              <>
                <div className="section-label">Recommended tools</div>
                {withAffiliate.map((t, i) => (
                  <ToolCard key={t.id} tool={t} delay={i * 0.05} why={getWhy(t)} onClick={() => track('tool_clicked', { tool: t.name, type: channelType })} />
                ))}
              </>
            )}

            {noAffiliate.length > 0 && (
              <>
                <div className="section-label">Also worth trying</div>
                {noAffiliate.map((t, i) => (
                  <ToolCard key={t.id} tool={t} delay={(withAffiliate.length + i) * 0.05} why={getWhy(t)} dimmed onClick={() => track('tool_clicked', { tool: t.name, type: channelType })} />
                ))}
              </>
            )}

            {displayedStack.length === 0 && (
              <div className="empty-state">
                <div style={{ fontSize: 32, marginBottom: 12 }}>🔍</div>
                <div>No tools matched this filter.</div>
                <div style={{ marginTop: 6 }}>
                  <button className="btn-ghost" style={{ marginTop: 12 }} onClick={() => setFilterCat('all')}>Show all tools</button>
                </div>
              </div>
            )}

            {/* Summary */}
            <div className="summary-card">
              <div className="summary-item">
                <div className="summary-label">Tools in your stack</div>
                <div className="summary-value">{stack.length}</div>
                <div className="summary-sub">{stack.filter(t => t.hasTrial).length > 0 ? `${stack.filter(t => t.hasTrial).length} with free trials` : 'All have free trials or tiers'}</div>
              </div>
              <div className="summary-item">
                <div className="summary-label">Est. monthly cost</div>
                <div className="summary-value">${totalCost}/mo</div>
                <div className="summary-sub">if subscribed to all tools</div>
              </div>
            </div>

            {/* Share URL */}
            <div className="share-row">
              <span className="share-label">Share your stack:</span>
              <span className="share-url">{shareUrl}</span>
              <button className={`copy-btn${copied ? ' copied' : ''}`} onClick={copyUrl}>
                {copied ? '✓ Copied' : 'Copy link'}
              </button>
            </div>

            {/* Email capture */}
            {!emailSent ? (
              <div className="email-capture">
                <div className="email-capture-title">📬 Save your stack to your inbox</div>
                <div className="email-capture-sub">Get your tool recommendations as a PDF + weekly tips on growing your channel with AI.</div>
                <form className="email-form" onSubmit={handleEmailSubmit}>
                  <input
                    type="email"
                    className="email-input"
                    placeholder="your@email.com"
                    value={emailVal}
                    onChange={e => setEmailVal(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn-primary" disabled={emailLoading}>
                    {emailLoading ? <span className="spinner" /> : 'Send →'}
                  </button>
                </form>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 10 }}>
                  No spam. Unsubscribe any time. By subscribing you agree to our <a href="#disclosure" style={{ color: 'var(--text-muted)' }} onClick={e => { e.preventDefault(); setPage('disclosure') }}>affiliate disclosure</a>.
                </div>
              </div>
            ) : (
              <div className="email-capture" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>🎉</div>
                <div className="email-capture-title">You're in!</div>
                <div className="email-capture-sub">Check your inbox — your stack summary is on its way.</div>
              </div>
            )}

            {/* Bottom CTAs */}
            <div className="cta-row">
              <button className="btn-ghost" onClick={restart}>← Start over</button>
              <button className="btn-ghost" onClick={() => window.print()}>Print / save PDF</button>
            </div>
          </div>
        )}

        {/* ══════════ DISCLOSURE PAGE ══════════ */}
        {page === 'disclosure' && (
          <div className="disclosure-page fade-up" style={{ marginTop: 40 }}>
            <h2>Affiliate Disclosure</h2>
            <p>
              This website, AI Stack Builder, participates in affiliate marketing programs. This means we may earn a commission when you click on links to tools and make a purchase or sign up for a subscription — at no additional cost to you.
            </p>
            <p>
              Our recommendations are based on genuine research and usefulness to YouTubers. We only include tools we believe provide real value. Affiliate relationships do not influence our recommendations — tools are included and ranked based on their fit for your stated goals, budget, and channel type.
            </p>
            <p>
              Commission rates and program availability may change over time. We aim to keep this information up to date but recommend verifying current rates directly with each tool provider before making decisions based on affiliate earnings.
            </p>
            <p>
              This disclosure is made in accordance with the FTC's guidelines on endorsements and testimonials, and equivalent regulations in Australia (ACCC), the UK (ASA/CAP), and the European Union.
            </p>
            <p>
              If you have any questions about our affiliate relationships, please contact us at: <a href="mailto:hello@aistackbuilder.tech">hello@aistackbuilder.tech</a>
            </p>
            <div style={{ marginTop: 24 }}>
              <button className="btn-ghost" onClick={() => { setPage('home'); restart() }}>← Back to home</button>
            </div>
          </div>
        )}

        {/* ── Blog list ── */}
        {page === 'blog' && (
          <Suspense fallback={<div className="loading-spin">Loading...</div>}>
            <Blog
              onBack={() => { setPage('home'); window.history.pushState({}, '', '/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              onPost={(id) => { setBlogPostId(id); setPage('blogpost'); window.history.pushState({}, '', `/blog/${id}/`); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            />
          </Suspense>
        )}

        {/* ── Blog post ── */}
        {page === 'blogpost' && (
          <Suspense fallback={<div className="loading-spin">Loading...</div>}>
            <BlogPostComponent
              postId={blogPostId}
              onBack={() => { setPage('home'); window.history.pushState({}, '', '/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              onBlog={() => { setPage('blog'); window.history.pushState({}, '', '/blog/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            />
          </Suspense>
        )}

        {/* ── Comparisons list ── */}
        {page === 'comparisons' && (
          <Suspense fallback={<div className="loading-spin">Loading...</div>}>
            <Comparisons
              onBack={() => { setPage('home'); window.history.pushState({}, '', '/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              onPost={(id) => { setCompPostId(id); setPage('comppost'); window.history.pushState({}, '', `/compare/${id}/`); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            />
          </Suspense>
        )}

        {/* ── Comparison post ── */}
        {page === 'comppost' && (
          <Suspense fallback={<div className="loading-spin">Loading...</div>}>
            <ComparisonPost
              postId={compPostId}
              onBack={() => { setPage('home'); window.history.pushState({}, '', '/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              onComparisons={() => { setPage('comparisons'); window.history.pushState({}, '', '/compare/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            />
          </Suspense>
        )}

        {/* ── Footer ── */}
        <footer className="footer">
          <span>© {new Date().getFullYear()} AI Stack Builder</span>
          <a href="/blog/" onClick={e => { e.preventDefault(); setPage('blog'); window.history.pushState({}, '', '/blog/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Blog</a>
          <a href="/compare/" onClick={e => { e.preventDefault(); setPage('comparisons'); window.history.pushState({}, '', '/compare/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Comparisons</a>
          <a href="#disclosure" onClick={e => { e.preventDefault(); setPage('disclosure'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Affiliate Disclosure</a>
          <a href="mailto:hello@aistackbuilder.tech">Contact</a>
          <span className="footer-right" style={{ color: 'var(--text-muted)', fontSize: 11 }}>
            Tool rates verified {new Date().getFullYear()} · Always check before promoting
          </span>
        </footer>

      </div>
    </div>
  )
}


