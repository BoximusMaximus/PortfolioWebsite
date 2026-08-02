import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const devblog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/devblog" }),
});

export const collections = { devblog };