// Builds the downloadable Mortar specimen deck (fictional, labelled) as a real PPTX.
// Run: node scripts/specimen-deck.cjs
const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

const INK = '10141B';
const COBALT = '2B3FD8';
const GREY = '4A5261';
const SOFT = '8A93A6';
const LINE = 'C9CEDA';
const RED = 'B23A1B';
const PAPER = 'FDFDFB';

const p = new pptxgen();
p.defineLayout({ name: 'W', width: 13.33, height: 7.5 });
p.layout = 'W';
p.author = 'Teclato';
p.title = 'Mortar specimen deck (fictional)';

const stamp = (s, dark = false) => {
  s.addText('FICTIONAL SPECIMEN', {
    x: 10.6, y: 0.35, w: 2.4, h: 0.35, fontSize: 9, charSpacing: 2,
    color: RED, align: 'right', fontFace: 'Consolas',
  });
};
const foot = (s, text) => {
  s.addText(text, { x: 0.8, y: 6.9, w: 11.7, h: 0.4, fontSize: 10, color: SOFT, fontFace: 'Consolas' });
};
const head = (s, text) => {
  s.addText(text, { x: 0.8, y: 0.7, w: 10.5, h: 1.1, fontSize: 30, bold: true, color: INK });
};
const statRow = (s, stats, y = 2.3, big = false) => {
  const w = 3.7;
  stats.forEach((st, i) => {
    const x = 0.8 + i * (w + 0.35);
    s.addShape('rect', { x, y, w, h: 0.06, fill: { color: COBALT } });
    s.addText(st[0], { x, y: y + 0.15, w, h: 0.8, fontSize: big ? 28 : 24, bold: true, color: INK });
    s.addText(st[1], { x, y: y + 0.95, w, h: 1.5, fontSize: 12, color: GREY, valign: 'top' });
  });
};

// 01 title
let s = p.addSlide();
s.background = { color: INK };
stamp(s, true);
s.addText([{ text: 'MORTAR', options: { color: PAPER } }, { text: ' ■', options: { color: COBALT } }], { x: 0.8, y: 2.3, w: 11, h: 1.1, fontSize: 54, bold: true });
s.addText('AI agents that close the books.', { x: 0.8, y: 3.5, w: 11, h: 0.9, fontSize: 28, color: PAPER });
s.addText('SERIES A  ⚡  CONFIDENTIAL  ⚡  2026', { x: 0.8, y: 4.6, w: 11, h: 0.5, fontSize: 12, color: SOFT, fontFace: 'Consolas', charSpacing: 2 });

// 02 problem
s = p.addSlide(); s.background = { color: PAPER }; stamp(s);
head(s, 'The close still runs on heroics.');
statRow(s, [
  ['5–9 days', 'of month-end close, every month, run by the most senior people in finance'],
  ['70%', 'of that time is matching, reconciling, and chasing, not judgement'],
  ['Hiring wall', 'controllers are scarce, and the fix so far has been more spreadsheets'],
]);
foot(s, 'Figures illustrative and fictional');

// 03 why now
s = p.addSlide(); s.background = { color: PAPER }; stamp(s);
head(s, 'Agents just crossed the audit threshold.');
const tl = [
  ['2023', 'LLMs draft text', LINE],
  ['2024', 'Structured outputs make results checkable', LINE],
  ['2025', 'Tool use plus evals make workflows repeatable', LINE],
  ['2026', 'Agent runs are reliable and loggable enough to stand in an audit', COBALT],
];
tl.forEach((t, i) => {
  const x = 0.8 + i * 3.05;
  s.addShape('rect', { x, y: 2.4, w: 0.05, h: 2.2, fill: { color: t[2] } });
  s.addText(t[0], { x: x + 0.2, y: 2.4, w: 2.6, h: 0.4, fontSize: 13, color: t[2] === COBALT ? COBALT : SOFT, fontFace: 'Consolas' });
  s.addText(t[1], { x: x + 0.2, y: 2.85, w: 2.6, h: 1.8, fontSize: 13, color: INK, valign: 'top' });
});
foot(s, 'Inference cost per reconciled line down roughly 20x in three years (illustrative)');

