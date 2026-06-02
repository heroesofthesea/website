import { defineCollection, z } from 'astro:content';

// Blog posts: markdown files in src/content/blog/
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    author: z.string().optional(),
  }),
});

// Static markdown pages (Privacy Policy, Accessibility Statement)
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { blog, pages };
