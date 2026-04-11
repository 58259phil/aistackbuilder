/* ── Blog component ── */

export const POSTS = [
  {
    id: 'best-ai-tools-faceless-youtube',
    title: 'Best AI Tools for Faceless YouTube Channels in 2025',
    slug: 'best-ai-tools-faceless-youtube',
    date: 'April 2025',
    readTime: '8 min read',
    excerpt: 'Running a faceless YouTube channel means replacing every on-camera element with AI. Here are the best tools for voiceover, video creation, captions and more — with technical detail on how each one actually works.',
    content: [
      { type: 'intro', text: `Faceless YouTube channels remove the creator from the frame entirely — no camera, no face, no studio. AI tools now handle every production step that a human presenter would otherwise cover. But not all tools are equal, and understanding how they work technically helps you choose the right combination for your specific workflow. This guide covers the best AI tools for faceless channels in 2025, with detail on what's happening under the hood.` },
      { type: 'h2', text: 'AI voiceover — ElevenLabs' },
      { type: 'paragraph', text: `ElevenLabs uses a proprietary neural TTS (text-to-speech) model trained on a large multilingual audio corpus. Unlike older TTS systems that concatenate pre-recorded phonemes, ElevenLabs generates audio end-to-end from the spectrogram level, producing natural prosody, emotional inflection, and accent accuracy. The key settings to understand are Stability (how consistent the voice sounds across a long script — higher is better for narration) and Similarity Enhancement (how closely it matches the original voice characteristics — higher can introduce artefacts). For faceless YouTube narration, a Stability of 0.70-0.80 and Similarity of 0.75 typically produces the best results. Free plan gives you 10,000 characters/month — roughly 2-3 short videos.` },
      { type: 'affiliate', name: 'ElevenLabs', url: 'https://try.elevenlabs.io/l55nms662wgu', cta: 'Try ElevenLabs free →' },
      { type: 'h2', text: 'AI avatar video — HeyGen' },
      { type: 'paragraph', text: `HeyGen uses deep learning to synthesise a photorealistic avatar speaking your script with accurate lip sync. The platform offers two avatar types: stock avatars (pre-trained on real actors) and Instant Avatars (created from a 2-minute video you record). Instant Avatar uses few-shot adaptation — your video provides a conditioning signal that adjusts the model's output to match your appearance and voice without full retraining. For lip sync, HeyGen's model maps phoneme sequences to corresponding mouth shapes frame-by-frame, achieving realistic articulation across 175+ languages. The free plan includes 3 watermarked videos per month — enough to test whether the avatar quality suits your content style.` },
      { type: 'affiliate', name: 'HeyGen', url: 'https://www.heygen.com/?sid=rewardful&utm_content=creator&utm_medium=affiliate&via=phillip-bates', cta: 'Try HeyGen free →' },
      { type: 'h2', text: 'Auto captions — Submagic' },
      { type: 'paragraph', text: `Submagic uses NLP (natural language processing) combined with an ASR (automatic speech recognition) model to transcribe your audio at 98.8% accuracy across 48+ languages. What separates it from basic caption tools is the rendering layer — it applies word-by-word animated highlights using a timing alignment algorithm that maps each word to its precise audio timestamp, then renders transitions, zoom effects, and emoji overlays using a frame-by-frame compositing pipeline. The Magic Clips V2 feature uses a separate engagement scoring model that analyses dialogue energy, sentiment peaks, and pacing to identify the most viral-worthy segments. For Shorts specifically, captions increase average view duration by 12-15% because most mobile viewers scroll with sound off.` },
      { type: 'affiliate', name: 'Submagic', url: 'https://submagic.co/?via=phillip68', cta: 'Try Submagic free →' },
      { type: 'h2', text: 'Audio cleaning — LALAL.AI' },
      { type: 'paragraph', text: `LALAL.AI uses its Phoenix neural network architecture for audio source separation — a process called blind source separation (BSS) using deep learning. Traditional frequency-based separation (like notch filters) struggles with overlapping frequency ranges between voice and background noise. Phoenix operates in the spectrogram domain, learning to separate sources by their temporal and spectral patterns rather than just frequency. In practice this means it can cleanly isolate a voice from background music that shares similar frequency content — something impossible with traditional tools. Input formats include MP3, WAV, FLAC, AIFF, and direct video files up to 4GB. Processing is cloud-based with no quality ceiling from your local machine.` },
      { type: 'affiliate', name: 'LALAL.AI', url: 'https://www.lalal.ai/?fp_ref=phillip53', cta: 'Try LALAL.AI →' },
      { type: 'h2', text: 'Repurposing to Shorts — Opus Clip' },
      { type: 'paragraph', text: `Opus Clip uses its ClipAnything™ model to analyse your video at multiple levels: transcript-level (identifying high-engagement dialogue), audio-level (detecting energy peaks and pacing), and visual-level (tracking speaker positions and scene changes). Each potential clip receives an AI Virality Score™ from 0-100 based on hook strength, emotional momentum, and trend alignment with current viral content patterns. ReframeAnything™ handles the 16:9 to 9:16 conversion by running a face and body detection model to track the speaker throughout the clip and dynamically reposition the crop so the subject stays centred in the vertical frame. Processing rate: approximately 1 credit per minute of source video, regardless of how many clips are generated.` },
      { type: 'affiliate', name: 'Opus Clip', url: 'https://www.opus.pro/?via=fc9679', cta: 'Try Opus Clip free →' },
      { type: 'h2', text: 'Building your faceless stack' },
      { type: 'paragraph', text: `The optimal faceless workflow connects these tools in sequence: write your script with ChatGPT or Koala AI → generate voiceover in ElevenLabs (export as MP3) → assemble video in your editor using stock footage from Pexels → upload to Submagic for captions → use Opus Clip to extract Shorts → distribute via Repurpose.io. If you want an on-screen presenter instead of stock footage, substitute HeyGen for the assembly step — paste your script directly into HeyGen after generating the ElevenLabs audio, or use HeyGen's built-in TTS. Not sure which tools fit your specific channel type and budget? Use our free stack builder for a personalised recommendation.` },
    ]
  },
  {
    id: 'best-ai-tools-youtube-automation',
    title: 'Best AI Tools for YouTube Automation in 2025',
    slug: 'best-ai-tools-youtube-automation',
    date: 'April 2025',
    readTime: '7 min read',
    excerpt: 'YouTube automation means building a production pipeline that runs with minimal manual input. These AI tools handle scripting, voiceover, editing, and distribution — with detail on how to connect them into a working workflow.',
    content: [
      { type: 'intro', text: `YouTube automation is the practice of systematising every step of video production so that content can be created consistently without requiring your personal attention at each stage. The tools available in 2025 make this genuinely achievable for solo creators — but understanding how they connect technically is the difference between a workflow that saves hours and one that creates new problems. Here are the best AI tools for YouTube automation with technical workflow detail.` },
      { type: 'h2', text: 'Scripting — Koala AI' },
      { type: 'paragraph', text: `Koala AI's generation pipeline starts with a live SERP analysis — it queries Google Search for your target keyword and retrieves the top 10-20 ranking pages, extracting their heading structures, semantic keyword clusters, and topical coverage. This data is fed into the GPT-4o context window alongside your prompt, so the output is grounded in what actually ranks rather than generalised training data. The result is a structured script with H2/H3 headings that mirrors the content architecture of high-ranking pages. For automation channels, the KoalaWriter API and bulk generation mode allow you to queue multiple scripts simultaneously, which combined with a voiceover API creates a nearly hands-off script-to-audio pipeline.` },
      { type: 'affiliate', name: 'Koala AI', url: 'https://koala.sh/?via=phillip-bates', cta: 'Try Koala AI free →' },
      { type: 'h2', text: 'Voiceover — ElevenLabs' },
      { type: 'paragraph', text: `For automated channels, ElevenLabs' REST API is the critical feature. Rather than pasting scripts manually into the web editor, you can programmatically submit text and receive audio files via API calls — integrating directly into a Make.com or Zapier workflow. The API accepts plain text or SSML (Speech Synthesis Markup Language) for precise control over pacing, pronunciation, and emphasis. For automation at scale, the Flash v2.5 model offers ~75ms latency and lower cost per character, while Multilingual v2 delivers the highest quality for polished hero content. Store your voice ID once and reference it across every automated request for brand consistency.` },
      { type: 'affiliate', name: 'ElevenLabs', url: 'https://try.elevenlabs.io/l55nms662wgu', cta: 'Try ElevenLabs free →' },
      { type: 'h2', text: 'Multi-platform distribution — Repurpose.io' },
      { type: 'paragraph', text: `Repurpose.io operates on a trigger-action workflow model similar to Zapier, but purpose-built for video distribution. You define a workflow: trigger (new YouTube video published) → actions (post to TikTok with caption template A, post to Instagram Reels with caption template B, post to Facebook with caption template C). Each destination can have its own caption template using dynamic variables like {title}, {description}, and {url}. The platform handles OAuth connections to each platform's API, format conversion (16:9 to 9:16 for Reels/Shorts), and scheduling within each platform's algorithmically optimal posting windows. For automation channels, this effectively turns one publish action into 5-8 platform posts automatically.` },
      { type: 'affiliate', name: 'Repurpose.io', url: 'https://repurpose.io?fpr=641022', cta: 'Try Repurpose.io free →' },
      { type: 'h2', text: 'SEO and keyword research — VidIQ' },
      { type: 'paragraph', text: `VidIQ's keyword research engine pulls data from YouTube's autocomplete API, trending searches, and historical search volume to surface keyword opportunities. Each keyword gets a VidIQ Score that weights search volume against competition — specifically the average view count and subscriber count of channels currently ranking for that term. For automation channels, the Daily Ideas feature uses your channel's existing tags and content history to recommend low-competition keywords in your niche daily. The browser extension overlays this data directly on YouTube search results pages, making competitive analysis a passive part of your research workflow rather than a separate task.` },
      { type: 'affiliate', name: 'VidIQ', url: 'https://vidiq.com/affiliate/', cta: 'Try VidIQ free →' },
      { type: 'h2', text: 'Connecting the automation pipeline' },
      { type: 'paragraph', text: `A fully automated YouTube workflow in 2025 can be built as follows: VidIQ Daily Ideas surfaces a keyword → Koala AI generates a script via API → ElevenLabs converts to voiceover via API → a video editor (manual or automated via InVideo AI) assembles the footage → published to YouTube → Repurpose.io distributes to all platforms → Opus Clip extracts Shorts and posts them. Tools like Make.com can orchestrate the API calls between steps, creating a pipeline where a keyword input at one end produces a multi-platform content distribution at the other. Use our free stack builder to get a personalised tool recommendation for your channel type and budget.` },
    ]
  },
  {
    id: 'how-to-start-faceless-youtube-channel',
    title: 'How to Start a Faceless YouTube Channel with AI in 2025',
    slug: 'how-to-start-faceless-youtube-channel',
    date: 'April 2025',
    readTime: '9 min read',
    excerpt: 'A step-by-step technical guide to launching a faceless YouTube channel using AI tools — from niche research and scripting to voiceover, video assembly, and publishing.',
    content: [
      { type: 'intro', text: `Starting a faceless YouTube channel in 2025 is a technical workflow problem more than a creative one. The tools exist to handle every production step — the challenge is understanding which tool does what, in what order, and how they connect. This guide walks through the complete technical process from niche selection to first published video.` },
      { type: 'h2', text: 'Step 1 — Niche and keyword research with VidIQ' },
      { type: 'paragraph', text: `Before creating any content, you need to validate that your niche has searchable demand and that you can compete. VidIQ's keyword research tool shows you monthly search volume, competition score (based on average channel size ranking for that term), and related keyword clusters. For a new faceless channel, target keywords with a VidIQ score above 50 — this indicates reasonable search volume relative to achievable competition. Install the VidIQ Chrome extension, search your topic on YouTube, and study the VidIQ sidebar data for each result: note the tags used by high-performing videos, the upload frequency of competing channels, and the gap between their view counts and subscriber counts (a high view-to-subscriber ratio indicates strong search traffic rather than subscriber pull).` },
      { type: 'affiliate', name: 'VidIQ', url: 'https://vidiq.com/affiliate/', cta: 'Research your niche with VidIQ →' },
      { type: 'h2', text: 'Step 2 — Script writing with Koala AI' },
      { type: 'paragraph', text: `With your keyword identified, use Koala AI to generate a first-draft script. Enter your exact target keyword — Koala analyses the top SERP results and builds an outline that mirrors the content structure of ranking pages. Before generating, customise the outline: reorder sections to match your preferred flow, remove sections that aren't relevant, and add custom H2 sections for unique angles. Set the perspective to first-person and the tone to match your channel voice. For a 10-minute video, target a word count of 1,400-1,600 words at a natural speaking pace of ~140 words per minute. Always edit the output — add specific examples, real data, and your own perspective before recording or generating voiceover.` },
      { type: 'affiliate', name: 'Koala AI', url: 'https://koala.sh/?via=phillip-bates', cta: 'Write your script with Koala AI →' },
      { type: 'h2', text: 'Step 3 — Voiceover with ElevenLabs' },
      { type: 'paragraph', text: `With your edited script ready, open ElevenLabs and select a voice from the library. For faceless channels, authoritative and conversational voices outperform robotic or overly formal ones — browse voices filtered by "Narration" use case. Paste your script in sections of 2,500 characters or less for consistent output. Key settings: Stability at 0.70 (consistent but natural), Similarity Enhancement at 0.75, Style Exaggeration at 0 unless you want dramatic inflection. Download as MP3 at the highest available quality. Pro tip: generate your intro and outro separately so you can re-record just those sections if needed without regenerating the entire script.` },
      { type: 'affiliate', name: 'ElevenLabs', url: 'https://try.elevenlabs.io/l55nms662wgu', cta: 'Generate your voiceover →' },
      { type: 'h2', text: 'Step 4 — Video assembly' },
      { type: 'paragraph', text: `For stock footage + voiceover style, use CapCut or DaVinci Resolve (both free). Import your voiceover MP3 to the timeline. Search Pexels or Pixabay for stock clips matching each section of your script — download as MP4 and drop them onto the video track above the audio. Aim for a new visual cut every 3-5 seconds to maintain engagement. Alternatively, use InVideo AI — paste your script and it automatically matches stock footage to each sentence, saving 60-90 minutes of manual assembly. For avatar-based content, use HeyGen instead: paste the script directly, select an avatar, and HeyGen returns a complete presenter video ready for caption overlay.` },
      { type: 'affiliate', name: 'HeyGen', url: 'https://www.heygen.com/?sid=rewardful&utm_content=creator&utm_medium=affiliate&via=phillip-bates', cta: 'Create avatar videos with HeyGen →' },
      { type: 'h2', text: 'Step 5 — Captions with Submagic' },
      { type: 'paragraph', text: `Export your assembled video as MP4 and upload to Submagic. The ASR model transcribes the audio and generates a word-level timing alignment — this is what enables word-by-word caption animation. Choose a caption style from the template library (viral-style animated captions consistently outperform static ones for Shorts). Review the transcript for any misrecognised words — proper nouns and technical terms are the most common errors. Enable auto-zoom on high-energy moments and adjust the caption position to the lower third of the frame. Export as MP4 at your target resolution (1080p for long-form, 1080x1920 for Shorts).` },
      { type: 'affiliate', name: 'Submagic', url: 'https://submagic.co/?via=phillip68', cta: 'Add captions with Submagic →' },
      { type: 'h2', text: 'Step 6 — Thumbnail with ThumbnailTest' },
      { type: 'paragraph', text: `Design two thumbnail variants in Canva (free) — vary one key element between them (background colour, face expression, text colour, or composition). Upload both to ThumbnailTest, which presents them to a panel of real YouTube users in a simulated feed context and measures click-through rate. Results arrive in 2-4 hours. Publish using the winning design. For faceless channels without a presenter face, use bold text contrast, high-saturation colours, and a single focal point — faces on thumbnails consistently outperform text-only, so consider using a stock image of a person relevant to your topic.` },
      { type: 'affiliate', name: 'ThumbnailTest', url: 'https://thumbnailtest.com/?via=phillip-bates', cta: 'Test your thumbnails →' },
      { type: 'h2', text: 'Step 7 — Repurpose with Opus Clip' },
      { type: 'paragraph', text: `After publishing your long-form video, paste the YouTube URL into Opus Clip. Set the clip length to 30-60 seconds for TikTok/Reels, or 15-60 seconds for YouTube Shorts. Select your genre (Educational, Vlog, or Podcast depending on your style) to tune the virality model for your content type. Review the top 5-10 clips by Virality Score and select the ones with the strongest hooks — the first 3 seconds are critical for retention on short-form platforms. Export and post to each platform, then set up Repurpose.io to automate this distribution for future videos. Use our free stack builder to get a personalised tool recommendation based on your channel type and budget.` },
      { type: 'affiliate', name: 'Opus Clip', url: 'https://www.opus.pro/?via=fc9679', cta: 'Try Opus Clip free →' },
    ]
  },
  {
    id: 'best-ai-voice-generators-youtube',
    title: 'Best AI Voice Generators for YouTube in 2025',
    slug: 'best-ai-voice-generators-youtube',
    date: 'April 2025',
    readTime: '6 min read',
    excerpt: 'A technical comparison of the top AI voice generators for YouTube creators — covering model architecture, voice quality, cloning capabilities, and which one suits different channel types.',
    content: [
      { type: 'intro', text: `AI voice generation has undergone a fundamental technical shift over the past two years. First-generation TTS systems used concatenative synthesis — stitching together pre-recorded phoneme fragments — which produced the robotic quality associated with early AI voices. Modern systems like ElevenLabs use end-to-end neural synthesis, generating audio waveforms directly from text using deep learning models trained on large audio corpora. The result is voices that are genuinely indistinguishable from human recordings in many contexts. Here is how the best options compare for YouTube creators in 2025.` },
      { type: 'h2', text: 'ElevenLabs — best overall quality' },
      { type: 'paragraph', text: `ElevenLabs generates audio using a transformer-based architecture that operates on spectrogram representations of audio rather than raw waveforms, enabling it to model prosody (the rhythm and intonation of speech) at a higher level of abstraction than raw waveform models. This is why it handles complex sentences, technical terminology, and emotional nuance better than competing tools. The voice library contains 10,000+ voices across 32 languages. Instant Voice Cloning uses few-shot adaptation — your 1-minute sample acts as a conditioning signal at inference time, adjusting output to match your vocal characteristics without updating model weights. This means cloning is fast (seconds) but limited by how much the base model can adapt. Professional Voice Cloning fine-tunes the model on 30+ minutes of your audio for near-perfect reproduction.` },
      { type: 'affiliate', name: 'ElevenLabs', url: 'https://try.elevenlabs.io/l55nms662wgu', cta: 'Try ElevenLabs free →' },
      { type: 'h2', text: 'Murf AI — best for sync and editing' },
      { type: 'paragraph', text: `Murf AI's technical differentiator is its built-in video synchronisation editor — a timeline-based tool that lets you align voiceover to video without needing a separate NLE (non-linear editor). The TTS engine supports sentence-level pitch and speed adjustments, which allows you to speed up slower sections and slow down complex explanations within the same voiceover without re-recording. The platform supports 130+ voices across 20+ languages, with a focus on professional narration use cases rather than creative/entertainment voices. For tutorial creators who want to sync voiceover directly to their screen recordings without exporting and importing between multiple applications, Murf removes a significant step from the workflow.` },
      { type: 'affiliate', name: 'Murf AI', url: 'https://murf.ai/partner-with-us/affiliate', cta: 'Try Murf AI free →' },
      { type: 'h2', text: 'LALAL.AI — best for audio cleaning' },
      { type: 'paragraph', text: `LALAL.AI addresses a different problem — cleaning recordings rather than generating them. Its Phoenix neural network performs blind source separation (BSS) by learning the statistical patterns of different audio sources (speech, music, background noise) and separating them in the spectrogram domain. Unlike traditional noise reduction filters that apply frequency-based attenuation and can introduce artefacting on the voice frequencies, Phoenix isolates sources by their temporal and spatial patterns — preserving voice quality while removing everything else. For creators recording their own voice in non-ideal environments (home offices, ambient noise), this can make a $50 USB microphone sound close to a $500 studio setup.` },
      { type: 'affiliate', name: 'LALAL.AI', url: 'https://www.lalal.ai/?fp_ref=phillip53', cta: 'Try LALAL.AI →' },
      { type: 'h2', text: 'HeyGen — best for avatar-based video' },
      { type: 'paragraph', text: `HeyGen combines TTS with avatar video synthesis, making it unique in this list. Rather than generating audio alone, it generates a video of a photorealistic avatar speaking your script. The lip sync model maps phoneme-to-viseme (visual phoneme) sequences frame-by-frame, using a neural renderer to composite the mouth movements onto the avatar video in real time. The Video Translation feature takes this further — it transcribes an existing video, translates the transcript, regenerates the audio in the target language, and re-renders the lip sync to match, effectively dubbing a video into 175+ languages with accurate mouth movement. For creators targeting international audiences, this makes localisation a one-click operation.` },
      { type: 'affiliate', name: 'HeyGen', url: 'https://www.heygen.com/?sid=rewardful&utm_content=creator&utm_medium=affiliate&via=phillip-bates', cta: 'Try HeyGen free →' },
      { type: 'h2', text: 'Which tool should you use?' },
      { type: 'paragraph', text: `If you need voiceover only: ElevenLabs for quality, Murf AI if you also need timeline sync. If you need a presenter on screen: HeyGen. If you record your own voice and need audio cleaning: LALAL.AI. Most serious faceless channels use a combination — ElevenLabs for narration, LALAL.AI if sourcing interview audio from other creators, and HeyGen for avatar-based explainer sections. Use our free stack builder to get a personalised recommendation based on your channel type and budget.` },
    ]
  },
  {
    id: 'best-ai-video-editors-youtubers',
    title: 'Best AI Video Editors for YouTubers in 2025',
    slug: 'best-ai-video-editors-youtubers',
    date: 'April 2025',
    readTime: '7 min read',
    excerpt: 'AI video editors are saving YouTubers hours every week. Here is how the best tools in 2025 actually work technically — covering caption generation, text-based editing, clip extraction, and distribution automation.',
    content: [
      { type: 'intro', text: `The term "AI video editor" covers a wide range of technical approaches. Some tools use large language models to interpret natural language editing instructions. Others use ASR models for transcription-based editing. Others use computer vision to detect and track subjects. Understanding what each tool is actually doing technically helps you evaluate whether it will work for your specific content type and workflow. Here are the best AI video editing tools for YouTubers in 2025.` },
      { type: 'h2', text: 'Captions and Shorts — Submagic' },
      { type: 'paragraph', text: `Submagic's core pipeline runs in three stages. First, an ASR model transcribes your audio with word-level timestamp alignment — this produces a data structure mapping each word to its exact start and end time in the audio. Second, the caption rendering engine uses this timing data to drive animated text overlays synchronised to speech at the word level. Third, a computer vision model analyses each frame for face position, motion energy, and scene changes to drive auto-zoom and transition effects. The Magic Clips V2 feature runs a separate model that scores each segment of your video for virality potential based on dialogue analysis, energy levels, and comparison against a dataset of high-performing short-form content. This makes Submagic unique — it is simultaneously a caption tool, a clip extraction tool, and a short-form video editor in one platform.` },
      { type: 'affiliate', name: 'Submagic', url: 'https://submagic.co/?via=phillip68', cta: 'Try Submagic free →' },
      { type: 'h2', text: 'Text-based editing — Descript' },
      { type: 'paragraph', text: `Descript's core innovation is its underlying data model — rather than storing video as a timeline of clips, it stores it as a transcript with associated media pointers. Each word in the transcript is linked to its corresponding audio and video frames. When you delete a word in the transcript, Descript resolves this to a frame range and removes those frames from the underlying media. This text-as-timeline model makes editing as simple as editing a document. The Overdub feature adds voice cloning on top — it trains a TTS model on your voice, then lets you type corrections that are synthesised in your voice and seamlessly inserted into the audio track. Filler word removal uses a classifier trained to detect um, uh, like, you know with high accuracy — removing them in one click from a 30-minute recording takes seconds rather than hours.` },
      { type: 'affiliate', name: 'Descript', url: 'https://www.descript.com/affiliate', cta: 'Try Descript free →' },
      { type: 'h2', text: 'Long video to Shorts — Opus Clip' },
      { type: 'paragraph', text: `Opus Clip operates as a multi-model pipeline. A speech recognition model first produces a full transcript with timestamps. A second model runs dialogue analysis and assigns engagement scores to each segment based on hook strength, emotional peaks, pacing, and trend alignment against a corpus of viral short-form content. ReframeAnything™ runs a real-time object detection and tracking model (likely YOLO or similar) to identify the speaker's face and body, dynamically repositioning the crop window to keep them centred in the vertical 9:16 frame throughout the clip. The output is a set of clips with captions, vertical formatting, and speaker tracking already applied — ready to publish without manual editing.` },
      { type: 'affiliate', name: 'Opus Clip', url: 'https://www.opus.pro/?via=fc9679', cta: 'Try Opus Clip free →' },
      { type: 'h2', text: 'Audio cleaning — LALAL.AI' },
      { type: 'paragraph', text: `LALAL.AI's Phoenix model approaches audio separation differently from traditional noise reduction. Classical noise reduction algorithms apply frequency-based gates — attenuating signal below a certain amplitude threshold, which also attenuates quiet voice consonants and introduces artefacts. Phoenix instead learns source separation by modelling the statistical properties of each audio class (speech, music, background noise) in the spectrogram domain, separating them by pattern rather than by frequency or amplitude. The result is clean voice isolation even when the background noise shares frequency content with the voice. For interview creators, this means you can clean up phone recordings, Zoom recordings with ambient noise, or location audio without degrading the voice quality.` },
      { type: 'affiliate', name: 'LALAL.AI', url: 'https://www.lalal.ai/?fp_ref=phillip53', cta: 'Try LALAL.AI →' },
      { type: 'h2', text: 'Distribution automation — Repurpose.io' },
      { type: 'paragraph', text: `Repurpose.io connects to each platform's official API — YouTube Data API, TikTok Content Posting API, Instagram Graph API, Facebook Pages API — using OAuth authentication. When your YouTube video publishes, the platform's webhook fires a trigger, Repurpose.io fetches the video file, applies your configured transformations (aspect ratio, caption overlay, trim), and submits it to each destination platform via their respective upload APIs. Caption templates use variable substitution: {title} pulls the YouTube title, {description} the description, {url} the video URL. This creates platform-native posts with correct metadata rather than generic cross-posts. The technical advantage over manual posting is that the entire pipeline executes within minutes of your YouTube publish — before the YouTube algorithm has even indexed your video.` },
      { type: 'affiliate', name: 'Repurpose.io', url: 'https://repurpose.io?fpr=641022', cta: 'Try Repurpose.io free →' },
      { type: 'h2', text: 'Thumbnail testing — ThumbnailTest' },
      { type: 'paragraph', text: `ThumbnailTest runs a randomised controlled experiment. Your thumbnail variants are shown to a representative panel in a simulated YouTube feed — a static image grid that matches the visual context of YouTube's browse features. The panel responds by clicking (or not clicking) on thumbnails, generating click-through rate data under controlled conditions. This is methodologically similar to YouTube's own A/B thumbnail test, but available pre-publish and with faster results. Heatmap data shows where panel members looked and clicked, helping you understand which visual element drove the CTR difference. Use our free stack builder to get a personalised editing tool recommendation for your channel type.` },
      { type: 'affiliate', name: 'ThumbnailTest', url: 'https://thumbnailtest.com/?via=phillip-bates', cta: 'Test your thumbnails →' },
    ]
  },
  {
    id: 'best-ai-tools-youtube-shorts',
    title: 'Best AI Tools for YouTube Shorts in 2025',
    slug: 'best-ai-tools-youtube-shorts',
    date: 'April 2025',
    readTime: '7 min read',
    excerpt: 'YouTube Shorts crossed 70 billion daily views in 2024. These AI tools help you create, caption, and distribute Shorts efficiently — with technical detail on how each tool processes your content.',
    content: [
      { type: 'intro', text: `YouTube Shorts has its own content algorithm, separate from the main YouTube recommendation engine. It prioritises completion rate (the percentage of viewers who watch to the end), engagement velocity (likes, comments, and shares in the first hour), and swipe-away rate (how quickly viewers skip past your Short). The AI tools that work best for Shorts are ones that optimise for these specific metrics — strong hooks, animated captions for sound-off viewers, and viral moment extraction. Here are the best tools for the Shorts workflow in 2025.` },
      { type: 'h2', text: 'Repurposing long videos — Opus Clip' },
      { type: 'paragraph', text: `Opus Clip's AI Virality Score™ is specifically calibrated against short-form platform performance data — not just general engagement metrics. The model scores each potential clip on hook strength (does the first 3 seconds create immediate curiosity or tension?), emotional momentum (does the energy sustain through the clip?), and trend alignment (does the content format match current viral patterns?). The ReframeAnything™ model runs speaker detection and tracking to keep the subject centred in 9:16 crop throughout fast camera movements or multi-person scenes. For Shorts specifically, the recommended clip length is 30-59 seconds — long enough for the algorithm to serve it broadly, short enough to achieve high completion rates. Set your genre to "Educational" or "Vlog" rather than "Podcast" for Shorts extraction to tune the scoring model appropriately.` },
      { type: 'affiliate', name: 'Opus Clip', url: 'https://www.opus.pro/?via=fc9679', cta: 'Try Opus Clip free →' },
      { type: 'h2', text: 'Captions — Submagic' },
      { type: 'paragraph', text: `For Shorts, captions are not optional — YouTube's own data shows that 85% of Shorts are watched without sound at least some of the time. Submagic's ASR model generates word-level timed captions, which the rendering engine maps to animated overlays. The word-by-word highlight animation (where the currently spoken word highlights in a contrasting colour) has become a standard of high-performing Shorts because it guides the viewer's eye and maintains attention. Submagic's caption templates are informed by what performs well on short-form platforms — the default font sizes, positioning, and animation styles are optimised for mobile viewing. Use the Profanity Filter if needed and enable Auto-zoom to add dynamic movement to otherwise static talking head footage.` },
      { type: 'affiliate', name: 'Submagic', url: 'https://submagic.co/?via=phillip68', cta: 'Try Submagic free →' },
      { type: 'h2', text: 'AI voiceover — ElevenLabs' },
      { type: 'paragraph', text: `For faceless Shorts, ElevenLabs voiceover requires a different approach than long-form narration. A 60-second Short needs approximately 100-150 words at a faster-than-normal pace — around 150-160 words per minute rather than the standard 130-140. Choose a voice with higher energy and pace (filter by "Characters" or "Social Media" use case in the voice library). Set Stability slightly lower (0.55-0.65) than for long-form to allow more natural variation in delivery — monotone narration loses Shorts viewers very quickly. The free plan's 10,000 characters/month covers approximately 20-25 Shorts scripts per month.` },
      { type: 'affiliate', name: 'ElevenLabs', url: 'https://try.elevenlabs.io/l55nms662wgu', cta: 'Try ElevenLabs free →' },
      { type: 'h2', text: 'Cross-platform distribution — Repurpose.io' },
      { type: 'paragraph', text: `Once your Short is published on YouTube, Repurpose.io's YouTube-to-TikTok workflow pulls the video file via YouTube Data API, applies your TikTok-specific caption template, and submits it to TikTok's Content Posting API within minutes. The key configuration detail for Shorts specifically is setting the correct aspect ratio transformation — YouTube Shorts are already 9:16, so no reformatting is needed, but you need to ensure the workflow is set to "pass-through" rather than any reformatting option to avoid quality degradation. Set up separate workflows for each destination (TikTok, Instagram Reels, Facebook Reels) with platform-specific hashtag templates — hashtag effectiveness varies significantly by platform.` },
      { type: 'affiliate', name: 'Repurpose.io', url: 'https://repurpose.io?fpr=641022', cta: 'Try Repurpose.io free →' },
      { type: 'h2', text: 'Thumbnails — ThumbnailTest' },
      { type: 'paragraph', text: `Shorts thumbnails display in search results, channel pages, and the YouTube browse feed — they don't appear in the Shorts feed itself, but they drive click-throughs from search. ThumbnailTest lets you run A/B tests on Shorts thumbnails before publishing, using the same methodology as for long-form — a panel of real users in a simulated YouTube feed context. For Shorts thumbnails, high contrast and bold text outperform subtle designs because the thumbnail appears smaller in the search grid. Use our free stack builder to get a personalised Shorts tool recommendation for your channel.` },
      { type: 'affiliate', name: 'ThumbnailTest', url: 'https://thumbnailtest.com/?via=phillip-bates', cta: 'Test your thumbnails →' },
    ]
  },
  {
    id: 'how-to-make-youtube-videos-without-face',
    title: 'How to Make YouTube Videos Without Showing Your Face',
    slug: 'how-to-make-youtube-videos-without-face',
    date: 'April 2025',
    readTime: '8 min read',
    excerpt: 'A technical walkthrough of the three main faceless YouTube formats — stock footage, AI avatars, and screen recording — with tool recommendations and workflow detail for each.',
    content: [
      { type: 'intro', text: `Faceless YouTube channels fall into three main technical formats, each with its own production workflow and tool stack. Understanding the technical differences helps you choose the right approach for your content type and production capacity. This guide covers all three formats with specific tool recommendations and workflow detail.` },
      { type: 'h2', text: 'Format 1 — Stock footage + AI voiceover' },
      { type: 'paragraph', text: `This is the most common faceless format and the easiest to scale. The workflow is: script → AI voiceover → manual or automated video assembly using stock footage → captions. For voiceover, ElevenLabs produces the most natural results using its neural TTS engine. Export your audio at the highest available quality (MP3 320kbps or WAV). For video assembly, CapCut and DaVinci Resolve are both free and handle the stock-footage-to-voiceover sync workflow well. Alternatively, InVideo AI automates the assembly entirely — its AI matches stock footage to your script sentences using semantic analysis, eliminating manual clip selection. The key limitation of stock footage channels is visual differentiation — many channels use the same Pexels and Pixabay clips, so adding custom graphics, text overlays, and animations is important for standing out.` },
      { type: 'affiliate', name: 'ElevenLabs', url: 'https://try.elevenlabs.io/l55nms662wgu', cta: 'Generate your voiceover →' },
      { type: 'h2', text: 'Format 2 — AI avatar videos' },
      { type: 'paragraph', text: `AI avatar videos use a photorealistic digital presenter to replace the on-camera human. HeyGen's approach uses deep learning to render a pre-trained avatar (or your own Instant Avatar) speaking your script with lip sync generated by a phoneme-to-viseme mapping model. The technical quality has reached the point where many viewers cannot distinguish HeyGen avatars from real presenters in casual viewing — though close inspection still reveals artefacts, particularly in complex facial expressions and hand movements. The optimal use cases for avatars are educational content, product explainers, and professional presentations where the presenter is relatively static and the script-to-delivery fidelity is more important than naturalistic performance. Avatar videos are faster to produce than real footage (no camera, lighting, or retakes) and easier to translate (HeyGen's Video Translation feature re-renders lip sync in 175+ languages automatically).` },
      { type: 'affiliate', name: 'HeyGen', url: 'https://www.heygen.com/?sid=rewardful&utm_content=creator&utm_medium=affiliate&via=phillip-bates', cta: 'Create avatar videos with HeyGen →' },
      { type: 'h2', text: 'Format 3 — Screen recording' },
      { type: 'paragraph', text: `Screen recording channels (tutorials, software reviews, coding, gaming) are technically the simplest faceless format — no avatar, no stock footage sourcing, just your screen with voiceover. OBS Studio (free, open source) captures your screen at up to 4K60fps. For voiceover, either record live using a microphone and clean up with LALAL.AI or Adobe Podcast Enhance Speech, or generate AI voiceover with ElevenLabs post-recording. The key workflow decision is whether to record your voiceover first (then screen record to match) or screen record first (then script and record voiceover to match). Most experienced screen recording creators script first, screen record to the script, then refine the voiceover in post.` },
      { type: 'h2', text: 'Script writing — Koala AI' },
      { type: 'paragraph', text: `Regardless of format, all faceless channels need strong scripts. Koala AI generates scripts grounded in real SERP data — it analyses the top-ranking content for your target keyword and structures your script to cover the same semantic territory, using H2/H3 headings that mirror what ranks. For screen recording tutorials, use the outline editor to structure the script around specific steps before generating the content. For stock footage channels, set a higher word count target (1,400-1,600 words for 10 minutes) to ensure enough voiceover density for continuous B-roll coverage.` },
      { type: 'affiliate', name: 'Koala AI', url: 'https://koala.sh/?via=phillip-bates', cta: 'Write your script with Koala AI →' },
      { type: 'h2', text: 'Adding captions — Submagic' },
      { type: 'paragraph', text: `All three formats benefit from captions. Submagic's ASR transcription achieves 98.8% accuracy across 48+ languages, generating word-level timed caption data that drives its animated overlay system. For stock footage channels, animated captions add visual interest to otherwise static B-roll. For avatar channels, captions reinforce the spoken content and improve retention for sound-off viewers. For screen recording channels, captions highlight key terms and commands that viewers need to follow along. Export from Submagic as MP4 for final delivery or as SRT file if you want to upload captions separately to YouTube Studio.` },
      { type: 'affiliate', name: 'Submagic', url: 'https://submagic.co/?via=phillip68', cta: 'Add captions with Submagic →' },
      { type: 'h2', text: 'Getting discovered — VidIQ' },
      { type: 'paragraph', text: `Faceless channels rely on search traffic more than most channel types because they lack a recognisable host personality to drive subscriber loyalty. VidIQ's keyword research engine uses YouTube autocomplete data, historical search volume, and competition analysis to surface keywords with high opportunity scores. For each video, use VidIQ to validate your target keyword before scripting, check the tag sets used by the top 5 competing videos, and score your title using the AI title analyser. A well-optimised title and thumbnail can be the difference between a video getting 1,000 views from search and 100,000. Use our free stack builder to get a personalised tool recommendation for your faceless channel format.` },
      { type: 'affiliate', name: 'VidIQ', url: 'https://vidiq.com/affiliate/', cta: 'Grow your channel with VidIQ →' },
    ]
  },
  {
    id: 'best-ai-thumbnail-makers-youtube',
    title: 'Best AI Thumbnail Makers for YouTube in 2025',
    slug: 'best-ai-thumbnail-makers-youtube',
    date: 'April 2025',
    readTime: '6 min read',
    excerpt: 'Your thumbnail determines whether people click your video. Here are the best AI thumbnail tools in 2025 — with technical detail on how CTR prediction and A/B testing actually work.',
    content: [
      { type: 'intro', text: `Click-through rate (CTR) is the single most controllable variable in YouTube growth. YouTube's algorithm heavily weights CTR in the early distribution window — a video that achieves a 10% CTR gets served to far more recommended slots than the same video at 4%. Your thumbnail and title together determine CTR, but the thumbnail is the primary visual signal. AI tools now exist to both generate thumbnail concepts and predict their performance before you publish. Here is how they work technically.` },
      { type: 'h2', text: 'A/B testing — ThumbnailTest' },
      { type: 'paragraph', text: `ThumbnailTest runs a controlled experiment using a panel of real YouTube users rather than algorithmic prediction alone. Your thumbnail variants are displayed in a simulated YouTube browse feed — a static grid that matches the visual layout and context of YouTube's home and search pages. Panel respondents interact with this interface exactly as they would with YouTube, generating authentic click data under realistic conditions. The platform records click-through rate per variant, provides heatmap data showing where viewers' eyes focused (useful for understanding which element drove the CTR difference), and segments results by demographic where sample size allows. The key advantage over YouTube's own A/B test is timing — ThumbnailTest results arrive in 2-4 hours pre-publish, rather than requiring you to publish and wait for algorithm distribution.` },
      { type: 'affiliate', name: 'ThumbnailTest', url: 'https://thumbnailtest.com/?via=phillip-bates', cta: 'Test your thumbnails →' },
      { type: 'h2', text: 'AI generation — Pikzels' },
      { type: 'paragraph', text: `Pikzels uses computer vision models trained on a dataset of YouTube thumbnails labelled by their real-world CTR performance. This training enables two functions: generative (producing new thumbnail layouts likely to achieve high CTR based on learned visual patterns) and evaluative (scoring an uploaded thumbnail design against the same patterns). The CTR prediction model analyses factors including contrast ratio between foreground and background elements, text density and legibility at small sizes (thumbnails often display at 168x94px on mobile), face placement and expression if present, and colour temperature (warm colours tend to outperform cool colours in most YouTube niches). The generative mode produces multiple concept layouts per prompt, based on which visual patterns the model associates with high CTR for your described content type.` },
      { type: 'affiliate', name: 'Pikzels', url: 'https://pikzels.com?via=phillip40', cta: 'Try Pikzels →' },
      { type: 'h2', text: 'Thumbnail design principles backed by data' },
      { type: 'paragraph', text: `Beyond AI tools, understanding why certain thumbnails perform helps you brief the tools more effectively. Human faces with strong emotional expressions (surprise, excitement, concern) consistently outperform thumbnails without faces — this is well-documented in YouTube creator research and is reflected in Pikzels' training data. High contrast between the subject and background improves visibility at small sizes. Text should be 3-5 words maximum and visible at thumbnail size (168x94px on mobile) — test this by shrinking your design to thumbnail size before finalising. A clear visual hierarchy (one dominant element, secondary supporting elements) outperforms cluttered designs. Curiosity gap thumbnails (that imply something surprising without revealing it) consistently achieve higher CTR than informational thumbnails in most niches.` },
      { type: 'h2', text: 'The optimal thumbnail workflow' },
      { type: 'paragraph', text: `The data-driven thumbnail workflow: design 2-3 concepts in Canva using high-contrast images and minimal bold text → use Pikzels to score each concept and get improvement suggestions → refine the top two based on feedback → upload both to ThumbnailTest and run an A/B test → publish the winning design. This process adds 2-3 hours to your production workflow but typically improves CTR by 20-50% compared to untested thumbnails — a compounding advantage over every future video. Use our free stack builder to get personalised tool recommendations for your channel type.` },
    ]
  },
  {
    id: 'how-to-repurpose-youtube-to-tiktok',
    title: 'How to Repurpose YouTube Videos to TikTok Automatically',
    slug: 'how-to-repurpose-youtube-to-tiktok',
    date: 'April 2025',
    readTime: '7 min read',
    excerpt: 'A technical guide to the YouTube-to-TikTok repurposing workflow — covering AI clip extraction, caption generation, aspect ratio conversion, and automated cross-platform distribution.',
    content: [
      { type: 'intro', text: `YouTube and TikTok have fundamentally different content algorithms and viewer behaviours, but they share an audience — YouTube creators who ignore TikTok are missing a significant discovery channel. Repurposing YouTube content for TikTok is not simply re-uploading the same video. It requires clip extraction (finding the 30-90 second moments with independent value), format conversion (16:9 to 9:16), caption optimisation (TikTok's sound-off viewing rate is higher than YouTube's), and platform-specific metadata. AI tools now automate every step of this process. Here is the technical workflow.` },
      { type: 'h2', text: 'Step 1 — AI clip extraction with Opus Clip' },
      { type: 'paragraph', text: `Opus Clip's multi-model pipeline first generates a full transcript with word-level timestamps via ASR. A second model performs dialogue analysis at the segment level — scoring each potential clip for hook strength (first 3 seconds), emotional momentum, information density, and trend alignment against a dataset of viral TikTok content. This produces a ranked list of clips each with an AI Virality Score™. For TikTok specifically, prioritise clips with a strong standalone hook — the clip must make sense without any preceding context because TikTok viewers have no prior relationship with your content. Clips that start mid-sentence or require context from earlier in the video perform poorly. Set clip length to 30-59 seconds for optimal TikTok algorithm treatment — under 30 seconds limits distribution, over 60 seconds reduces completion rate.` },
      { type: 'affiliate', name: 'Opus Clip', url: 'https://www.opus.pro/?via=fc9679', cta: 'Try Opus Clip free →' },
      { type: 'h2', text: 'Step 2 — Captions with Submagic' },
      { type: 'paragraph', text: `TikTok captions serve a different function than YouTube captions. On YouTube, captions primarily help sound-off and accessibility viewers. On TikTok, captions are a core visual element that drives engagement — they guide the eye, reinforce key points, and create the aesthetic that TikTok's native audience associates with polished content. Submagic's animated word-by-word highlight captions are specifically designed for this format. The ASR model achieves 98.8% accuracy, but review the transcript carefully for technical terms and proper nouns. Adjust caption size to fill 60-70% of the screen width — captions that are too small are ineffective on mobile. Position captions at the lower third to avoid covering the speaker's face in talking head content.` },
      { type: 'affiliate', name: 'Submagic', url: 'https://submagic.co/?via=phillip68', cta: 'Try Submagic free →' },
      { type: 'h2', text: 'Step 3 — Automated distribution with Repurpose.io' },
      { type: 'paragraph', text: `Repurpose.io's TikTok integration uses TikTok's official Content Posting API — meaning posts are submitted programmatically via TikTok's own infrastructure rather than using screen automation or unofficial methods, which is important for account safety. The workflow trigger fires when a YouTube Short is published (detected via YouTube Data API webhook), fetches the video file, applies your TikTok-specific caption template with dynamic variable substitution, and submits via the TikTok API. Configure your TikTok caption template with your standard hashtag set (15-20 hashtags mixing broad and niche terms), a call-to-action, and your channel handle. One setup creates an evergreen distribution workflow — every future Short publishes to TikTok automatically within minutes of going live on YouTube.` },
      { type: 'affiliate', name: 'Repurpose.io', url: 'https://repurpose.io?fpr=641022', cta: 'Try Repurpose.io free →' },
      { type: 'h2', text: 'TikTok algorithm considerations' },
      { type: 'paragraph', text: `TikTok's recommendation algorithm weights completion rate (percentage of viewers who watch to the end) more heavily than likes or comments in the early distribution window. This means a 45-second clip with 85% completion rate outperforms a 90-second clip with 50% completion rate — even if the longer clip has more total engagement. For repurposed YouTube content, this means ruthless editing is more important than completeness. Cut every second that isn't adding value. The algorithm also tracks rewatch rate (how many viewers watch the clip multiple times) as a strong virality signal — clips with strong visual or informational hooks that reward rewatching perform disproportionately well.` },
      { type: 'h2', text: 'What YouTube content works best on TikTok' },
      { type: 'paragraph', text: `Not all YouTube content translates to TikTok. Content formats with strong TikTok performance from YouTube repurposing: quick tip or hack format (5 things you didn't know about X), strong opinion or hot take (your audience doesn't have to agree — reaction drives engagement), demonstration or before/after (visual transformation with clear payoff), and narrative hook (something unexpected happening in the first 3 seconds). Content that performs poorly: long explanations, content requiring prior context, slow-paced tutorials without a clear value proposition in the first 5 seconds. Use our free stack builder to get personalised repurposing tool recommendations for your channel.` },
    ]
  },
  {
    id: 'best-ai-tools-youtube-beginners',
    title: 'Best AI Tools for YouTube Beginners in 2025',
    slug: 'best-ai-tools-youtube-beginners',
    date: 'April 2025',
    readTime: '7 min read',
    excerpt: 'Starting a YouTube channel in 2025? These AI tools handle the hardest parts — niche research, scripting, editing, and SEO. Here is what each tool actually does and how to use it as a beginner.',
    content: [
      { type: 'intro', text: `The two most common reasons new YouTubers quit are not knowing what videos to make and not being able to edit fast enough. AI tools solve both problems. But there are hundreds of AI tools and most beginner guides recommend everything without explaining what each one actually does. This guide covers the essential AI tools for new YouTubers with technical context on how they work, so you can make an informed decision about what to use.` },
      { type: 'h2', text: 'Finding video topics — VidIQ' },
      { type: 'paragraph', text: `New channels cannot compete for high-volume keywords dominated by established creators with millions of subscribers. The strategy that works for beginners is finding low-competition keywords with sufficient search volume — the long tail of YouTube search. VidIQ's keyword research engine pulls data from YouTube's autocomplete API and historical search data, then scores each keyword using a competition metric based on the average subscriber count of channels currently ranking for that term. A keyword with 5,000 monthly searches but average competing channel size of 10,000 subscribers is far more accessible than a keyword with 100,000 monthly searches where the top results are channels with 1M+ subscribers. VidIQ's Daily Ideas feature automates this discovery process — it analyses your channel's existing content (or your manually set niche tags) and surfaces low-competition opportunities in your niche daily.` },
      { type: 'affiliate', name: 'VidIQ', url: 'https://vidiq.com/affiliate/', cta: 'Get video ideas with VidIQ →' },
      { type: 'h2', text: 'Writing scripts — Koala AI' },
      { type: 'paragraph', text: `Writer's block is the silent killer of new channels — the gap between knowing what to make and knowing what to say. Koala AI bridges this by generating a structured first draft grounded in what already ranks. Its pipeline queries Google Search for your target keyword, retrieves the top-ranking pages, extracts their heading structures and semantic keyword patterns, and generates a script that covers the same content territory. This is not a replacement for your own voice and perspective — it is a starting framework you edit and personalise. The key workflow is: let Koala generate a draft → identify the 3-4 points you have genuine knowledge or opinion on → rewrite those sections in your own words → leave Koala's language for sections you have less to add. This takes the blank page problem off the table while preserving your authenticity.` },
      { type: 'affiliate', name: 'Koala AI', url: 'https://koala.sh/?via=phillip-bates', cta: 'Write scripts faster with Koala AI →' },
      { type: 'h2', text: 'Voiceover option — ElevenLabs' },
      { type: 'paragraph', text: `If you prefer not to record your own voice, or if you want a faceless channel, ElevenLabs generates professional-quality voiceover using a neural TTS model that produces natural prosody and emotional inflection. The free plan gives 10,000 characters/month — roughly 1,300 words, or a 10-minute script at standard narration pace. For a new channel publishing one video per week, this is enough to get started and test whether AI voiceover suits your content style before committing to a paid plan. Key settings for beginners: choose a voice in the "Narration" category, set Stability to 0.75 for consistent delivery, and paste your script in sections rather than all at once to maintain quality across longer scripts.` },
      { type: 'affiliate', name: 'ElevenLabs', url: 'https://try.elevenlabs.io/l55nms662wgu', cta: 'Try ElevenLabs free →' },
      { type: 'h2', text: 'Captions — Submagic' },
      { type: 'paragraph', text: `Captions serve two distinct functions for new channels. First, accessibility — a meaningful percentage of viewers watch with sound off in every context, and captioned videos have consistently higher average view duration. Second, SEO — YouTube's algorithm reads caption text and uses it as a relevance signal for search and recommendation. Submagic's ASR model generates word-level timed captions at 98.8% accuracy, which is significantly better than YouTube's auto-generated captions. For Shorts specifically, animated captions are now considered standard — static captions perform noticeably worse than word-by-word animated ones in the Shorts feed. Submagic's free plan allows 3 videos before requiring a paid subscription, which is enough to test the tool and see the quality difference.` },
      { type: 'affiliate', name: 'Submagic', url: 'https://submagic.co/?via=phillip68', cta: 'Try Submagic free →' },
      { type: 'h2', text: 'Thumbnails — ThumbnailTest' },
      { type: 'paragraph', text: `New channels cannot afford to guess on thumbnails. With low subscriber counts, your initial views come almost entirely from search and the browse feed — and CTR is the primary variable that determines whether YouTube serves your video to more people or stops distributing it. ThumbnailTest removes the guesswork by testing your thumbnail with real users before you publish. The methodology is a controlled experiment: your designs are shown to a panel in a simulated YouTube feed context, generating real click-through data in 2-4 hours. For beginners, even a 20% CTR improvement compounds significantly — a video that would have got 500 views from search gets 600, which improves watch time metrics, which improves algorithmic distribution, which compounds over every future video.` },
      { type: 'affiliate', name: 'ThumbnailTest', url: 'https://thumbnailtest.com/?via=phillip-bates', cta: 'Test your thumbnails →' },
      { type: 'h2', text: 'Where to start' },
      { type: 'paragraph', text: `For a new channel, the minimum viable AI stack is VidIQ (free plan) for keyword research and Submagic for captions. Add Koala AI when you are ready to speed up scripting, and ThumbnailTest when you want data on your thumbnail performance. The entire beginner stack runs for under $30/month and addresses the three biggest friction points: knowing what to make, saying enough to fill a video, and getting people to click. Not sure which specific combination fits your channel type and budget? Use our free AI stack builder to get a personalised recommendation in under 2 minutes.` },
    ]
  },
]

