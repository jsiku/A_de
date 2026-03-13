import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: any) {
  const blog = await getCollection("blog");

  return rss({
    title: "Siku.name",
    description: "Moments in progress",
    site: context.site || "https://siku.name",
    items: blog.map((post) => {
      const introText = post.data.emailIntro
        ? `${post.data.emailIntro} <br><br>`
        : "";

      // 1. 주소 결정 로직: data.archive 값이 true라면 /archive/, 아니면 /log/ 사용
      // (만약 필드명이 다르다면 post.data.category === 'archive' 등으로 변경하세요)
      const folder = post.data.archived ? "archive" : "log";
      const slug = post.data.slug || post.id;

      return {
        title: post.data.title || "Note",
        pubDate: post.data.date,
        description: introText + (post.data.description || ""),
        // 2. 동적으로 결정된 folder를 경로에 적용
        link: `/${folder}/${slug}/`,
      };
    }),
  });
}
