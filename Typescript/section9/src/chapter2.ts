/**
 infer
 조건부 타입 내에서 특정 타입만 추론해올 수 있는 기능
 T에서 받은 값이 참이 되도록 추론함
 추론할 수 없다면 거짓의 타입 추론
 */

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; // string
type B = ReturnType<FuncB>; // number
type C = ReturnType<number>; // never

/**
 예제
 */

type PromiseUnpack<T> = T extends infer R ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
type PromiseB = PromiseUnpack<Promise<string>>;
