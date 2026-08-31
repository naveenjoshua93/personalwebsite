import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/services' }),
  schema: z.object({
    number: z.string(),
    name: z.string(),
    shortName: z.string(),
    oneliner: z.string(),
    tier: z.number(),
    color: z.enum(['red', 'cobalt', 'green', 'mustard', 'cyan', 'lilac']),
    metaTitle: z.string(),
    metaDescription: z.string(),
    scenarios: z.array(z.object({ stamp: z.string(), title: z.string(), text: z.string() })),
    what: z.array(z.string()),
    deliverables: z.array(z.object({ name: z.string(), fmt: z.enum(['pdf', 'deck', 'template', 'video', 'doc']), desc: z.string() })),
    steps: z.array(z.object({ title: z.string(), text: z.string(), need: z.string().optional() })),
    excludes: z.array(z.string()),
    shape: z.array(z.object({ k: z.string(), v: z.string() })),
    related: z.array(z.object({ name: z.string(), href: z.string(), desc: z.string(), boundary: z.string().optional() })),
  }),
});

export const collections = { services };
