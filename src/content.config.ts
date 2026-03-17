import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// 🔧 핵심: 모든 필드 공통 clean
const clean = (v: unknown) =>
  v === "" || v === null || v === undefined ? undefined : v;

const blogCollection = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.preprocess(clean, z.string().optional()),

      // 🔥 필수 (여기만 strict 유지)
      date: z.coerce.date(),

      updated: z.preprocess(clean, z.coerce.date().optional()),

      tags: z.preprocess((v) => {
        if (v === "" || v === null || v === undefined) return [];
        return Array.isArray(v) ? v : [v];
      }, z.array(z.string())),

      type: z.preprocess(
        clean,
        z.enum(["post", "memo", "tags", "hej", "links"]).default("post"),
      ),

      description: z.preprocess(clean, z.string().optional()),

      cover: image().optional(),

      draft: z.preprocess(clean, z.boolean().default(false)),

      slug: z.preprocess(clean, z.string().optional()),

      emailIntro: z.preprocess(clean, z.string().optional()),

      pinned: z.preprocess(clean, z.boolean().default(false)),

      archived: z.preprocess(clean, z.boolean().default(false)),
    }),
});

export const collections = { blog: blogCollection };
