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

**2026-08-31, template approved and completed.** The owner approved the two test pages unchanged. All six service pages are built from the same template and JSON content files. A "How it plays by domain" section (07) was added to the template per the owner's domain-categorization request: every service carries notes for B2B SaaS, IT services, BFSI, and Healthcare, phrased as how the work adapts, never as claims of past domain engagements (the no-invented-facts rule). The services overview is generated from the content collection. All internal links verified against the built output.
