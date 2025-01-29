/**
 Exclude<T, U>
 */

type Exclude<T, U> = T extends U ? never : T;
// 1단계
// Exclude <string, boolean>
// Exclude <boolean, boolean>

// 2단계
// string
// never

// 3단계
// string 최종

type A = Exclude<string | boolean, boolean>; // string

/**
 Extract<T, U>
 */

type Extract<T, U> = T extends U ? T : never;
// 1단계
// Extract <string, boolean>
// Extract <boolean, boolean>

// 2단계
// never
// boolean

// 3단계
// boolean 최종

type B = Extract<string | boolean, boolean>; // boolean

/**
 ReturnType<T>
 */

function funcA() {
  return "hi";
}

function funcB() {
  return 20;
}

type ReturnType<T extends (...arg: any) => any> = T extends (
  ...arg: any
) => infer R
  ? R
  : never;

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;
