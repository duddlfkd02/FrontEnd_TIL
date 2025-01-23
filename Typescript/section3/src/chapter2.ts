// 1️⃣ Unknown 타입

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // 다운캐스팅이라 안 됨 ❌
  // let num:number = unknownVar;
  // let str:string = unknownVar;
  // let bool:boolean = unknownVar;
}

// 2️⃣ Never 타입 -> 공집합, 아무런 값을 넣을 수 없을 때

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운캐스팅이라 안 됨 ❌
  // let never1:never = 10;
  // let never2:never = "string";
  // let never3:never = true;
}

// 3️⃣ Void 타입
// void 타입은 undefined 타입의 슈퍼타입이다!
function voidExam() {
  function voidFunc(): void {
    console.log("Hi");
    // return undefined
  }
  let voidVar: void = undefined;
}

// 4️⃣ Any 타입 -> 타입계층도를 완전히 무시해버리는 치트키
// 본인 스스로가 다운캐스팅을 해도, 다운 캐스팅을 당해도 오류가 발생하지 않는다.

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar;
  // neverVar = anyVar; ❌
  // never 타입은 순수한 공집합이기 때문에 any 타입일지라도 다운 캐스팅이 되지 않는다.
}
