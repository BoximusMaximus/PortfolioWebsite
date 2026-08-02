import { defineCollection } from 'astro:content';
import { z } from "astro/zod";
import { glob } from 'astro/loaders';

const devblog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/devblogs" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(), //YYYY-MM-DD
  }),
});

export const collections = { devblog };