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
