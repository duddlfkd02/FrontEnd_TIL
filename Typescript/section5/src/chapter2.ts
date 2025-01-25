/*
선언 합침
*/

interface Person {
  name: string;
}

interface Person {
  // name:number ❌ 충돌 ⭐️ 반드시! 동일한! 타입만 가능
  age: number;
}

const person: Person = {
  name: "",
  age: 10,
};

/**
 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
