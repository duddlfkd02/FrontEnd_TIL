/*
 함수 타입 표현식
 */

type Operator = (a: number, b: number) => number;

const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operator = (a, b) => a - b;
const multiply: Operator = (a, b) => a * b;
const devide: Operator = (a, b) => a / b;

/*
  호출 시그니처 (콜 시그니처)
 */

type Operator2 = {
  (a: number, b: number): number;
  name: string;
};
const add2: Operator2 = (a, b) => a + b;
const sub2: Operator2 = (a, b) => a - b;
const multiply2: Operator2 = (a, b) => a * b;
const devide2: Operator2 = (a, b) => a / b;

add2(1, 2);
add2.name;

// ⭐️ 함수도 객체이기 때문에 호출 시그니처로 타입을 정의할 경우
// name 처럼 추가할 수 있고
// add2() 함수로 호출하거나, add2.name 처럼 프로퍼티에 접근할 수 있다.