// 04 product
s = p.addSlide(); s.background = { color: PAPER }; stamp(s);
head(s, 'A closed loop, with a human at the gate.');
const flow = [
  ['ERP + bank feeds', false], ['Mortar agents\nmatch, reconcile, draft entries', true],
  ['Controller approves', false], ['Immutable audit log', false],
];
flow.forEach((f, i) => {
  const x = 0.8 + i * 3.15;
  s.addShape('rect', { x, y: 2.7, w: 2.7, h: 1.6, fill: { color: f[1] ? COBALT : PAPER }, line: { color: f[1] ? COBALT : INK, width: 1.5 } });
  s.addText(f[0], { x, y: 2.7, w: 2.7, h: 1.6, fontSize: 13, align: 'center', color: f[1] ? 'FFFFFF' : INK });
  if (i < 3) s.addText('→', { x: x + 2.68, y: 3.2, w: 0.5, h: 0.5, fontSize: 18, color: SOFT, align: 'center' });
});
foot(s, 'Nothing posts without a human decision. Every agent step is logged, replayable, and citable.');

// 05 wedge
s = p.addSlide(); s.background = { color: PAPER }; stamp(s);
head(s, 'Land on one painful workflow. Climb.');
const stairs = [['Reconciliation', 'THE LAND'], ['AP exceptions', 'MONTH 3'], ['Close checklist', 'MONTH 6'], ['Reporting drafts', 'MONTH 9']];
stairs.forEach((st, i) => {
  const h = 1.2 + i * 0.8; const x = 0.8 + i * 3.05; const y = 5.9 - h;
  s.addShape('rect', { x, y, w: 2.7, h, fill: { color: 'EDF0F6' }, line: { color: INK, width: 1.2 } });
  s.addText(st[0], { x: x + 0.15, y: y + h - 0.95, w: 2.4, h: 0.5, fontSize: 14, bold: true, color: INK });
  s.addText(st[1], { x: x + 0.15, y: y + h - 0.5, w: 2.4, h: 0.35, fontSize: 10, color: GREY, fontFace: 'Consolas' });
});
foot(s, 'Each step is sold to the same buyer, on the same audit trail, with no new procurement cycle.');

// 06 traction
s = p.addSlide(); s.background = { color: PAPER }; stamp(s);
head(s, 'Three numbers that agree with each other.');
statRow(s, [
  ['$1.7M ARR', '3.4x year over year, 14 mid-market customers'],
  ['128% NRR', 'the staircase is being climbed without new sales cycles'],
  ['11 months', 'CAC payback, holding as ACV grows'],
], 2.4, true);
foot(s, 'All figures fictional. The craft is which three numbers appear, and that they corroborate.');

// 07 moat
s = p.addSlide(); s.background = { color: PAPER }; stamp(s);
head(s, 'What compounds while we sleep.');
const moat = [
  ['Workflow depth.', 'Every deployed workflow encodes a customer’s edge cases; ripping it out means re-teaching someone else.'],
  ['The eval corpus.', 'Every resolved exception becomes a test. Reliability compounds with volume, and volume is ours.'],
  ['The audit trail.', 'Auditors learn to read Mortar logs. Switching means re-explaining a year of judgement calls.'],
];
moat.forEach((m, i) => {
  const y = 2.3 + i * 1.35;
  s.addShape('rect', { x: 0.8, y, w: 0.06, h: 1.05, fill: { color: COBALT } });
  s.addText([{ text: m[0] + '  ', options: { bold: true, color: INK } }, { text: m[1], options: { color: GREY } }],
    { x: 1.05, y, w: 10.8, h: 1.15, fontSize: 15, valign: 'top' });
});

// 08 competition
s = p.addSlide(); s.background = { color: PAPER }; stamp(s);
head(s, 'The honest field.');
s.addTable(
  [
    ['', 'Do nothing', 'Build in-house', 'RPA incumbents', 'Point AI tools', 'Mortar'],
    ['Owned by finance', '—', 'No, owned by eng', 'No, owned by IT', 'Partly', 'Yes'],
    ['Audit-grade log', '—', 'Build it yourself', 'Screen-level only', 'Rarely', 'Native'],
    ['Live in', '—', 'Quarters', 'Months', 'Weeks', 'Weeks'],
  ].map((row, r) => row.map((c, i) => ({
    text: c,
    options: {
      fontSize: r === 0 ? 11 : 12,
      bold: r === 0 || i === 0,
      color: i === 5 && r > 0 ? 'FFFFFF' : (r === 0 ? GREY : INK),
      fill: { color: i === 5 && r > 0 ? COBALT : PAPER },
      fontFace: r === 0 ? 'Consolas' : undefined,
    },
  }))),
  { x: 0.8, y: 2.3, w: 11.7, border: { pt: 0.75, color: LINE }, rowH: 0.65 }
);

