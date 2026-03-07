import type { APIRoute } from "astro";

export const prerender = false; // ✨ 이 줄을 반드시 추가해야 서버리스로 작동합니다!

export const GET: APIRoute = async ({ locals }) => {
  // 클라우드플레어 환경 변수에서 Client ID 가져오기
  const clientId = (locals as any).runtime.env.GITHUB_CLIENT_ID;

  // GitHub 로그인 페이지로 리다이렉트
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user`;

  return Response.redirect(githubAuthUrl, 302);
};
