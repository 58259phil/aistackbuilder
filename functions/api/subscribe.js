// functions/api/subscribe.js — Cloudflare Pages Function
// 4-email welcome sequence via Resend scheduled emails

const STYLES = {
  body: 'background:#0a0a0a;color:#f0ede8;font-family:"Helvetica Neue",Arial,sans-serif;margin:0;padding:0;',
  wrap: 'max-width:560px;margin:0 auto;padding:40px 24px;',
  brand: 'color:#60a5fa;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;',
  h1: 'font-size:24px;font-weight:800;line-height:1.2;margin:0 0 12px;color:#f0ede8;',
  p: 'font-size:14px;color:#8a8680;line-height:1.7;margin:0 0 20px;',
  card: 'background:#121212;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px 22px;margin-bottom:24px;',
  tip: 'background:#0f1929;border:1px solid rgba(96,165,250,0.2);border-radius:10px;padding:16px 18px;margin-bottom:28px;',
  btn: 'display:inline-block;background:#60a5fa;color:#0a0a0a;padding:12px 24px;border-radius:8px;font-size:14px;font-weight:700;text-decoration:none;margin-top:8px;',
  footer: 'font-size:11px;color:#4a4845;line-height:1.7;margin-top:32px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.06);',
}

function emailWrapper(content) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="${STYLES.body}"><div style="${STYLES.wrap}">
<div style="margin-bottom:28px;"><span style="${STYLES.brand}">AI Stack Builder</span></div>
${content}
<div style="${STYLES.footer}">
You're receiving this because you signed up at aistackbuilder.tech.<br>
Affiliate disclosure: Some links are affiliate links. We may earn a commission at no cost to you.
<a href="https://www.aistackbuilder.tech/#disclosure" style="color:#4a4845;">Full disclosure →</a>
</div>
</div></body></html>`
}

function email1(channelType, budget, tools) {
  const toolListHtml = tools.length > 0
    ? tools.map(t => `<li style="margin-bottom:10px;"><strong style="color:#f0ede8;">${t.name}</strong> <span style="color:#60a5fa;font-size:11px;font-weight:600;">${t.cat}</span><br><span style="color:#8a8680;font-size:13px;">${t.desc}</span>${t.affiliateUrl ? ` <a href="${t.affiliateUrl}" style="color:#60a5fa;font-size:12px;">Try free →</a>` : ''}</li>`).join('')
    : '<li style="color:#8a8680;">No tools matched</li>'

  return emailWrapper(`
    <h1 style="${STYLES.h1}">Your AI stack for YouTube 🎬</h1>
    <p style="${STYLES.p}">Here's the personalised tool stack we built for you — a <strong style="color:#f0ede8;">${channelType || 'YouTube'} creator</strong> with a <strong style="color:#f0ede8;">$${budget || '50'}/mo</strong> budget.</p>
    <div style="${STYLES.card}">
      <p style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#60a5fa;margin:0 0 14px;">Your recommended tools</p>
      <ul style="list-style:none;margin:0;padding:0;">${toolListHtml}</ul>
    </div>
    <p style="${STYLES.p}">Each tool above has a free trial. Don't subscribe to all of them at once — pick the one that solves your biggest problem right now and try it for 2 weeks first.</p>
    <div style="${STYLES.tip}">
      <p style="font-size:13px;color:#60a5fa;margin:0 0 6px;font-weight:600;">💡 Pro tip</p>
      <p style="font-size:13px;color:#8a8680;margin:0;line-height:1.6;">The biggest mistake creators make is subscribing to 5 tools at once and using none of them consistently. One tool, mastered, beats five tools dabbled in.</p>
    </div>
    <p style="${STYLES.p}">Tomorrow we'll send you a deeper dive on the most impactful tool in your stack.</p>
  `)
}

function email2(channelType, tools) {
  const topTool = tools[0]
  if (!topTool) return null

  const useCases = {
    faceless: 'faceless YouTube creators who need consistent voiceover without recording themselves',
    talking: 'talking head creators who want to save hours in post-production',
    tutorial: 'tutorial creators who need to sync voiceover to screen recordings',
    podcast: 'podcast creators who need accurate transcripts and clean audio',
  }

  return emailWrapper(`
    <h1 style="${STYLES.h1}">Your #1 tool: ${topTool.name} — here's how to get started 🚀</h1>
    <p style="${STYLES.p}">Yesterday we sent your full stack. Today we're going deeper on <strong style="color:#f0ede8;">${topTool.name}</strong> — the tool at the top of your list.</p>
    <div style="${STYLES.card}">
      <p style="font-size:18px;font-weight:800;color:#f0ede8;margin:0 0 8px;">${topTool.icon} ${topTool.name}</p>
      <p style="font-size:12px;color:#60a5fa;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 12px;">${topTool.cat}</p>
      <p style="font-size:14px;color:#8a8680;line-height:1.7;margin:0 0 16px;">${topTool.desc}</p>
      <p style="font-size:13px;color:#8a8680;line-height:1.7;margin:0;"><strong style="color:#f0ede8;">Best for:</strong> ${useCases[channelType] || 'YouTube creators who want to save time on production'}.</p>
    </div>
    <p style="font-size:13px;font-weight:700;color:#f0ede8;margin:0 0 8px;">How to get started in 3 steps:</p>
    <ol style="font-size:14px;color:#8a8680;line-height:1.9;padding-left:20px;margin:0 0 24px;">
      <li>Sign up for the free trial — no credit card required</li>
      <li>Run a small test with your next video's script or footage</li>
      <li>Compare the output to your current process before committing</li>
    </ol>
    <p style="margin:0 0 16px;">
      ${topTool.affiliateUrl ? `<a href="${topTool.affiliateUrl}" style="${STYLES.btn}">Try ${topTool.name} free →</a>` : `<a href="https://www.aistackbuilder.tech" style="${STYLES.btn}">View your full stack →</a>`}
    </p>
    <p style="${STYLES.p}">In 2 days we'll share what other ${channelType || 'YouTube'} creators in your niche are using — some tools you might not have considered.</p>
  `)
}

function email3(channelType, tools) {
  const toolNames = tools.slice(0, 3).map(t => t.name).join(', ')
  const channelLabels = {
    faceless: 'Faceless YouTube',
    talking: 'Talking head',
    tutorial: 'Tutorial',
    podcast: 'Podcast',
  }
  const label = channelLabels[channelType] || 'YouTube'

  const workflowSteps = {
    faceless: [
      { step: '1. Script', tool: 'Koala AI or ChatGPT', detail: 'Generate a first draft from your target keyword in minutes' },
      { step: '2. Voiceover', tool: 'ElevenLabs', detail: 'Paste the script, choose a voice, download the MP3' },
      { step: '3. Video assembly', tool: 'InVideo AI', detail: 'AI matches stock footage to your script automatically' },
      { step: '4. Captions', tool: 'Submagic', detail: 'Animated word-by-word captions in under 3 minutes' },
      { step: '5. Shorts', tool: 'Opus Clip', detail: 'AI clips your long video into 5-10 Shorts automatically' },
    ],
    talking: [
      { step: '1. Script', tool: 'ChatGPT', detail: 'Outline and draft your talking points quickly' },
      { step: '2. Edit', tool: 'Descript', detail: 'Edit video by editing the transcript — remove ums and silences in one click' },
      { step: '3. Captions', tool: 'Submagic', detail: 'Animated captions for Shorts and accessibility' },
      { step: '4. Thumbnail', tool: 'ThumbnailTest', detail: 'A/B test before publishing to maximise CTR' },
      { step: '5. Distribute', tool: 'Repurpose.io', detail: 'Automatically post to TikTok, Instagram, Facebook' },
    ],
    tutorial: [
      { step: '1. Keywords', tool: 'VidIQ', detail: 'Find low-competition keywords before scripting' },
      { step: '2. Script', tool: 'Koala AI', detail: 'SEO-optimised script based on what already ranks' },
      { step: '3. Voiceover', tool: 'Murf AI', detail: 'Sync voiceover directly to your screen recording' },
      { step: '4. Captions', tool: 'VEED.IO', detail: 'One-click auto-subtitles in 100+ languages' },
      { step: '5. Thumbnail', tool: 'ThumbnailTest', detail: 'Test thumbnail CTR before going live' },
    ],
    podcast: [
      { step: '1. Record', tool: 'Adobe Podcast', detail: 'Free AI audio enhancer removes background noise' },
      { step: '2. Transcribe', tool: 'Notta.ai', detail: 'Accurate transcript with speaker identification' },
      { step: '3. Audio clean', tool: 'LALAL.AI', detail: 'Remove music bleed and audio artefacts' },
      { step: '4. Edit', tool: 'Descript', detail: 'Edit the audio by editing the text transcript' },
      { step: '5. Clips', tool: 'Opus Clip', detail: 'Extract best moments as Shorts automatically' },
    ],
  }

  const steps = workflowSteps[channelType] || workflowSteps.faceless
  const stepsHtml = steps.map(s => `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid rgba(255,255,255,0.06);vertical-align:top;">
        <span style="font-size:11px;font-weight:700;color:#60a5fa;">${s.step}</span>
      </td>
      <td style="padding:10px 12px;border-bottom:1px solid rgba(255,255,255,0.06);vertical-align:top;">
        <strong style="color:#f0ede8;font-size:13px;">${s.tool}</strong><br>
        <span style="color:#8a8680;font-size:12px;">${s.detail}</span>
      </td>
    </tr>
  `).join('')

  return emailWrapper(`
    <h1 style="${STYLES.h1}">The ${label} creator workflow — what's working in 2025 📊</h1>
    <p style="${STYLES.p}">You're a <strong style="color:#f0ede8;">${label} creator</strong>. Here's the exact production workflow that top creators in your format are using right now — with the specific tools at each step.</p>
    <div style="${STYLES.card}">
      <p style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#60a5fa;margin:0 0 14px;">${label} production workflow</p>
      <table style="width:100%;border-collapse:collapse;">
        ${stepsHtml}
      </table>
    </div>
    <p style="${STYLES.p}">Your current stack already includes <strong style="color:#f0ede8;">${toolNames}</strong>. That covers most of these steps — you may only need 1-2 more tools to complete the workflow.</p>
    <p style="margin:0 0 16px;">
      <a href="https://www.aistackbuilder.tech" style="${STYLES.btn}">Review your full stack →</a>
    </p>
    <p style="${STYLES.p}">In 3 days we'll check in on how you're getting on and share some tips for getting the most out of your tools.</p>
  `)
}

function email4(channelType, tools) {
  const hasAffiliate = tools.filter(t => t.affiliateUrl)
  const topAffiliate = hasAffiliate[0]

  return emailWrapper(`
    <h1 style="${STYLES.h1}">One week in — are your tools saving you time? ⏱️</h1>
    <p style="${STYLES.p}">It's been a week since you built your AI stack. By now you've hopefully had a chance to test at least one of the tools we recommended.</p>
    <div style="${STYLES.tip}">
      <p style="font-size:13px;color:#60a5fa;margin:0 0 6px;font-weight:600;">🎯 Quick check-in</p>
      <p style="font-size:13px;color:#8a8680;margin:0;line-height:1.6;">If you haven't tried any tools yet, that's completely normal. The hardest part is starting. Pick the one tool that solves your most painful problem and spend 20 minutes on their free trial today.</p>
    </div>
    <p style="font-size:13px;font-weight:700;color:#f0ede8;margin:0 0 12px;">A few things worth knowing:</p>
    <ul style="font-size:14px;color:#8a8680;line-height:1.9;padding-left:20px;margin:0 0 24px;">
      <li>Most tools have free trials — you don't need to pay until you've confirmed it works for your workflow</li>
      <li>The biggest ROI comes from tools that replace something you currently do manually every week</li>
      <li>If your stack feels wrong for your channel, you can retake the quiz any time to get fresh recommendations</li>
    </ul>
    ${topAffiliate ? `
    <div style="${STYLES.card}">
      <p style="font-size:13px;color:#8a8680;margin:0 0 10px;">Haven't tried <strong style="color:#f0ede8;">${topAffiliate.name}</strong> yet? It's the highest-impact tool in your stack — here's the free trial link:</p>
      <a href="${topAffiliate.affiliateUrl}" style="${STYLES.btn}">Try ${topAffiliate.name} free →</a>
    </div>` : ''}
    <p style="${STYLES.p}">Your channel type or goals may have changed — or you might want to explore different tools. Retake the quiz any time to get an updated recommendation.</p>
    <p style="margin:0 0 16px;">
      <a href="https://www.aistackbuilder.tech" style="${STYLES.btn}">Retake the quiz →</a>
    </p>
  `)
}

async function sendEmail(apiKey, from, to, subject, html, scheduledAt = null) {
  const payload = {
    from: `AI Stack Builder <${from}>`,
    to: [to],
    subject,
    html,
  }
  if (scheduledAt) payload.scheduled_at = scheduledAt

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('Resend error:', err)
    return false
  }
  return true
}

export async function onRequestPost(context) {
  const { request, env } = context

  let body
  try {
    body = await request.json()
  } catch {
    return new Response('Invalid JSON', { status: 400 })
  }

  const { email, channelType, budget, tools = [] } = body

  if (!email || !email.includes('@')) {
    return new Response('Invalid email', { status: 400 })
  }

  const apiKey = env.RESEND_API_KEY
  const fromEmail = env.FROM_EMAIL || 'hello@aistackbuilder.tech'
  const notifyEmail = env.TO_LIST_EMAIL

  if (!apiKey) {
    return new Response('Email service not configured', { status: 500 })
  }

  // Calculate scheduled times
  const now = new Date()
  const day2 = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000).toISOString()
  const day4 = new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000).toISOString()
  const day7 = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString()

  // Email 1 — immediate
  const ok1 = await sendEmail(apiKey, fromEmail, email,
    'Your personalised AI tool stack for YouTube 🎬',
    email1(channelType, budget, tools)
  )

  if (!ok1) {
    return new Response('Failed to send email', { status: 500 })
  }

  // Email 2 — Day 2 (scheduled)
  const html2 = email2(channelType, tools)
  if (html2) {
    await sendEmail(apiKey, fromEmail, email,
      `Your #1 tool: ${tools[0]?.name || 'AI tool'} — getting started guide`,
      html2,
      day2
    )
  }

  // Email 3 — Day 4 (scheduled)
  const html3 = email3(channelType, tools)
  if (html3) {
    await sendEmail(apiKey, fromEmail, email,
      'The exact workflow top creators in your niche are using 📊',
      html3,
      day4
    )
  }

  // Email 4 — Day 7 (scheduled)
  const html4 = email4(channelType, tools)
  if (html4) {
    await sendEmail(apiKey, fromEmail, email,
      'One week in — are your tools saving you time? ⏱️',
      html4,
      day7
    )
  }

  // Notify owner of new signup
  if (notifyEmail) {
    await sendEmail(apiKey, fromEmail, notifyEmail,
      `New signup: ${email}`,
      `<p style="font-family:Arial;color:#333;">New subscriber: <strong>${email}</strong></p>
       <p style="font-family:Arial;color:#333;">Channel type: ${channelType} · Budget: $${budget}</p>
       <p style="font-family:Arial;color:#333;">Tools: ${tools.map(t => t.name).join(', ')}</p>
       <p style="font-family:Arial;color:#333;">4-email sequence scheduled: Day 2, Day 4, Day 7</p>`
    )
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
