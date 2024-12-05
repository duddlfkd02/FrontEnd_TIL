// 배열과 객체 구조 분해 할당

// 구조분해할당 : 배열이나 객체의 요소 및 프로퍼티들을 분해해서 그 값들을 각각의 변수에 할당

// 1. 배열의 구조 분해 할당

// 1-1. 기본 변수 할당
let colors = ["green", "blue", "purple"];

let c1 = colors[0]; // "green"
let c2 = colors[1]; // "blue"
let c3 = colors[2]; // "purple"

console.log(c1); // "green"
console.log(c2); // "blue"
console.log(c3); // "purple"

// 1-2. 구조분해 사용하기
let colors = ["green", "blue", "purple"];
let [c1, c2, c3] = colors;

console.log(c1); // "green"
console.log(c2); // "blue"
console.log(c3); // "purple"

// 2. 선언 분리 할당 : 변수의 선언을 분리해서 배열의 값을 할당하는 방법
let c1, c2, c3;
[c1, c2, c3] = ["green", "blue", "purple"];

console.log(c1); // "green"
console.log(c2); // "blue"
console.log(c3); // "purple"

// 2-1. 배열의 길이보다 더 많은 변수, 배열의 길이보다 더 적은 변수들에 배열의 값 할당하기
// 2-1-1. 더 적은 경우
let c1, c2;
[c1, c2] = ["green", "blue", "purple"];

console.log(c1); // "green"
console.log(c2); // "blue"

// 2-1-2. 더 많은 경우
let c1, c2, c3, c4;
[c1, c2, c3, c4] = ["green", "blue", "purple"];

console.log(c1); // "green"
console.log(c2); // "blue"
console.log(c3); // "purple"
console.log(c4); // undefined  -> 변수에 할당될 값이 없기 때문!

// 직접 해당 변수에 기본값 지정해주기 (undefined 싫은 경우)
[c1, c2, c3, c4 = "yellow"] = ["green", "blue", "purple"];
console.log(c4); // "yellow"

// 2-2. 변수 값 교환하기
// 2-2-1. 구조분해 X, 변수 값 바꾸는 코드
let a = 10;
let b = 5;
let tmp; // 임시 변수

console.log(a, b);

tmp = a;
a = b;
b = tmp;

console.log(a, b);

// 2-2-2. 구조분해 O , 변수 값 바꾸는 코드
let c1, c2, c3, c4;
[c1, c2, c3, c4 = "yellow"] = ["green", "blue", "purple"];

let a = 10;
let b = 5;

[a, b] = [b, a];

console.log(a); // 5
console.log(b); // 10
