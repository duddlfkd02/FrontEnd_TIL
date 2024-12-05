// spread 와 rest

// spread : 배열의 요소 or 객체의 프로퍼티 값을 펼치는 역할

// 1. 객체
const toy = {
  type: "bear",
  price: 15000,
};

const blueToy = {
  // type: "bear", // 😭 toy랑 겹침
  // price: 15000,
  ...toy, // ✅ spread 적용
  color: "blue",
};

const yellowToy = {
  type: "bear", // 😭 toy랑 겹침
  price: 15000,
  color: "yellow",
};

// 2. 배열
const color1 = ["red", "orange", "yellow"];
const color2 = ["blue", "navy", "purple"];

const rainbow = [...color1, "green", ...color2];

console.log(rainbow);

/* ⭐️⭐️⭐️ 
spread 문법은 반복적인 부분을 ... 기호를 사용해 퍼뜨릴 수 있고 "순서에 상관없이", "여러 번 사용" 가능하다 
*/

// ----------------------------------------------------
// rest : "나머지 매개변수", 특정 부분들을 하나의 배열이나 객체로 묶는 문법

// 1.객체
const pinkToy = {
  type: "bear",
  price: 15000,
  color: "blue",
};

const { type, price, color } = pinkToy;

console.log(type);
console.log(price);
console.log(color);

// price, color 각각의 값이 아니라, 이들을 type 값을 제외한 나머지의 값으로 묶어 객체 형태로 출력하고 싶다면?
const pinkToy = {
  type: "bear",
  price: 15000,
  color: "blue",
};

const { type, ...rest } = pinkToy;

console.log(type);
console.log(rest);


// 💥 rest 사용 시 주의할 점
const {...rest, type} = pinkToy;
// 순서를 바꿔서 작성하면 오류가 발생한다.
// rest문법은 항상 "맨 마지막에 작성"해야한다.

// 2. 배열
const color = ["red", "orange", "yellow", "green"];
const [c1, c2, ...rest] = color;

console.log(c1);
console.log(c2);
console.log(rest);


// 3. 함수

//print 함수는 매개변수 6개를 받고 1,2번째 값을 제외한 나머지 매개변수를 배열에 담아 출력하게 하기
const print = (a, b, c, d, e, f) => {
  console.log([c, d, e, f]); // ❌ 비효율적임 (매개변수가 더 많아진다면?!)
};

print(1, 2, 3, 4, 5, 6);

// rest 사용하여 개선한 코드
const print = (a, b, ...rest) => {
  console.log(a);
  console.log(b);
  console.log(rest);
};

print(1, 2, 3, 4, 5, 6);


// ---------------------------------------------
// spread + rest 함께 사용하기

// 1) numbers라는 배열의 요소들을 print 함수의 파라미터로 넘겨, 매개변수의 값을 출력하는 print함수
const print = (a, b, c, d, e, f) => {
  console.log(a, b, c, d, e, f);
};

const numbers = [1, 2, 3, 4, 5, 6];


// 2) numbers 배열에는 1부터 6까지의 값을 넣어주고, print 함수는 이 6개의 요소들을 매개변수로 받아 출력하게 작성
// print 함수를 호출하고 인수로 numbers[0] 부터 numbers[5] 까지 넘겨주기
const print = (a, b, c, d, e, f) => {
  console.log(a, b, c, d, e, f);
};

const numbers = [1, 2, 3, 4, 5, 6];
print(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5]); // 💥 딱 봐도 개선 필요한 부분


// 3) rest / spread 문법으로 효율적이게 작성하기
const print = (...rest) => { // rest
  console.log(rest);
};

const numbers = [1, 2, 3, 4, 5, 6];
print(...numbers); // spread
