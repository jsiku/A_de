---
archived: true
type: post
title: Blogger에서 navbar 제거
date: 2009-05-05 09:49:00 +0900
author: Siku
draft: false
tags:
  - blogger
  - navbar
  - 블로그
slug: remove-blogger-navbar
description: Blogger 템플릿에서 상단 navbar를 제거하는 방법
cover: ../../assets/media/web-abstract-01.svg
---

- sns.jsiku.com(폐쇄)에서 옮김

Blogger 도움말에서 **navbar 제거**를 검색해 보면 정말 많은 글이 올라와 있습니다. 많은 사람들이 이 navbar를 제거하고 싶어 하는데, 아마 각자의 블로그 디자인과 맞지 않아 거부감이 있기 때문일 것입니다.

navbar는 **레이아웃 → HTML 편집**에서 CSS 부분에 다음 코드를 삽입하면 제거할 수 있습니다.

```css
#navbar,
#navbar-iframe {
  height: 0px;
  visibility: hidden;
  display: none;
}
```
