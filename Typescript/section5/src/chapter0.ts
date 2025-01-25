/*
 interface
 */

interface Person {
  name: string;
  age?: number;
  // sayHi: () => void; 함수 타입 표현식
  sayHi(): void; // -> 호출 시그니처
  sayHi(a: number, b: number): void; // -> 오버로딩
  // sayHi: (a: number, b: number) => void;  ❌ 함수 타입 표현식으로 메서드의 타입을 정의하면 메서드의 오버로딩 구현이 불가능
}

const person: Person = {
  name: "김ㅇㅇ",
  sayHi: function () {
    console.log("Hi");
  },
};

person.sayHi();
person.sayHi(1, 2);

/* ⚠️ Union 또는 Intersection 타입을 정의할 수 없다.

interface Person {
  name: string;
  age: number;
} | number ❌

인터페이스로 만든 타입을 Union 또는 Intersection으로 이용해야 한다면, 타입 별칭과 함께 사용하거나 타입 주석에서 직접 사용해야한다.

type Type1 = number | string | Person; ✅
type Type2 = number & string & Person; ✅

const person: Person & string = {
  name: "이정환",
  age: 27,
};



*/