export default function Blog({ onBack, onPost }) {
  return (
    <div className="blog-list">
      <button className="back-btn" onClick={onBack}>← Back to stack builder</button>
      <h1 className="blog-list-title">YouTube AI Tools — Guides & Reviews</h1>
      <p className="blog-list-sub">In-depth guides to help you pick the right AI tools for your YouTube channel.</p>
      <div className="blog-grid">
        {POSTS.map(post => (
          <div key={post.id} className="blog-card" onClick={() => onPost(post.id)}>
            <div className="blog-card-meta">{post.date} · {post.readTime}</div>
            <h2 className="blog-card-title">{post.title}</h2>
            <p className="blog-card-excerpt">{post.excerpt}</p>
            <span className="blog-card-link">Read article →</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function BlogPost({ postId, onBack, onBlog }) {
  const post = POSTS.find(p => p.id === postId)
  if (!post) return null

  return (
    <div className="blog-post">
      <div className="blog-post-nav">
        <button className="back-btn" onClick={onBack}>← Back to stack builder</button>
        <button className="back-btn" onClick={onBlog}>All articles</button>
      </div>
      <div className="blog-post-meta">{post.date} · {post.readTime}</div>
      <h1 className="blog-post-title">{post.title}</h1>
      <div className="blog-post-content">
        {post.content.map((block, i) => {
          if (block.type === 'intro') return <p key={i} className="blog-intro">{block.text}</p>
          if (block.type === 'h2') return <h2 key={i} className="blog-h2">{block.text}</h2>
          if (block.type === 'paragraph') return <p key={i} className="blog-p">{block.text}</p>
          if (block.type === 'affiliate') return (
            <div key={i} className="blog-affiliate">
              <a href={block.url} target="_blank" rel="noopener noreferrer" className="blog-affiliate-btn">
                {block.cta}
              </a>
            </div>
          )
          return null
        })}
      </div>
      <div className="blog-post-cta">
        <p>Not sure which tools are right for your channel?</p>
        <button className="btn-primary" onClick={onBack}>Build my free AI stack →</button>
      </div>
    </div>
  )
}
