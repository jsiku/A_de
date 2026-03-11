import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ base: "./src/content/log", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string().optional(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      type: z.enum(["post", "memo", "tags", "hej", "links"]).default("post"), // ✨ 4가지 타입 통합 완벽 적용
      description: z.string().optional(),
      cover: image().optional(),
      draft: z.boolean().optional(),
      slug: z.string().optional(),
      emailIntro: z.string().optional(),
      pinned: z.boolean().optional(),
    }),
});

export const collections = { blog: blogCollection };
