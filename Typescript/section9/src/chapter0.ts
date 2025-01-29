/**
 조건부 타입
 */

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 제네릭과 조건부 타입
 */
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string
let varB: StringNumberSwitch<string>; // number

// 오버로드 시그니처로 해결
function removeSpaces<T>(text: T): T extends string ? string : undefined; // 오버로드
function removeSpaces<T>(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("Hi Im Hayoung");
result.toUpperCase();

let result2 = removeSpaces(undefined);
