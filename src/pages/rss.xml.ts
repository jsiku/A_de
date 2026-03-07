import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: any) {
  const blog = await getCollection("blog");

  return rss({
    title: "Siku.name",
    description: "Moments in progress",
    // astro.config.mjs에 설정된 site URL을 가져오거나 폴백 주소 사용
    site: context.site || "https://siku.name",
    items: blog.map((post) => {
      const introText = post.data.emailIntro
        ? `${post.data.emailIntro} <br><br>`
        : "";

      return {
        title: post.data.title || "Note",
        pubDate: post.data.date,
        description: introText + (post.data.description || ""),
        link: `/blog/${post.slug || post.id}/`,
      };
    }),
  });
}
