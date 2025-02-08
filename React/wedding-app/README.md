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
