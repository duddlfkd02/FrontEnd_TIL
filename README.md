# Trip Wiki 코드 복습 (일부만)

## 파일 목록 및 함수 복습

**✅ 구현 시 헷갈리거나 오류가 있던 코드를 중점으로 정리**

<br />

### 1. server / server.js

`express` 를 사용한 가상 서버
브라우저 실행 전 `node server/server.js` 터미널에 작성하여 실행
(http://localhost:3000/) 주소로 연결

  <br />

### 2. index.html / index.js

css, js 파일 작성, `app` 이름의 `div` 태그에 index.js 데이터를 넣어 보여주는 SPA 방식으로 페이지 구현

index.js 는 App.js의 함수들을 불러오고 `app` 태그 안에 데이터를 넣어줌
(App.js 파일이 메인 기능을 구현하는 핵심 파일⭐️)

<br />

### 3. App.js 코드 정리

`App.js` : 이 프로젝트의 핵심 javascript 로직이 있는 script 파일

<br />

#### 3-1. 사용할 state 정의

```js
this.state = {
  startIndex: 0,
  sortBy: getSortBy(),
  searchWord: getSearchWord(),
  region: window.location.pathname.replace("/", ""),
  cities: "",
  currentPage: window.location.pathname,
};
```

- React에서 useState로 상태값 정해주는 것과 같은 역할한다고 생각하기.
- startIndex : 도시 리스트 개수
- sortBy : 정렬 기준
- searchWord : 검색어
- region : 나라명
- cities : 나라의 도시
- currentPage : 현재 페이지를 담는 변수 (페이지 이동 시 사용)

<br />

#### 3-2. 조건부 렌더링 (페이지 이동)

```js
const render = async () => {
  const path = this.state.currentPage;
  $app.innerHTML = "";

  if (path.startsWith("/city/")) {
    const cityId = path.split("/city/")[1];
    renderHeader();
    renderCityDetail(cityId);
  } else {
    renderHeader();
    renderRegionList();
    renderCityList();
  }
};
```

`"/city"` 를 기준으로 페이지 확인 후 조건부 렌더링 구현

<img width="299" alt="스크린샷 2024-12-16 오후 12 04 48" src="https://github.com/user-attachments/assets/37cc2ddd-08c6-4df3-accb-863ca56d0f06" />

<br />

`path.split("/city/")[1];` 코드 사용 방식
: `split` 메서드로 사용해서 url `("나눌 기준")` 을 나눈 후 `index` 의 데이터를 사용

<br />

#### 3-3. 페이지 앞 뒤 이동 : "popstate" 사용하기

**`popstate` 이벤트** : `pushState` 또는 `replaceState`로 **탐색 기록이 변경되었을 때**, 뒤로 가기/앞으로 가기 버튼을 클릭하면 `popstate` 이벤트가 발생한다.

```js
window.addEventListener("popstate", async () => {
  const urlPath = window.location.pathname;

  const prevRegion = urlPath.replace("/", "");
  const prevSortBy = getSortBy();
  const prevSearch = getSearchWord();
  const prevStartIndex = 0;
  const prevPage = urlPath;
  const prevCities = await requestData(
    prevStartIndex,
    prevRegion,
    prevSortBy,
    prevSearch
  );

  this.setState({
    ...this.state,
    startIndex: prevStartIndex,
    sortBy: prevSortBy,
    region: prevRegion,
    searchWord: prevSearch,
    cities: prevCities,
    currentPage: prevPage,
  });
});
```

1.  `const urlPath = window.location.pathname;` 에서 탐색 기록 변경 확인
2.  `popstate` 이벤트 발생
3.  `prev~` 변수에 할당된 페이지 데이터와 현재 페이지 데이터로 각각 앞/뒤 이동

<br />

#### 3-4. getSortBy() / getSearchWord()

`window.location.search` : 브라우저의 현재 URL에서 `"쿼리 문자열(Query String)"을 반환`하는 속성

- 브라우저의 현재 URL에서 ?로 시작하는 쿼리 문자열 부분을 반환
- 반환값: 문자열(String). URL의 ? 이후의 모든 텍스트를 포함

**예시코드**

```js
// 현재 URL: http://example.com?page=1&sort=asc
console.log(window.location.search);
// 출력: "?page=1&sort=asc"
```

URL의 쿼리 문자열을 업데이트하려면 브라우저의 `history.pushState` 또는 `history.replaceState`를 사용

**getSearchWord() 코드**

```js
const getSearchWord = () => {
  if (window.location.search && window.location.search.includes("search=")) {
    return window.location.search.split("search=")[1];
  }
  return "";
};
```

1.  `"search="` 와 일치하는 값이 있는지 `window.location.search` 이벤트로 확인
2.  있다면 `split` 메서드로 나눈 후 1번 `index` 의 값 반환하여 사용

<br />

### 다른 location 속성

| 속성                     | 설명                               | 예시 (URL: http://example.com:8080/path?name=John#section) |
| ------------------------ | ---------------------------------- | ---------------------------------------------------------- |
| window.location.href     | 전체 URL을 반환                    | "http://example.com:8080/path?name=John#section"           |
| window.location.search   | URL의 쿼리 문자열 부분을 반환      | (? 포함) "?name=John"                                      |
| window.location.pathname | 도메인 이후의 경로를 반환          | "/path"                                                    |
| window.location.hash     | URL의 해시(프래그먼트) 부분을 반환 | (# 포함) "#section"                                        |
| window.location.hostname | 호스트 이름(도메인)만 반환         | "example.com"                                              |
| window.location.port     | 포트 번호를 반환                   | (포트가 없으면 빈 문자열) "8080"                           |
