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

## Gate 8: Contact and booking (2026-08-31)

**Decision: email only for now.** Cal.com, Calendly, and SavvyCal were compared (cost, embed weight, privacy); the owner chose to defer the scheduler. The contact page's primary action is a subject-prefilled mailto. The scheduler slot remains wired: setting BOOKING_URL in src/pages/contact.astro swaps the primary button to a booking link without layout changes. Recommendation on record when ready: Cal.com (free, open source, zero JS as a plain link).

## Gate 4: Information architecture (2026-08-31)

**Decision: Variant A, flat and shallow.**

```
/                      Home (per approved mock)
/services/             One overview page, both tiers, divider between them
/services/[slug]/      Six service pages
/armory/               Filterable library (PDFs, decks, templates, films)
/armory/[slug]/        One page per artifact
/insights/             Essays and films
/insights/[slug]/
/tools/                Landing for widgets
/tools/deal-diagnostic/
/tools/workback-planner/
/glossary/
/about/                The practice, "how engagements run" folded in
/contact/              Booking page
```

- Primary nav: Services, Armory, Insights, Tools, About, plus Book a call. Footer lists all six services individually, glossary, email.
- Tier 2 sits on the same services overview below a divider, in the black-card treatment.
- /approach/ does not exist; it folds into /about/. The four-step play also lives on the home page.
- Films are insights entries tagged video; the Armory surfaces them via its Video filter. One source of truth.
- The Armory launches only with artifacts that exist as real files, and hides any filter chip that would return zero results.
- Nav links to the services overview only; no dropdown.

## Gate 5: Home page structure (2026-08-31)

**Skipped with owner approval.** The home page structure was decided through the approved Gate 2 mock iterations: hero, must-win banner, marquee, pain comic, six services, Armory, live feed, stakes collage, four-step play, CTA. The Astro home page is a direct port of that mock.

## Gate 6: Service page template (2026-08-31)

**Approved template, ten sections:** hero with tier kicker and giant outlined number, the situation (comic panels, moved to lead), what this is, what you get (deliverable cards with format stamps), how it works (tinted step blocks including "from you" requirements), what this does not include (black card), engagement shape, Armory link, related services with boundary lines, CTA.

Two test pages built to prove the template across tiers: `/services/rfp-response/` (Tier 1, five steps, five deliverables) and `/services/case-study-development/` (Tier 2, four steps, four deliverables). Service content lives in `src/content/services/*.json` so copy is editable without touching components. The remaining four pages await owner review of these two.

Also built: services overview page (two tiers, divider treatment), Brick 404 ("This page lost the deal"), and the W-A-R keyboard easter egg (siren flash, Brick flies across). Fonts remain on CDN until the Gate 9 hardening pass self-hosts them.

**2026-08-31, conversion spine + performance + accessibility + socials (owner instruction, batch).**
- Contact page built with a swappable scheduler (single BOOKING_URL constant, currently pointing at a cal.com placeholder pending the Gate 8 provider decision), a 30 minute call description, an email route, the what-happens-after list, and a five question FAQ with FAQPage structured data. No long form.
- About page built: the practice, the method (must-win only, scoped, invisible to the buyer, nothing invented), and four beliefs about pursuits. Deliberately not a team page.
- Mobile fixed: hamburger menu with aria-expanded, compact logo, Book a call always visible.
- Social placeholders added to the footer and to Organization sameAs: LinkedIn (/company/technowarroom), Substack (technowarroom.substack.com), YouTube (@technowarroom), X (@technowarroom). These handles are unclaimed placeholders the owner needs to register; swap in Base.astro if the real handles differ.
- Sharing and SEO surface: canonical URLs, Open Graph and Twitter cards with a generated Brick card (public/og/default.png via scripts/assets.cjs), ProfessionalService JSON-LD sitewide, Service plus BreadcrumbList JSON-LD on service pages, sitemap via @astrojs/sitemap, own robots.txt. Canonical host is the workers.dev URL until technowarroom.com is attached (change astro.config site and robots.txt then).
- Performance: fonts self-hosted as woff2 (Clash 600/700, Switzer 400/500/600, Plex Mono 400/500/600, ~140KB total) with preloads, CDN font links removed; AVIF and WebP variants generated for all photos with picture fallbacks; the city video is lazy-loaded via IntersectionObserver, never under reduced motion.
- Accessibility: skip link, prefers-reduced-motion support (marquee, stickers, films all freeze; films hold a composed frame), aria-pressed on Armory filter chips.
- Housekeeping: unused videos and images removed from public/, wrangler asset cleanup.

**2026-08-31, storyboard films replace abstract films (owner feedback).** The owner rejected the first SVG films as too abstract ("animated dashboards") and asked for actual narrative videos built from a real workflow, scene by scene. New approach: write the engagement workflow as a storyboard first, then animate it. Film 01 v2 "How an engagement actually runs" is a 48 second, 8 scene SVG film with brick-people characters (seller, deal owner, SME, Brick): the Friday RFP landing, the call, the day-one intake meeting with a go/no-go board, the room being set (workstreams and calendar), extraction into the matrix, the SME interview, review night, and submission day with confetti. Scene groups carry start/end seconds and a single Web Animations API runner drives effects (rise, pop, stamp, drop, fly, fill, jump, confetti) on one synchronized loop, with a caption bar and progress strip. Each scene was verified frame by frame by pausing the animation clock. FilmPursuit (the abstract v1) is deleted; FilmMatrix remains on the RFP page pending the owner's verdict. Future service films follow this storyboard-first method.

**2026-08-31, seventh service added (owner instruction).** Startup pitch deck building joins Tier 1 as service 05, on the reasoning that a funding round is a must-win pursuit with an investor as the buyer. Tier 2 renumbers to 06 (competitive analysis) and 07 (case studies). Threaded through home cards (wide layout restored for seven), marquee, footer, the Armory (new Pitch decks filter chip and a narrative-arc artifact card), and cross-linked with proposal deck building using a boundary line ("Proposal decks win a buyer. Pitch decks win a round."). Its exclusions keep the firm out of regulated territory: no invented traction, no placement-agent work, no valuation or terms advice.

**2026-08-31, SVG process films.** The owner asked for animation videos showing the process. Built as code-native SVG animations rather than rendered video files: crisp at any size, a few kilobytes, no hosting, and authentic (they depict our actual process, not stock footage). Film 01 "How a pursuit runs" (16s loop: Brick flies through, a response document builds line by line, workstream bars fill, a five-phase timeline advances, a SUBMITTED stamp lands) replaces the stock chess loop in the home live feed. Film 02 "Every requirement, counted" (12s loop: a compliance matrix fills cell by cell with honest gap cells flagged, ending on a NOTHING UNANSWERED stamp) sits on the RFP response page via an optional `film` field in the service schema. Staggered timing is driven by the Web Animations API from per-element loop percentages. More films can be added per service the same way.

**2026-08-31, template approved and completed.** The owner approved the two test pages unchanged. All six service pages are built from the same template and JSON content files. A "How it plays by domain" section (07) was added to the template per the owner's domain-categorization request: every service carries notes for B2B SaaS, IT services, BFSI, and Healthcare, phrased as how the work adapts, never as claims of past domain engagements (the no-invented-facts rule). The services overview is generated from the content collection. All internal links verified against the built output.
