// number
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
// ❌ num1 = 'hello';
// ❌ num1 = toUpperCase();
// string
let str1 = "Hello";
let str2 = `hello`;
let str3 = `hello ${str1}`;
// ❌ str1 = tofixed();
// null
let null1 = null;
// undefined
let unde1 = undefined;
// let numA: number = null;
// ⭐️ 원래는 오류가 발생하지만 tsconfig에서 "strictNullChecks": false, 하면 오류 사라짐
// 리터럴 타입
let numA = 10;
let strA = "hello";
let boolA = true;
export {};
