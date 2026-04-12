/* ── Tool of the Month — auto-rotates by calendar month ── */

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const FEATURED = [
  // January — New year, new channel
  {
    icon: '🔊',
    name: 'ElevenLabs',
    cat: 'AI Voiceover',
    price: 'From $5/mo',
    desc: 'New year, new channel? Voiceover is the #1 tool for faceless creators. ElevenLabs produces the most realistic AI voices available — clone your own voice or choose from 10,000+ voices in 32 languages. The free plan gives you 10,000 characters/month to get started.',
    url: 'https://try.elevenlabs.io/l55nms662wgu',
    cta: 'Try ElevenLabs free →',
    trial: true,
  },
  // February — Avatar videos for new faceless creators
  {
    icon: '🤖',
    name: 'HeyGen',
    cat: 'AI Avatar',
    price: 'From $29/mo',
    desc: 'Want to start a YouTube channel without being on camera? HeyGen creates photorealistic AI avatar videos from your script — no camera, no studio, no editing. Used by 30M+ creators. Create an Instant Avatar from a 2-minute video of yourself or use one of 100+ pre-built avatars.',
    url: 'https://www.heygen.com/?sid=rewardful&utm_content=creator&utm_medium=affiliate&via=phillip-bates',
    cta: 'Try HeyGen free →',
    trial: true,
  },
  // March — Q1 growth push
  {
    icon: '📊',
    name: 'VidIQ',
    cat: 'SEO & Growth',
    price: 'From $7.50/mo',
    desc: 'Q1 is the best time to double down on YouTube SEO. VidIQ shows you exactly which keywords to target, gives you daily AI-generated video ideas for your niche, and tracks how your competitors are performing. The free plan covers the basics — more than enough to get started.',
    url: 'https://vidiq.com/affiliate/',
    cta: 'Try VidIQ free →',
    trial: true,
  },
  // April — Shorts season
  {
    icon: '💬',
    name: 'Submagic',
    cat: 'Captions',
    price: 'From $20/mo',
    desc: 'YouTube Shorts season is here. Submagic generates animated word-by-word captions for your videos in under 3 minutes — the kind of polished captions you see on viral Shorts. 98.8% accurate across 48+ languages. The Magic Clips feature also extracts the best viral moments from your long videos automatically.',
    url: 'https://submagic.co/?via=phillip68',
    cta: 'Try Submagic free →',
    trial: true,
  },
  // May — Repurposing for summer
  {
    icon: '✂️',
    name: 'Opus Clip',
    cat: 'Repurposing',
    price: 'From $19/mo',
    desc: 'Summer content season is ramping up. Opus Clip turns your long YouTube videos into 5-10 viral-ready Shorts automatically — AI scores each clip for virality, adds captions, and reformats for vertical. One long video becomes a week of short-form content across TikTok, Instagram, and YouTube Shorts.',
    url: 'https://www.opus.pro/?via=fc9679',
    cta: 'Try Opus Clip free →',
    trial: true,
  },
  // June — Mid-year content refresh
  {
    icon: '🐨',
    name: 'Koala AI',
    cat: 'Scripting',
    price: 'From $9/mo',
    desc: 'Mid-year is the perfect time to refresh your content strategy. Koala AI generates YouTube scripts grounded in real SERP data — it analyses the top-ranking pages for your keyword and builds a script that covers the same content. Stop guessing what to say and let the data guide you.',
    url: 'https://koala.sh/?via=phillip-bates',
    cta: 'Try Koala AI free →',
    trial: true,
  },
  // July — Multi-platform summer
  {
    icon: '♻️',
    name: 'Repurpose.io',
    cat: 'Repurposing',
    price: 'From $25/mo',
    desc: 'Summer is peak content season across every platform. Repurpose.io automatically distributes your YouTube videos to TikTok, Instagram, Facebook, LinkedIn, and 7+ more platforms the moment you publish. Set it up once — every future video posts everywhere automatically. No manual uploading ever again.',
    url: 'https://repurpose.io?fpr=641022',
    cta: 'Try Repurpose.io free →',
    trial: true,
  },
  // August — Back to school CTR push
  {
    icon: '🖼️',
    name: 'ThumbnailTest',
    cat: 'Thumbnails',
    price: 'From $15/mo',
    desc: 'Back to school means back to optimising. Your thumbnail determines whether people click your video — ThumbnailTest A/B tests your designs with real YouTube users before you publish, so you always go live with the version that gets more clicks. Results arrive in 2-4 hours. One better thumbnail pays for months of the tool.',
    url: 'https://thumbnailtest.com/?via=phillip-bates',
    cta: 'Try ThumbnailTest free →',
    trial: true,
  },
  // September — Audio quality for autumn
  {
    icon: '🎵',
    name: 'LALAL.AI',
    cat: 'Audio',
    price: 'From $15',
    desc: 'Autumn is the time to level up your production quality. LALAL.AI removes background noise, music bleed, and audio artefacts from any recording using its Phoenix neural network — making a $50 USB mic sound like a $500 studio setup. Upload your file, download clean audio. No installation, no learning curve.',
    url: 'https://www.lalal.ai/?fp_ref=phillip53',
    cta: 'Try LALAL.AI →',
    trial: true,
  },
  // October — Halloween/seasonal thumbnails
  {
    icon: '🖼️',
    name: 'Pikzels',
    cat: 'Thumbnails',
    price: 'From $19/mo',
    desc: 'October means seasonal content — and seasonal thumbnails need to stand out. Pikzels uses AI trained on viral YouTube thumbnails to generate high-CTR designs from your video title. It also scores your existing thumbnails and tells you exactly what to improve. Perfect for the high-traffic Q4 content season.',
    url: 'https://pikzels.com?via=phillip40',
    cta: 'Try Pikzels →',
    trial: true,
  },
  // November — Pre-Christmas content push
  {
    icon: '🎥',
    name: 'InVideo AI',
    cat: 'Video Creation',
    price: 'From $25/mo',
    desc: 'The pre-Christmas content rush is here. InVideo AI turns a text prompt into a fully produced video with stock footage, AI voiceover, music, and captions — in minutes. Perfect for faceless creators who need to publish high volumes of content in Q4 without spending hours on production.',
    url: 'https://app.impact.com/campaign-promo-signup/InVideo.brand',
    cta: 'Try InVideo AI free →',
    trial: true,
  },
  // December — Year-end recap videos
  {
    icon: '🤖',
    name: 'HeyGen',
    cat: 'AI Avatar',
    price: 'From $29/mo',
    desc: 'Year-end recap videos are everywhere in December. HeyGen\'s Video Translation feature lets you dub your best videos into 175+ languages automatically — reaching international audiences you\'d otherwise miss. Accurate lip sync, professional quality, one click. Start the new year with a global audience.',
    url: 'https://www.heygen.com/?sid=rewardful&utm_content=creator&utm_medium=affiliate&via=phillip-bates',
    cta: 'Try HeyGen free →',
    trial: true,
  },
]

export default function ToolOfTheMonth() {
  const month = new Date().getMonth() // 0-11
  const tool = FEATURED[month]
  const monthName = MONTHS[month]
  const year = new Date().getFullYear()

  return (
    <div className="totm-section fade-up" style={{ animationDelay: '0.2s' }}>
      <div className="totm-badge">⭐ Tool of the Month — {monthName} {year}</div>
      <div className="totm-card">
        <div className="totm-icon">{tool.icon}</div>
        <div className="totm-body">
          <div className="totm-name">{tool.name}</div>
          <div className="totm-cat">{tool.cat}</div>
          <p className="totm-desc">{tool.desc}</p>
          <div className="totm-meta">
            <span className="totm-price">{tool.price}</span>
            {tool.trial && <span className="totm-trial">✓ Free trial available</span>}
          </div>
          <a href={tool.url} target="_blank" rel="noopener noreferrer" className="totm-btn">
            {tool.cta}
          </a>
        </div>
      </div>
    </div>
  )
}
