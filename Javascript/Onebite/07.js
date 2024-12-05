// 배열과 객체 구조 분해 할당

// 1. 객체의 구조 분해 할당

// 1-1. 기본 할당 : 객체의 구조 분해 할당은 대괄호가 아닌, 중괄호를 사용
let colors = {
  c1: "green",
  c2: "blue",
  c3: "purple",
};

let c1 = colors.c1;
let c2 = colors.c2;
let c3 = colors.c3;

console.log(c1); // green
console.log(c2); // blue
console.log(c3); // purple

// 1-2. 객체 구조분해 할당 방식
let { c1, c2, c3 } = colors;
// "key 값"을 기준으로 객체를 분해해 변수에 할당한다.
// 🔍 잠깐! 배열은 어떻게 했더라? -> "인덱스 순서대로" 변수에 할당

// 2. 새로운 변수 이름으로 할당

// 2-1-1. 구조분해 X, 새로운 변수에 할당하기
let colors = {
  c1: "green",
  c2: "blue",
  c3: "purple",
};

// ✨ 새로운 변수에 할당
let color1 = colors.c1;
let color2 = colors.c2;
let color3 = colors.c3;

console.log(color1); //green
console.log(color2); //blue
console.log(color3); //purple

// 2-1-2. 구조분해 코드로 변경하기
let { c1: color1, c2: color2, c3: color3 } = colors;
// colors 객체의 c1, c2, c3 각각 color1, color2, color3 로 변경하겠다 라는 의미

// 3. 기본값 설정
// 3-1. 변수의 수가 객체 프로퍼티의 수보다 클 경우
let colors = {
  c1: "green",
  c2: "blue",
  c3: "purple",
};
let { c1, c2, c3, c4 } = colors;

console.log(c1); // green
console.log(c2); // blue
console.log(c3); // purple
console.log(c4); //undefined

// 직접 값 할당하기
let colors = {
  c1: "green",
  c2: "blue",
  c3: "purple",
};
let { c1, c2, c3, c4 = "yellow" } = colors;

console.log(c1); // green
console.log(c2); // blue
console.log(c3); // purple
console.log(c4); //yellow
