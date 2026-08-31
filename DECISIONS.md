# Build decisions

A log of the choices made at each gate of the build, so the reasoning survives the conversation that produced it.

## Gate 1: Company name (2026-08-31)

**Decision: War Room Advisory** (two words, "War Room Advisory" everywhere).

- Domain: warroomadvisory.com, unregistered at decision time per the Verisign RDAP registry. Registration is with the owner, not automated.
- Why: "war room" is an established term of art for the room where a large pursuit gets run, so the name lands immediately with VPs of Sales, CROs, and Heads of Pre-Sales. No consultancy in the proposal, bid support, or pursuit space owns the phrase.
- Known trade-offs, accepted: "War Room" is also the name of a prominent US political podcast, and the military register is stronger than the rest of the site's restrained tone.
- Candidates considered: The Pursuit Practice, Joshua Advisory, Farleigh Advisory, Wardroom, Pursuit and Proof, Second Chair (taken, four firms use it), Tessera, Kairos (crowded), Selborne (collides with a London barristers' chambers), Hartwell and Co.

## Gate 1 amendment (2026-08-31)

**The name is now Techno War Room.** technowarroom.com was unregistered at decision time per the Verisign RDAP registry. The Gate 1 reasoning about "war room" as a term of art still applies; "techno" adds the tech-enabled positioning.

## Gate 2: Design direction (2026-08-31)

**Decision: bold neo-brutalist collage.** The owner reviewed a restrained "Briefing Document" render first and rejected it as too plain.

The chosen direction: cream base with a five-colour palette (ink, signal red, cobalt, mustard, lilac), thick borders, hard offset shadows, rotated sticker badges, an animated marquee, real photography, a brick-superhero mascot, and short punchy copy. References: the Awwwards brutalism and colourful-brutalist collections.

**Brief amendments made by the owner at this gate:**
- The no-stock-photography rule is repealed. Images are sourced under the standard Unsplash license (free commercial use). Unsplash+ premium images are never used.
- The restraint-over-decoration and type-led rules are repealed. The direction is deliberately loud.
- The ban on sentence fragments is relaxed for display copy (headlines, stickers, captions). Body copy stays in plain sentences.
- Rules that remain in force: no invented facts of any kind, no em dashes, no client logos, no testimonials, no metrics band, no team page, banned vocabulary list, first person plural.
- The mascot is an original blocky "brick hero" character drawn as SVG. Actual LEGO imagery or minifigure photos are never used, because the minifigure is LEGO's trademark and using it to brand a commercial service invites a dispute.

**Service list amendment (confirmed by owner):** objection handling and approver mapping is removed. Six services remain in two tiers. Tier 1: RFP and RFI response, proposal deck building, security questionnaires and vendor assessments, pricing and SOW construction. Tier 2: competitive analysis and positioning, case study and reference development.

**Videos:** the site design gains video slots (an ambient loop plus a pattern for workflow demo videos). Demo footage gets produced later; nothing fabricated ships.

Typefaces: Clash Display (headlines), Switzer (body), IBM Plex Mono (labels), all free and self-hostable.

## Gate 3: Stack and hosting (2026-08-31)

**Decision: Astro with static output, hosted on Cloudflare Pages via the GitHub integration.**

- Why Astro: content in files, native MDX, zero client JavaScript unless a component opts in, full control of generated HTML, static build.
- Why Cloudflare Pages: free plan with unmetered static bandwidth, 500 builds a month, redirect support via _redirects, and free cookie-less Web Analytics, which defers the cookie banner question.
- Vercel was declined because the Hobby plan prohibits commercial use, making it the only option with a bill, and Next.js ships more client JavaScript than the brief allows. Eleventy plus GitHub Pages was declined for weak MDX support, no redirect handling, and GitHub's terms discouraging business sites.
- Large video files never live in the repo or on Pages. Ambient loops stay small and self-hosted; workflow demo films go to a video host (YouTube unlisted or Cloudflare Stream) when produced.
- Videos on the site (owner request): ambient loops, a short home page explainer, and screencast workflow demos. Site copy stays vendor-neutral about AI tooling; no testimonial videos.

## Post-Gate-3 additions (2026-08-31, owner approved)

- Positioning line: "We only take must-win deals." Rendered as a banner under the hero.
- Target market copy is "B2B SaaS and IT services" (owner's call, replacing "B2B technology").
- **The Armory**: a filterable resource library (format x service x domain) for thought leadership PDFs, situation decks, templates, and films. Filter chips in the neo-brutalist style. Only artifacts that exist as real files ship; the taxonomy is built ahead of the content.
- Interactive features approved for the real build: deal danger diagnostic quiz, work-back planner widget, pursuit glossary, Brick 404 page, and the W-A-R siren easter egg. All client-side, no data capture in v1.
- Custom crosshair cursor and press-down button interactions sitewide.
