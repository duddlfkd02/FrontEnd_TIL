/**
 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;
// type StringNumberSwitch<T> = [T] extends [number] ? string : number; ⭐️ 분산 방지

let a: StringNumberSwitch<number>; // string

let b: StringNumberSwitch<string>; // number

let c: StringNumberSwitch<number | string>; // string | number
// StringNumberSwitch<number>
// StringNumberSwitch<string>
// -> 이렇게 두 개로 나뉘어서 결과값을 유니온 타입으로 묶여서 결과 나옴

let d: StringNumberSwitch<boolean | number | string>;
// StringNumberSwitch<boolean> -> number |
// StringNumberSwitch<number> -> string |
// StringNumberSwitch<string> -> number

/**
 예제
 */
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// (T1 | T2 | T3) extends U ? X : Y
// (T1 extends U ? X : Y) | (T2 extends U ? X : Y) | (T3 extends U ? X : Y)

// step 1️⃣
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

// step 2️⃣
// number
// never
// boolean

// step 3️⃣
// number | never | boolean
// ⚠️ never는 생략된다.
// 최종 : number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// step 1️⃣
// Extract<number, string>
// Extract<string, string>
// Extract<boolean, string>

// step 2️⃣
// never
// string
// never

// step 3️⃣
// never | string | never
// ⚠️ never는 생략된다.
// 최종 : string
