패스트 캠퍼스 part1 실습

패키지 : yarn <br>
환경 : vite + react + typescript <br>
✏️ craco alias 사용해보기 -> Vite 사용으로 불필요<br>
✏️ scss 사용해보기<br>
✏️ date-fns 사용하여 날짜 , 달력 구현하기

---

### [date-fns](https://date-fns.org/)

- format : 주어진 형식으로 포맷된 날짜 문자열 반환
- parseISO : 주어진 문자열을 ISO 8601 형식으로 구문 분석하여 Date 인스턴스를 반환

  ```jsx
  const result = parseISO('2014-02-11T11:30:30')
  => Tue Feb 11 2014 11:30:30
  ```

- getDay : 주어진 날짜의 요일을 구하기

  ```jsx
  const result = getDay(new Date(2012, 1, 29))
  => 3
  ```

### [video 태그](https://developer.mozilla.org/ko/docs/Web/HTML/Element/video)

HTML < video > 요소는 비디오 플레이백을 지원하는 미디어 플레이어를 문서에 삽입한다.
< video > 또한 < img > 요소와 비슷하게, 표시하고자 하는 미디어로의 경로를 src 특성에 제공한다.

- autoplay : < video >태그 내부에 autoplay 속성이 존재한다면 비디오가 자동재생. 비활성화하려면 해당 속성을 완전히 제거해야함.
- controls : 소리 조절(volume), 동영상 탐색(seek), 일시 정지(pause)/재시작(resume)을 할 수 있는 컨트롤러를 제공한다.
- loop : 동영상 재생이 마친 후 자동으로 맨 처음으로 돌아감.
- muted : 비디오에 포함되어 있는 오디오의 기본 설정을 나타내는 속성. (설정 시 오디오 나오지 않음)
- poster : 사용자가 동영상을 재생하거나 탐색하기 전까지 출력되는 포스터 프레임 주소 (썸네일 같은 것)

```jsx
<video
  // autoPlay={true}
  muted={true}
  loop={true}
  controls={true}
  poster="/assets/poster.jpg"
>
  <source src="/assets/main.mp4"></source>
</video>
```

---

### scss에 믹스인 적용하기

- 믹스인은 여러 줄의 코드를 재활용할 수 있다. <br>

  선언할 때는 `@mixin` 이라고 선언하고 , 사용하는 곳에서는 `@include`를 사용하면 된다.

  ```scss
  // 🎨 사용 선언
  @mixin txt-content {
    text-align: center;
    line-height: 26px;
  }

  // 🎨 적용
  @import "../../scss/utils.scss";

  .container {
    @include txt-content; // ⭐️

    .ico-post {
      width: 20px;
      height: 20px;
      margin: 72px 0 8px;
    }
  }
  ```

---

# Kakao 지도 API 컴포넌트 적용하기

강의에서는 CRA + React 를 사용하였는데 나는 Vite를 쓰고 있어서 API를 불러오는 방식이나 환경변수 지정 규칙이 조금씩 달라서 수정하는 과정이 필요했다. <br>
Kakao 지도 API 를 사용하여 특정 위치에 마커를 표시하는 기능을 구현하면서 여러 오류들을 만나고 해결했는데 이 과정을 정리해두면 좋을 것 같았다.

## 01. 전체적인 코드 흐름

✏️ **기능 요약 및 흐름**

- kakao 지도 API를 `script` 태그를 이용하여 동적으로 불러오기
  <br> → **kakao API는 한 번만 로드하도록 체크할 것!**
- `mapContainer`의 `ref`를 이용해 지도 표시할 위치 지정하기 (`useRef` 훅 사용)
- 지도 API가 완전히 로드된 후 `window.kakao.maps.Map` 생성하기
- 주어진 위도/경도 (`location`) 정보를 사용하여 지도 중심 설정 후 마커 추가하기
- 지도 아래 `WayToCome` 컴포넌트를 사용해 대중교통 정보 표시하기

<br>

## 02. 발생한 문제와 해결 과정

### 👩🏻‍💻 Kakao 지도 API를 중복 로드하지 않도록 체크

```jsx
if (document.getElementById("kakao-map-script")) {
  console.log("Kakao 지도 API가 이미 로드되었습니다.");
  return;
}
```

🚨 **발생한 문제**

- Vite의 **HMR(Hot Module Replacement) 기능으로 인해 API가 여러 번 로드되는 문제**가 발생했다.

**✅ 해결 방법**

