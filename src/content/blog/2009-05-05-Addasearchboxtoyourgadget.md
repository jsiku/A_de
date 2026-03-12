---
archived: true
type: post
title: 가젯에 검색창 달기
date: 2009-05-05 14:03:00 +0900
author: Siku
draft: false
tags:
  - 검색창
  - blogger
  - 웹
slug: add-search-box-to-gadget
description: 블로거 가젯에 검색창을 추가하는 방법
cover: ../../assets/media/web-abstract-01.svg
---

- sns.jsiku.com(폐쇄)에서 옮김

`navbar`를 제거하면 블로그 내부의 검색 기능을 사용할 수 없게 됩니다. 이 때문에 불편을 느끼는 경우가 많습니다.

가젯 목록에서 검색창을 찾기도 어렵기 때문에 **직접 코드를 입력해 가젯을 추가하는 방법**을 사용할 수 있습니다.

## 방법

가젯 추가 → **HTML / Javascript** 선택

다음 코드를 입력합니다.

```html
<form id="searchThis" action="/search" style="display:inline;" method="get">
  <input id="searchBox" name="q" type="text" />
  <input id="searchButton" value="Find" type="submit" />
</form>
```

참고

위 코드에서 value 값을 수정하면

버튼 텍스트

입력창 표시 문구

등을 원하는 형태로 변경할 수 있습니다.
