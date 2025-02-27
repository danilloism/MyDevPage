import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const profiles = defineCollection({
  loader: file('src/collections/profiles/profiles.json'),
  schema: z.object({}),
});

export const collections = { profiles };
