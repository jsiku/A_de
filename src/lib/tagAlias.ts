export const tagAlias: Record<string, string> = {
  // MMA / 격투기
  pride: "MMA",
  Pride: "MMA",
  PRIDE: "MMA",
  ufc: "MMA",
  UFC: "MMA",
  mma: "MMA",
  MMA: "MMA",
  HEROS: "MMA",
  K1: "MMA",
  격투기: "MMA",

  // 자전거
  자전거: "BICYCLE",
  bicycle: "BICYCLE",
  탄천: "BICYCLE",

  // 여행 / 나들이
  여행: "TRAVEL",
  나들이: "TRAVEL",
  suwon: "TRAVEL",
  칠보산: "TRAVEL",
  travel: "TRAVEL",

  // 블로그 / 블로깅
  블로그: "BLOG",
  블로깅: "BLOG",
  blogging: "BLOG",
  "blog-history": "BLOG",
  feed: "BLOG",
  about: "BLOG",
  snsjsiku: "BLOG",

  // 리뷰
  리뷰: "REVIEW",
  review: "REVIEW",

  navbar: "TEMEPLATE",
  temeplate: "TEMEPLATE",
  layout: "TEMEPLATE",
  스킨: "TEMEPLATE",
  테마: "TEMEPLATE",
  템플릿: "TEMEPLATE",

  // 웹
  web: "WEB",
  웹: "WEB",
  internet: "WEB",
  인터넷: "WEB",
  browser: "WEB",
  html: "WEB",
  css: "WEB",
  domain: "WEB",
  "personal-web": "WEB",

  // 블로그 플랫폼
  wordpress: "BLOG-PLATFORM",
  워드프레스: "BLOG-PLATFORM",
  blogger: "BLOG-PLATFORM",
  textcube: "BLOG-PLATFORM",
  텍스트큐브: "BLOG-PLATFORM",
  tistory: "BLOG-PLATFORM",
  jekyll: "BLOG-PLATFORM",
  Astro: "BLOG-PLATFORM",
  astro: "BLOG-PLATFORM",
  playtalk: "BLOG-PLATFORM",
  disqus: "BLOG-PLATFORM",

  // SNS
  sns: "SNS",
  facebook: "SNS",
  google: "SNS",
  cyworld: "SNS",
  "us-cyworld": "SNS",
  "google-friend-connect": "SNS",
  connect: "SNS",
  "data-flow": "SNS",

  // 책
  책: "BOOK",
  독서: "BOOK",
  한국소설: "BOOK",
  소설: "BOOK",
  판타지: "BOOK",
  장르문학: "BOOK",
  흡혈귀: "BOOK",
  book: "BOOK",
  "연을 쫓는 아이": "BOOK",
  "펭귄에게 배우는 변화의 기술": "BOOK",
  지식독점: "BOOK",
  안드레아스에쉬바흐: "BOOK",

  // 기술
  nas: "TECH",
  homelab: "TECH",
  data: "TECH",
  synergy: "TECH",
  ubuntu: "TECH",
  windows: "TECH",
  컴퓨터: "TECH",

  // 경제
  경제: "ECONOMICS",
  부동산: "ECONOMICS",
  투자: "ECONOMICS",
  돈: "ECONOMICS",

  // 운동
  운동: "HEALTH",
  건강: "HEALTH",
  러너스하이: "HEALTH",

  // 생각 / 에세이
  생각: "THOUGHTS",
  잡설: "THOUGHTS",
  한줄생각: "THOUGHTS",
  reflection: "THOUGHTS",
  thoughts: "THOUGHTS",

  // 종교 / 명상
  종교: "SPIRITUAL",
  명상: "SPIRITUAL",
  의식: "SPIRITUAL",

  // 개인
  personal: "PERSONAL",
  diary: "PERSONAL",

  // 사진
  사진: "PHOTO",
  album: "PHOTO",

  // 웹 역사
  "web2.0": "WEB-HISTORY",
  "2000s": "WEB-HISTORY",
  "web-history": "WEB-HISTORY",

  검색창: "PLUGINS",
  플러그인: "PLUGINS",
};

export function canonicalTag(tag: string): string {
  return tagAlias[tag] ?? tag;
}

export const canonicalTags = new Set(Object.values(tagAlias));
