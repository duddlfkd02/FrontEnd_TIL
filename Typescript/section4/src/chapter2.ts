/**
 함수 타입의 호환성
 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은지 판단
 기준 1️⃣. 반환값의 타입이 호환되는가?
 기준 2️⃣. 매개변수의 타입이 호환되는가?
 */

// 기준 1️⃣ . 반환값의 타입이 호환되는가?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // ✅
// b = a; ❌ 다운캐스팅 (number literal -> number)

//기준 2️⃣. 매개변수의 타입이 호환되는가?
// 2-1. 매개변수 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;
//type D = (value: number) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;  ❌ 매개변수 일 때는 업캐스팅이면 허용이 되지 않음
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; ❌
dogFunc = animalFunc;

// ✏️ animalFunc = dogFunc 를 함수로 이해하기
let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color); -> Animal 타입에는 color가 없기 때문에 error
};

// ✏️ dogFunc = animalFunc 를 함수로 이해하기
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수 개수가 다를 때
// ⭐️ 타입의 조건이 동일할 때만 가능
// ⭐️ 개수가 적은 타입이 개수가 많은 타입으로 들어가는 건 ok / 반대는 no!

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; ❌