- `document.getElementById("kakao-map-script")`를 사용해 **스크립트가 이미 로드되었는지 확인 후, 새로운 로드를 막도록 처리**했다.

<br>

### 👩🏻‍💻 환경 변수 (`import.meta.env`) 적용 문제 해결

```jsx
const script = document.createElement("script");
script.id = "kakao-map-script";
script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
  import.meta.env.VITE_KAKAO_API_KEY
}&autoload=false`;
script.async = true;
document.head.appendChild(script);
```

🚨 **발생한 문제**

- `process.env.VITE_KAKAO_API_KEY`를 사용하여 API 키를 불러왔지만, **Vite에서는 환경 변수 사용 방식이 다름**
- `.env` 파일에서 환경 변수를 불러올 때 `process.env` 를 사용하는 CRA와 달리 **Vite는 `import.meta.env`를 사용**해야 한다.

**✅ 해결 방법**

- **Vite 공식문서**([Vite의 환경 변수와 모드](https://ko.vitejs.dev/guide/env-and-mode.html))를 참고하여 **`import.meta.env.VITE_KAKAO_API_KEY`로 변경**

- `script.async = true;`를 설정하여 **비동기 로딩**하여 UI 차단 방지

<br>

### 👩🏻‍💻 API 호출 문제 (`403 Forbidden`, `NotAuthorizedError`) 해결

**🚨 발생한 문제 (403 Forbidden 오류 발생)**

- Kakao Developers에서 도메인 등록을 하지 않아 `403 Forbidden` 오류가 발생하여 지도를 불러올 수 없었다.

✅ **해결 방법**

- Kakao Developers → 내 애플리케이션 → 플랫폼 → 웹 도메인 등록

```
http://localhost:5173  // 이 부분 오타있었음..!
http://127.0.0.1:5173
```

🚨 **발생한 문제**(`NotAuthorizedError` 오류 발생)

```jsx
{
	errorType: "NotAuthorizedError",
	message: "App(wedding) disabled OPEN_MAP_AND_LOCAL service."
}
```

- `403 Forbidden` 오류가 해결된 후 **"NotAuthorizedError"** 오류가 발생했다..ㅎ

이는 Kakao Developers에서 지도 API(OPEN_MAP_AND_LOCAL) 서비스를 활성화하지 않아서 생긴 문제였다.

**✅ 해결 방법**

- Kakao Developers → 내 애플리케이션 → [API 설정]으로 이동하여 상태를 `"ON"` 으로 바꿔 해결하였다.

<br>

### 👩🏻‍💻 지도 생성 시 `LatLng` 오류 해결 (`window.kakao.maps.load`)

```jsx
script.onload = () => {
  window.kakao.maps.load(() => {
    console.log("Kakao 지도 API 로드 완료!");

    if (mapContainer.current) {
      const position = new window.kakao.maps.LatLng(location.lat, location.lng);

      const options = {
        center: position,
        level: 3,
      };

      const map = new window.kakao.maps.Map(mapContainer.current, options);
      const marker = new window.kakao.maps.Marker({ position });

      marker.setMap(map);
    } else {
      console.error("mapContainer가 정의되지 않았습니다.");
    }
  });
};
```

```jsx
Map.tsx:37 Uncaught TypeError: window.kakao.maps.LatLng is not a constructor
    at script.onload (Map.tsx:37:26)
```

🚨 **발생한 문제 (`window.kakao.maps.LatLng is not a constructor` 오류 발생)**

- Kakao API가 **비동기 로딩되기 전에 `window.kakao.maps`를 호출하여 발생한 오류였다.**
- `window.kakao.maps.load(() => {})`가 없어서 **API가 완전히 로드된 후 실행된다는 보장이 없어 수정해줘야했다.**

✅ **해결 방법**

- **Kakao API가 자동으로 로드되지 않도록 `autoload=false`를 설정한 경우에는,**
  - API가 완전히 로드된 후 실행되도록 `window.kakao.maps.load(() => {...})` 사용!
- **`mapContainer.current`가 `null`이 아니어야 지도 생성이 가능하므로 체크 로직을 추가했다.**

<br>

**📚 참고 자료**

- [Vite의 환경 변수와 모드](https://ko.vitejs.dev/guide/env-and-mode.html)
- [Vite에서 환경변수 사용하기](https://serene-r.tistory.com/44)
- [CRA의 환경 변수와 모드](https://velog.io/@aseungbo/0929-Uncaught-ReferenceError-process-is-not-defined-error-muw77bbz)
