// Asset pipeline: modern image formats + the social sharing card.
// Run with: node scripts/assets.cjs
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMG = path.join(__dirname, '..', 'public', 'images');
const OG = path.join(__dirname, '..', 'public', 'og');
fs.mkdirSync(OG, { recursive: true });

async function convertImages() {
  for (const name of ['chess', 'king', 'gloves', 'boardroom']) {
    const src = path.join(IMG, `${name}.jpg`);
    await sharp(src).avif({ quality: 55 }).toFile(path.join(IMG, `${name}.avif`));
    await sharp(src).webp({ quality: 78 }).toFile(path.join(IMG, `${name}.webp`));
    const [a, w, j] = [`${name}.avif`, `${name}.webp`, `${name}.jpg`].map(
      (f) => Math.round(fs.statSync(path.join(IMG, f)).size / 1024)
    );
    console.log(`${name}: jpg ${j}KB -> webp ${w}KB, avif ${a}KB`);
  }
}

// Brick, simplified to static shapes for the card.
const brick = (x, y, s) => `
<g transform="translate(${x},${y}) scale(${s})">
  <path d="M60 88 Q10 130 24 196 Q60 176 76 188 L84 100 Z" fill="#E6401F" stroke="#141110" stroke-width="5"/>
  <rect x="98" y="150" width="30" height="52" fill="#2B3FD8" stroke="#141110" stroke-width="5"/>
  <rect x="66" y="158" width="30" height="52" fill="#2B3FD8" stroke="#141110" stroke-width="5"/>
  <rect x="58" y="84" width="76" height="72" rx="4" fill="#F2B33D" stroke="#141110" stroke-width="5"/>
  <text x="96" y="132" font-family="Arial" font-weight="900" font-size="30" text-anchor="middle" fill="#141110">TW</text>
  <rect x="118" y="92" width="52" height="24" rx="10" fill="#F2B33D" stroke="#141110" stroke-width="5"/>
  <rect x="22" y="92" width="52" height="24" rx="10" fill="#F2B33D" stroke="#141110" stroke-width="5"/>
  <rect x="66" y="22" width="60" height="52" rx="6" fill="#FFD84D" stroke="#141110" stroke-width="5"/>
  <rect x="72" y="10" width="18" height="14" rx="3" fill="#FFD84D" stroke="#141110" stroke-width="5"/>
  <rect x="102" y="10" width="18" height="14" rx="3" fill="#FFD84D" stroke="#141110" stroke-width="5"/>
  <rect x="66" y="34" width="60" height="14" fill="#2B3FD8" stroke="#141110" stroke-width="4"/>
  <circle cx="86" cy="41" r="4" fill="#fff"/><circle cx="108" cy="41" r="4" fill="#fff"/>
  <path d="M84 60 Q96 70 110 58" fill="none" stroke="#141110" stroke-width="4" stroke-linecap="round"/>
</g>`;

async function ogCard() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#141110"/>
  <rect x="28" y="28" width="1144" height="574" fill="none" stroke="#F3EDE1" stroke-width="4"/>
  <rect x="70" y="80" width="475" height="64" fill="#F3EDE1"/>
  <text x="90" y="125" font-family="Arial" font-weight="900" font-size="36" fill="#141110">TECHNO WAR ROOM</text>
  <text x="70" y="270" font-family="Arial" font-weight="900" font-size="86" fill="#F3EDE1">BIG DEAL ON</text>
  <text x="70" y="362" font-family="Arial" font-weight="900" font-size="86" fill="#F3EDE1">THE TABLE?</text>
  <text x="70" y="464" font-family="Arial" font-weight="900" font-size="74" fill="#E6401F">SOUND THE ALARM.</text>
  <text x="70" y="545" font-family="Courier New" font-weight="700" font-size="26" fill="#7FD8D4">COMMERCIAL PURSUIT SUPPORT ⚡ B2B SAAS AND IT SERVICES</text>
  <g transform="rotate(8 1030 260)">${brick(930, 150, 1.15)}</g>
  <rect x="905" y="90" width="230" height="52" fill="#F2B33D" stroke="#141110" stroke-width="4" transform="rotate(-6 1020 116)"/>
  <text x="1020" y="124" font-family="Courier New" font-weight="700" font-size="24" fill="#141110" text-anchor="middle" transform="rotate(-6 1020 116)">MUST-WIN ONLY</text>
</svg>`;
  await sharp(Buffer.from(svg)).png().toFile(path.join(OG, 'default.png'));
  console.log('og/default.png written', Math.round(fs.statSync(path.join(OG, 'default.png')).size / 1024) + 'KB');
}

convertImages().then(ogCard);
