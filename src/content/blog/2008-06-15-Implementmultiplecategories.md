---
archived: true
type: post
title: 다중 카테고리 구현
date: 2008-06-15T12:15:46+09:00
slug: multi-category-workaround
tags:
  - 텍스트큐브
  - 블로그
draft: false
---

텍스트큐브가 워드프레스처럼 **다중 카테고리**를 지원하지 않는 것은 잘 알려져 있다.

다중 카테고리가 되면 훨씬 편할 텐데
아쉽게도 기본 기능으로는 지원되지 않는다.

플러그인을 만들 실력도 부족하고
그래서 결국 **수동으로 구현**하기로 했다.

전체 과정은 다음과 같다.

1. 모든 포스트의 **태그 수집**
2. **태그 트리 구조 작성**
3. **사이드바 element 추가**
4. 완료

---

# 1. 태그 수집

글이 많아지기 전에 미리 정리하는 것이 효율적이라고 생각했다.

트리형 다중 카테고리를 만들려면
먼저 어떤 태그들이 존재하는지 조사해야 한다.

예를 들어 블로그에 있는 태그들은 대략 다음과 같다.

- IT
- 블로그
- 브라우저
- Ubuntu
- MMA
- UFC
- Dream4
- 자전거
- 여행
- 운동
- 돈
- 리더십
- 책 이야기
- 리뷰
- 등등

이 태그들을 기반으로
**큰 분류 구조**를 만든다.

---

# 2. 트리 구조 만들기

우선 글의 성격을 생각해 보았다.

내 글들은 크게 보면

- 어떤 것에 대한 **소감**
- 어떤 것을 **만드는 과정**

두 가지 성격이 있다.

그래서 처음에는 다음과 같이 생각했다.

- siku's reviews
- siku's contents

하지만 실제로는 거의 모든 글이 소감이라
이 구분은 의미가 없었다.

그래서 **관심 대상 기준**으로 분류하기로 했다.

예를 들어 내가 관심 있는 주제들은 다음과 같다.

- 돈
- 책
- MMA
- 자전거
- 여행
- 운동
- 카메라
- 음식
- 인물
- 인터넷
- 소프트웨어
- 블로그
- 경제경영
- 투자
- 기업
- 학교
- 언어

이것들을 정리하여 트리 구조로 만들었다.

---

## 1차 분류

- IT생활
- 자전거
- 여행
- 운동
- 도서
- 인물
- 돈
- 생각
- gallery

---

## 제외된 항목

- **언어**
  → 앞으로 글을 많이 쓸 계획이 없어 제외

- **경제경영 / 투자 / 부동산**
  → 아직 글 수가 적어 **돈** 카테고리로 통합

- **학교 / 기업**
  → **조직** 성격이지만 글 수가 적어 제외

- **AV 관련 글**
  → 민감한 주제라 분류에서 제외
  → 필요하면 가끔 언급

---

## 미분류

1~7에 속하지 않는 글들은
**미분류**로 처리하기로 했다.

2차 분류는 글이 더 늘어나면 만들 계획이다.

---

# 3. 사이드바 수정

드롭다운 카테고리를 만들기 위해
사이드바에 다음 코드를 추가했다.

```html
<s_sidebar_element>
  <!-- Author page -->
  <div id="tagcategory" class="module">
    <h3>Category-tag</h3>
    <select onchange="Go_URL(this);">
      <option value="">---------- Select Category ----------</option>
      <option value="/siku/category">글목록 전체보기</option>
      <option value="/siku/tag/IT생활">IT생활</option>
      <option value="/siku/tag/자전거">자전거</option>
      <option value="/siku/tag/여행">여행</option>
      <option value="/siku/tag/운동">운동</option>
      <option value="/siku/tag/도서">도서</option>
      <option value="/siku/tag/인물">인물</option>
      <option value="/siku/tag/돈">돈</option>
      <option value="/siku/tag/생각">생각</option>
      <option value="/siku/tag/album">gallery</option>
      <option value="/siku/tag/미분류">미분류</option>
    </select>
  </div>
</s_sidebar_element>
```

마지막 작업

그리고 마지막으로 해야 할 일은 단 하나.

각 글에 태그를 입력하는 노가다.
