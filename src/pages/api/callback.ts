import type { APIRoute } from "astro";

export const prerender = false; // ✨ 여기도 마찬가지로 추가합니다!

export const GET: APIRoute = async ({ request, locals }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  const clientId = (locals as any).runtime.env.GITHUB_CLIENT_ID;
  const clientSecret = (locals as any).runtime.env.GITHUB_CLIENT_SECRET;

  try {
    // 1. GitHub에 인증 코드를 보내고 진짜 Access Token을 받아옵니다.
    const response = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code,
        }),
      },
    );

    const data = await response.json();
    const accessToken = data.access_token;

    // 2. Decap CMS 팝업 창이 이해할 수 있는 형태의 스크립트로 토큰을 쏴줍니다.
    const script = `
      <script>
        const receiveMessage = (message) => {
          if (message.data === "authorizing:github") {
            window.opener.postMessage(
              'authorization:github:success:{"token":"${accessToken}","provider":"github"}',
              message.origin
            );
          }
        };
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      </script>
    `;

    return new Response(script, {
      headers: { "Content-Type": "text/html;charset=UTF-8" },
    });
  } catch (error) {
    return new Response("인증 실패", { status: 500 });
  }
};
