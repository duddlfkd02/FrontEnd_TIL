/**
 제네릭
 <T>
 T : 타입 변수 -> 함수 이름 뒤에 타입 변수 선언
 타입 변수와 함께 여러 타입의 값을 인수로 받아서 범용적으로 쓸 수 있는 함수 : 제네릭 함수
 타입 변수에 할당되는 타입은 함수를 호출할 때 인수에 따라서 결정된다.
 */

//제네릭 함수
function func<T>(value: T): T {
  return value;
}

let num = func(10); // T는 func 함수가 호출될 때 결정됨.

let bool = func(true);

let str = func("string");

let arr = func<[number, number, number]>([1, 2, 3]); // 튜플타입, 직접 명시 가능
