export const TOOLS = [
  // SCRIPTING
  {
    id: 'chatgpt', name: 'ChatGPT', icon: '✍️', cat: 'Scripting', price: 20, tier: 'paid',
    desc: 'Write scripts, hooks, descriptions, and ideas in seconds. The most versatile tool in any creator stack.',
    commission: '20% recurring', commissionNum: 4, cookie: '30 days',
    affiliateUrl: null,
    tags: ['scripting'], types: ['faceless','talking','tutorial','podcast'], minExp: 'new', hasTrial: true,
  },
  {
    id: 'koala', name: 'Koala AI', icon: '🐨', cat: 'Scripting', price: 25, tier: 'paid',
    desc: 'AI writer that generates YouTube scripts, descriptions and hooks using live SERP data. Powered by GPT-4o with built-in SEO research.',
    commission: '30% lifetime recurring', commissionNum: 7.5, cookie: '60 days',
    affiliateUrl: 'https://koala.sh/?via=phillip-bates',
    tags: ['scripting'], types: ['talking','tutorial'], minExp: 'growing', hasTrial: true,
  },
  {
    id: 'writesonic', name: 'Writesonic', icon: '📝', cat: 'Scripting', price: 16, tier: 'paid',
    desc: 'AI script and content writer with SEO built in. Covers YouTube scripts, descriptions, hooks, and repurposed blog posts.',
    commission: '30% lifetime recurring', commissionNum: 4.8, cookie: '30 days',
    affiliateUrl: 'https://affiliates.writesonic.com/',
    tags: ['scripting'], types: ['faceless','talking','tutorial','podcast'], minExp: 'new', hasTrial: true,
  },
  {
    id: 'grammarly', name: 'Grammarly', icon: '✅', cat: 'Scripting', price: 0, tier: 'freemium',
    desc: 'AI grammar and clarity editor. Every creator needs polished scripts and descriptions.',
    commission: '$0.20 free signup / $20 per upgrade', commissionNum: 3, cookie: '90 days',
    affiliateUrl: 'https://www.grammarly.com/affiliates',
    tags: ['scripting'], types: ['faceless','talking','tutorial','podcast'], minExp: 'new', hasTrial: true,
  },

  // VOICEOVER & AUDIO
  {
    id: 'elevenLabs', name: 'ElevenLabs', icon: '🔊', cat: 'Voiceover', price: 22, tier: 'paid',
    desc: 'The #1 AI voice tool. Ultra-realistic voices and instant voice cloning. Essential for faceless channels.',
    commission: '22% recurring for 12 months', commissionNum: 4.84, cookie: '90 days',
    affiliateUrl: 'https://try.elevenlabs.io/l55nms662wgu',
    tags: ['voiceover'], types: ['faceless','tutorial'], minExp: 'new', hasTrial: true,
  },
  {
    id: 'murf', name: 'Murf AI', icon: '🎤', cat: 'Voiceover', price: 29, tier: 'paid',
    desc: '130+ AI voices in 20+ languages. Studio-quality voiceovers for YouTube, podcasts, and e-learning.',
    commission: '20% recurring for 24 months', commissionNum: 5.8, cookie: '90 days',
    affiliateUrl: 'https://murf.ai/partner-with-us/affiliate',
    tags: ['voiceover'], types: ['faceless','tutorial','podcast'], minExp: 'new', hasTrial: true,
  },
  {
    id: 'lalal', name: 'LALAL.AI', icon: '🎵', cat: 'Audio', price: 15, tier: 'paid',
    desc: 'AI audio stem separator — remove background music, isolate vocals, clean up messy interview audio.',
    commission: '30% per sale', commissionNum: 4.5, cookie: '180 days',
    affiliateUrl: 'https://www.lalal.ai/affiliate-program/',
    tags: ['voiceover','editing'], types: ['podcast','talking'], minExp: 'growing', hasTrial: true,
  },
  {
    id: 'adobePodcast', name: 'Adobe Podcast', icon: '🎙️', cat: 'Audio', price: 0, tier: 'free',
    desc: 'Free AI audio enhancer that removes noise and improves voice clarity. Instant upgrade for any creator.',
    commission: null, commissionNum: 0, cookie: null,
    affiliateUrl: null,
    tags: ['voiceover'], types: ['talking','podcast','tutorial'], minExp: 'new', hasTrial: true,
  },

  // VIDEO EDITING
  {
    id: 'descript', name: 'Descript', icon: '✂️', cat: 'Editing', price: 24, tier: 'paid',
    desc: 'Edit video by editing a transcript. Remove filler words, silences, and mistakes in one click.',
    commission: '15% recurring for 12 months', commissionNum: 3.6, cookie: '30 days',
    affiliateUrl: 'https://www.descript.com/affiliate',
    tags: ['editing','voiceover','captions'], types: ['talking','podcast','tutorial'], minExp: 'new', hasTrial: true,
  },
  {
    id: 'veed', name: 'VEED.IO', icon: '🖥️', cat: 'Editing', price: 18, tier: 'paid',
    desc: 'Browser-based editor with one-click AI captions, subtitles, and automatic eye contact correction.',
    commission: '20% recurring', commissionNum: 3.6, cookie: '30 days',
    affiliateUrl: 'https://www.veed.io/affiliate',
    tags: ['editing','captions'], types: ['talking','tutorial'], minExp: 'new', hasTrial: true,
  },

  // VIDEO CREATION (faceless)
  {
    id: 'pictory', name: 'Pictory', icon: '🎬', cat: 'Video creation', price: 19, tier: 'paid',
    desc: 'Turn scripts or blog posts into videos automatically. The go-to text-to-video tool for faceless creators.',
    commission: '20–50% recurring (tiered)', commissionNum: 7.5, cookie: '9999 days',
    affiliateUrl: 'https://partners.pictory.ai/',
    tags: ['editing','captions'], types: ['faceless'], minExp: 'new', hasTrial: true,
  },
  {
    id: 'invideo', name: 'InVideo AI', icon: '🎥', cat: 'Video creation', price: 25, tier: 'paid',
    desc: 'Turn a text prompt into a full video with footage, voiceover, and captions — in minutes.',
    commission: '25% recurring', commissionNum: 6.25, cookie: '60 days',
    affiliateUrl: 'https://invideo.io/affiliate/',
    tags: ['editing','voiceover','captions'], types: ['faceless'], minExp: 'new', hasTrial: true,
  },
  {
    id: 'runway', name: 'Runway ML', icon: '🎞️', cat: 'Video creation', price: 15, tier: 'paid',
    desc: 'AI video generation and effects. Next-level cinematic visuals for established creators.',
    commission: null, commissionNum: 0, cookie: null,
    affiliateUrl: null,
    tags: ['editing'], types: ['faceless'], minExp: 'established', hasTrial: false,
  },

  // AI AVATARS
  {
    id: 'aiStudios', name: 'AI Studios', icon: '🎭', cat: 'AI avatar', price: 30, tier: 'paid',
    desc: 'DeepBrain AI — generate avatar videos from a script in minutes. Highest affiliate payout in this list.',
    commission: '50% on first payment', commissionNum: 15, cookie: '60 days',
    affiliateUrl: 'https://www.aistudios.com/affiliate',
    tags: ['avatar','voiceover'], types: ['faceless','tutorial'], minExp: 'new', hasTrial: true,
  },
  {
    id: 'synthesia', name: 'Synthesia', icon: '🧑‍💼', cat: 'AI avatar', price: 29, tier: 'paid',
    desc: 'Professional AI avatars in 120+ languages. No camera or studio needed — create explainer videos in minutes.',
    commission: '20% recurring for 12 months', commissionNum: 5.8, cookie: '60 days',
    affiliateUrl: 'https://www.synthesia.io/partners/affiliates',
    tags: ['avatar','voiceover'], types: ['faceless','tutorial'], minExp: 'new', hasTrial: true,
  },
  {
    id: 'heygen', name: 'HeyGen', icon: '🤖', cat: 'AI avatar', price: 29, tier: 'paid',
    desc: 'Realistic AI avatars with voice cloning in 175+ languages. Top choice for faceless product videos.',
    commission: '20% recurring', commissionNum: 5.8, cookie: '60 days',
    affiliateUrl: 'https://www.heygen.com/affiliate',
    tags: ['avatar','voiceover'], types: ['faceless','tutorial'], minExp: 'new', hasTrial: true,
  },

  // SEO & GROWTH
  {
    id: 'vidiq', name: 'VidIQ', icon: '📊', cat: 'SEO & growth', price: 10, tier: 'paid',
    desc: 'AI keyword research, title scoring, competitor tracking, and daily video ideas for your channel.',
    commission: 'Up to 25% recurring', commissionNum: 2.5, cookie: '30 days',
    affiliateUrl: 'https://vidiq.com/affiliate/',
    tags: ['seo'], types: ['faceless','talking','tutorial','podcast'], minExp: 'new', hasTrial: true,
  },
  {
    id: 'tubebuddy', name: 'TubeBuddy', icon: '🔧', cat: 'SEO & growth', price: 9, tier: 'paid',
    desc: 'Browser extension for tag management, A/B thumbnail testing, and bulk channel optimisation.',
    commission: '15% recurring for 12 months', commissionNum: 1.35, cookie: '30 days',
    affiliateUrl: 'https://www.tubebuddy.com/affiliateprogram',
    tags: ['seo'], types: ['faceless','talking','tutorial','podcast'], minExp: 'growing', hasTrial: true,
  },

  // THUMBNAILS
  {
    id: 'thumbnailtest', name: 'ThumbnailTest', icon: '🖼️', cat: 'Thumbnails', price: 15, tier: 'paid',
    desc: 'A/B test your YouTube thumbnails and titles with real data. See exactly which designs get more clicks before committing.',
    commission: '40–50% recurring', commissionNum: 6, cookie: '30 days',
    affiliateUrl: 'https://thumbnailtest.com/affiliate-program/',
    tags: ['thumbnails','seo'], types: ['faceless','talking','tutorial','podcast'], minExp: 'new', hasTrial: true,
  },
  {
    id: 'pikzels', name: 'Pikzels', icon: '🖼️', cat: 'Thumbnails', price: 19, tier: 'paid',
    desc: 'AI thumbnail generator trained on viral YouTube content. Scores your thumbnail\'s CTR potential.',
    commission: '33% recurring', commissionNum: 6.3, cookie: '30 days',
    affiliateUrl: 'https://affiliates.pikzels.com/',
    tags: ['thumbnails'], types: ['faceless','talking','tutorial'], minExp: 'growing', hasTrial: true,
  },
  {
    id: 'adcreative', name: 'AdCreative.ai', icon: '📣', cat: 'Thumbnails', price: 29, tier: 'paid',
    desc: 'AI-generated ad creatives and social visuals optimised for conversions. Great for paid channel promotion.',
    commission: '30–40% recurring', commissionNum: 10, cookie: '90 days',
    affiliateUrl: 'https://www.adcreative.ai/affiliate',
    tags: ['thumbnails'], types: ['talking','tutorial'], minExp: 'established', hasTrial: false,
  },

  // CAPTIONS & REPURPOSE
  {
    id: 'submagic', name: 'Submagic', icon: '💬', cat: 'Captions', price: 20, tier: 'paid',
    desc: 'Auto-generate animated captions with AI. Huge for Shorts and Reels performance and accessibility.',
    commission: '30% recurring', commissionNum: 6, cookie: '45 days',
    affiliateUrl: 'https://www.submagic.co/affiliate',
    tags: ['captions','repurpose'], types: ['faceless','talking','tutorial'], minExp: 'new', hasTrial: true,
  },
  {
    id: 'notta', name: 'Notta.ai', icon: '📋', cat: 'Captions', price: 14, tier: 'paid',
    desc: 'AI transcription for interviews, podcasts, and meetings. Converts any audio or video to accurate searchable text in 58 languages.',
    commission: '30% per sale', commissionNum: 4.2, cookie: '30 days',
    affiliateUrl: 'https://www.notta.ai/en/affiliate',
    tags: ['captions','repurpose'], types: ['podcast','talking'], minExp: 'new', hasTrial: true,
  },
  {
    id: 'opus', name: 'Opus Clip', icon: '✂️', cat: 'Repurposing', price: 19, tier: 'paid',
    desc: 'AI auto-clips your long videos into viral-ready shorts for TikTok, Reels, and YouTube Shorts.',
    commission: '25% recurring for 12 months', commissionNum: 4.75, cookie: '60 days',
    affiliateUrl: 'https://www.opus.pro/affiliate',
    tags: ['repurpose','editing','captions'], types: ['faceless','talking','podcast'], minExp: 'new', hasTrial: true,
  },
  {
    id: 'repurpose', name: 'Repurpose.io', icon: '♻️', cat: 'Repurposing', price: 25, tier: 'paid',
    desc: 'Automatically distributes your YouTube content to TikTok, Instagram, Facebook, and 10+ more platforms.',
    commission: '30% recurring', commissionNum: 7.5, cookie: '30 days',
    affiliateUrl: 'https://repurpose.io/affiliate',
    tags: ['repurpose'], types: ['faceless','talking','podcast'], minExp: 'growing', hasTrial: true,
  },
]

export const EXP_ORDER = { new: 0, growing: 1, established: 2 }

export const PAIN_LABELS = {
  scripting: 'Writing scripts',
  editing: 'Video editing',
  thumbnails: 'Thumbnails',
  seo: 'SEO & titles',
  voiceover: 'Voiceover / audio',
  repurpose: 'Repurposing clips',
  avatar: 'AI avatar video',
  captions: 'Captions & subtitles',
}

export const TYPE_LABELS = {
  faceless: 'Faceless creator',
  talking: 'Talking head',
  tutorial: 'Tutorial / screen',
  podcast: 'Podcast / interview',
}
