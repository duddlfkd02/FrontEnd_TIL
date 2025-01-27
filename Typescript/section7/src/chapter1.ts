/**
 사례 1️⃣
 제네릭 타입변수를 여러 개 사용하는 것도 가능하다.
 매개변수로 받는 두 인자의 값이 다를 경우 사용
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

/**
 사례 2️⃣
 다양한 배열 타입을 인수로 받는 제네릭 함수
 */

function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// number 타입

let str = returnFirstValue([1, "hello", "mynameis"]);
// number | string

// ⭐️ 반환값의 타입을 배열의 첫번째 요소의 타입이 되도록 하려면 -> 튜플, 나머지 파라미터 이용
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  // T 는 arr에서 number
  return data[0];
}

let arr = returnFirstValue2([1, "hello", "mynameis"]);
// number

/**
 사례 3️⃣
 extends 키워드로 조건 부여하기
 */

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength("12345"); // 5
let var3 = getLength({ length: 10 }); // 10
// let var4 = getLength(10); ❌ length 프로퍼티를 포함하지 않아 오류 발생
