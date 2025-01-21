// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "programmer"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양하다면?
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "hello", true];

let user: [string, number][] = [
  ["김ㅇㅇ", 1],
  ["이ㅇㅇ", 2],
  ["박ㅇㅇ", 3],
  ["최ㅇㅇ", 4],
  //[5, "김오류씨"], // 타입오류 발생
];
