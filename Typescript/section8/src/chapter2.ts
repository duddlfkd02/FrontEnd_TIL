/**
 keyof 연산자
 유니온 타입으로 만듦
 */

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

// ⚠️ keyof 연산자는 오직 타입에만! 적용할 수 있는 연산자이다.

const person: Person = {
  name: "김ㅇㅇ",
  age: 10,
};

// typeof

type Person2 = typeof person;

function getPropertyKey2(person: Person2, key: keyof typeof person) {
  return person[key];
}
