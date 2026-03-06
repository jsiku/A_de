import type { APIContext } from "astro";

export const prerender = false; // 빌드 시 정적 파일로 굽지 않고 서버에서 실행

export async function POST({ request, locals }: APIContext) {
  try {
    const body = await request.json();
    const textInput = body.text;
    const apiKey = (locals as any).runtime.env.GEMINI_API_KEY;
    console.log("API KEY:", apiKey);
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "서버에 API Key가 설정되지 않았습니다." }),
        { status: 500 },
      );
    }

    const systemPrompt =
      "너는 텍스트를 추상적인 SVG 코드로 변환하는 아티스트야. 입력된 글의 핵심 키워드를 파악해서 기하학적이고 현대적인 SVG 코드로만 응답해. 설명이나 인삿말은 절대 하지마. <svg> 태그로 시작해서 </svg>로 끝나야 하며, width='100%'를 포함해.";

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            { parts: [{ text: systemPrompt + "\n\n입력된 글: " + textInput }] },
          ],
          generationConfig: { temperature: 0.7, topP: 0.9 },
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          error: `API 오류: ${data.error?.message || "알 수 없는 에러"}`,
        }),
        { status: response.status },
      );
    }

    // 데이터 추출 (안전한 옵셔널 체이닝 적용)
    const rawSvg = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawSvg) {
      return new Response(
        JSON.stringify({
          error: "모델로부터 유효한 응답을 받지 못했습니다. (필터링 됨)",
        }),
        { status: 500 },
      );
    }

    // 마크다운 기호 제거
    const svgCode = rawSvg.replace(/```svg|```/g, "").trim();

    return new Response(JSON.stringify({ svg: svgCode }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ 서버 내부 에러 발생:", error);
    return new Response(
      JSON.stringify({
        error: "서버 에러가 발생했습니다. 터미널 로그를 확인하세요.",
      }),
      { status: 500 },
    );
  }
}
