// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// ❌ num1 = 'hello';
// ❌ num1 = toUpperCase();

// string
let str1: string = "Hello";
let str2: string = `hello`;
let str3: string = `hello ${str1}`;

// ❌ str1 = tofixed();

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// let numA: number = null;
// ⭐️ 원래는 오류가 발생하지만 tsconfig에서 "strictNullChecks": false, 하면 오류 사라짐

// 리터럴 타입
let numA: 10 = 10;
let strA: "hello" = "hello";
let boolA: true = true;