// 09 model
s = p.addSlide(); s.background = { color: PAPER }; stamp(s);
head(s, 'Priced per workflow, because seats punish automation.');
statRow(s, [
  ['$2k', 'per workflow per month'],
  ['~5 workflows', 'average by month 9, so ~$120k ACV'],
  ['78%', 'gross margin, inference costs included'],
]);
foot(s, 'Expansion is the default motion: the buyer adds workflows, never negotiates seats.');

// 10 team
s = p.addSlide(); s.background = { color: PAPER }; stamp(s);
head(s, 'We have lived this close.');
const team = [
  ['CEO (fictional)', 'Ran a 40-person finance ops org. Owned the 9-day close this deck opens with.'],
  ['CTO (fictional)', 'Shipped agent evaluation infrastructure at scale. Believes reliability is a dataset, not a demo.'],
  ['Founding eng (fictional)', 'A decade of ERP integrations. Knows where the bodies are buried in the ledgers.'],
];
team.forEach((t, i) => {
  const x = 0.8 + i * 4.05;
  s.addShape('ellipse', { x, y: 2.3, w: 0.9, h: 0.9, fill: { color: LINE } });
  s.addText(t[0], { x, y: 3.35, w: 3.7, h: 0.45, fontSize: 15, bold: true, color: INK });
  s.addText(t[1], { x, y: 3.8, w: 3.7, h: 1.6, fontSize: 12, color: GREY, valign: 'top' });
});

// 11 ask
s = p.addSlide(); s.background = { color: PAPER }; stamp(s);
head(s, '$8M buys three milestones.');
const use = [['Engineering 45%', COBALT, 5.26], ['Go-to-market 35%', INK, 4.09], ['Security 20%', SOFT, 2.34]];
let ux = 0.8;
use.forEach((u) => {
  s.addShape('rect', { x: ux, y: 2.3, w: u[2], h: 0.7, fill: { color: u[1] } });
  s.addText(u[0], { x: ux + 0.12, y: 2.3, w: u[2] - 0.2, h: 0.7, fontSize: 11, color: 'FFFFFF', fontFace: 'Consolas' });
  ux += u[2];
});
const ms = [
  ['$6M ARR', 'within 24 months, on the existing wedge motion.'],
  ['Three expansion modules', 'shipped and priced.'],
  ['SOC 2 Type II', 'plus the audit-partner program, because trust is the product.'],
];
ms.forEach((m, i) => {
  const y = 3.5 + i * 0.95;
  s.addShape('rect', { x: 0.8, y, w: 0.06, h: 0.7, fill: { color: COBALT } });
  s.addText([{ text: m[0] + '  ', options: { bold: true, color: INK } }, { text: m[1], options: { color: GREY } }],
    { x: 1.05, y, w: 10.8, h: 0.8, fontSize: 15, valign: 'top' });
});

// 12 plan
s = p.addSlide(); s.background = { color: INK }; stamp(s, true);
s.addText('The Series B story we intend to earn:\nthe system of record for agent-run finance work.',
  { x: 0.8, y: 2.6, w: 11.5, h: 1.8, fontSize: 28, color: PAPER });
s.addText('MORTAR  ⚡  FICTIONAL  ⚡  SPECIMEN BY TECLATO', { x: 0.8, y: 5.2, w: 11, h: 0.5, fontSize: 12, color: SOFT, fontFace: 'Consolas', charSpacing: 2 });

const out = path.join(__dirname, '..', 'public', 'files', 'mortar-specimen-deck.pptx');
fs.mkdirSync(path.dirname(out), { recursive: true });
p.writeFile({ fileName: out }).then(() => {
  console.log('written', out, Math.round(fs.statSync(out).size / 1024) + 'KB');
});
