// functions/subscribe.js — Cloudflare Pages Function
// Replaces netlify/functions/subscribe.js

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
    console.error('RESEND_API_KEY not set')
    return new Response('Email service not configured', { status: 500 })
  }

  const toolListHtml = tools.length > 0
    ? tools.map(t => `<li style="margin-bottom:8px;"><strong>${t.name}</strong> — ${t.desc} <span style="color:#888;">(${t.price === 0 ? 'Free' : `$${t.price}/mo`})</span></li>`).join('')
    : '<li>No tools in stack</li>'

  // Send welcome email to subscriber
  const welcomeRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `AI Stack Builder <${fromEmail}>`,
      to: [email],
      subject: 'Your personalised AI tool stack for YouTube 🎬',
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
        <body style="background:#0a0a0a;color:#f0ede8;font-family:'Helvetica Neue',Arial,sans-serif;margin:0;padding:0;">
          <div style="max-width:560px;margin:0 auto;padding:40px 24px;">
            <div style="margin-bottom:32px;">
              <span style="color:#60a5fa;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">AI Stack Builder</span>
            </div>
            <h1 style="font-size:26px;font-weight:800;line-height:1.2;margin:0 0 12px;color:#f0ede8;">
              Your AI stack for YouTube 🎬
            </h1>
            <p style="font-size:15px;color:#8a8680;line-height:1.7;margin:0 0 28px;">
              Here's the personalised tool stack we built for you — a <strong style="color:#f0ede8;">${channelType || 'YouTube'} creator</strong> with a <strong style="color:#f0ede8;">$${budget || '50'}/mo</strong> budget.
            </p>
            <div style="background:#121212;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px 22px;margin-bottom:24px;">
              <p style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#4a4845;margin:0 0 14px;">Your recommended tools</p>
              <ul style="list-style:none;margin:0;padding:0;font-size:14px;color:#8a8680;line-height:1.6;">
                ${toolListHtml}
              </ul>
            </div>
            <p style="font-size:14px;color:#8a8680;line-height:1.7;margin:0 0 20px;">
              Each tool above has a free trial — start with the one that saves you the most time right now.
            </p>
            <div style="background:#0f1929;border:1px solid rgba(96,165,250,0.2);border-radius:10px;padding:16px 18px;margin-bottom:28px;">
              <p style="font-size:13px;color:#60a5fa;margin:0 0 6px;font-weight:600;">💡 Pro tip</p>
              <p style="font-size:13px;color:#8a8680;margin:0;line-height:1.6;">
                Try one tool for 2 weeks before adding the next. The biggest mistake creators make is subscribing to everything at once and using none of it consistently.
              </p>
            </div>
            <p style="font-size:13px;color:#4a4845;line-height:1.7;margin:0 0 8px;">
              You're receiving this because you signed up at aistackbuilder.tech.
            </p>
            <p style="font-size:11px;color:#4a4845;">
              Affiliate disclosure: Some links in your stack are affiliate links. We may earn a commission at no cost to you.
              <a href="https://www.aistackbuilder.tech/#disclosure" style="color:#4a4845;">Full disclosure →</a>
            </p>
          </div>
        </body>
        </html>
      `,
    }),
  })

  if (!welcomeRes.ok) {
    const err = await welcomeRes.text()
    console.error('Resend error:', err)
    return new Response('Failed to send email', { status: 500 })
  }

  // Notify yourself of new signup
  if (notifyEmail) {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `AI Stack Builder <${fromEmail}>`,
        to: [notifyEmail],
        subject: `New signup: ${email}`,
        html: `<p>New subscriber: <strong>${email}</strong></p>
               <p>Channel type: ${channelType} · Budget: $${budget}</p>
               <p>Tools: ${tools.map(t => t.name).join(', ')}</p>`,
      }),
    })
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
