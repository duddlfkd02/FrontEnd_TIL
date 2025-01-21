// any
// 특정 변수의 타입을 확실히 모를 때
// 런타임 될 때 오류 알 수 있음, 따라서 최대한 사용 지양하기!❌

let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.tofixed();

let num: number = 10;
num = anyVar;

// unknown
// any 타입과 비슷하지만 비교적 안전한 타입
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// ❌ unknown 타입의 값은 어떤 타입의 변수에도 저장할 수 없다.
// ❌ unknown 타입의 값은 어떤 연산에도 참여할 수 없으며, 어떤 메서드도 사용할 수 없다.
// num = unknownVar;
// unknownVar.toUpperCase();

if (typeof unknownVar === "number") {
  // 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
  unknownVar * 2;
}
