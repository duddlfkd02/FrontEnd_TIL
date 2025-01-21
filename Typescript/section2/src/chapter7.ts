// void
// 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

// never
// 불가능한 타입

function func3(): never {
  while (true) {}
  // 무한 루프를 돌기 때문에 아무런 값도 반환할 수 없다. -> 반횐이 불가능한 경우
}

function func4() {
  throw new Error();
  // 의도적으로 오류를 발생시키는 함수도 never 타입으로 반환값 타입을 정의
}

// ==========================================================
/* 1️⃣ void 내용 정리
아무런 값도 반환하지 않는 함수의 반환값 타입을 정의할 때 사용

❌ void 타입의 변수에는 undefiend 이외의 다른 타입의 값은 담을 수 없다.
(* void 타입이 undefiend 타입을 포함하는 타입이기 때문)
  let a: void;
  a = undefined;

  하지만 tsconfig.json에 엄격한 null 검사(strictNullChecks) 옵션을 해제(False)로 설정하면, void 타입의 변수에 null값을 할당 가능
  let a: void;
  a = undefined;
  a = null; ✅
*/

/* 2️⃣ never 내용 정리
함수가 어떠한 값도 반환할 수 없는 상황일 때 해당 함수의 반환값 타입을 정의할 때 사용

❌ 변수의 타입을 never로 정의하면 any를 포함해 그 어떠한 타입의 값도 이 변수에 담을 수 없다.
    let anyVar: any;
    (...)

    let a: never;
    a = 1;
    a = null;
    a = undefined;
    a = anyVar;
*/
