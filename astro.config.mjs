// @ts-check
import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind"; // ✨ 1. 플러그인 불러오기
import cloudflare from "@astrojs/cloudflare"; // ✨ 어댑터 불러오기

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: cloudflare({
    imageService: "compile", // ✨ Cloudflare 이미지 처리 에러 방지
  }),
  // ✨ 2. integrations 배열 안에 pagefind()를 추가합니다.
  integrations: [pagefind()],
});
