// <<Scope>>

// 1. 전역변수
let globalNum = 100; // 🌏 전역변수(외부변수) -> 아래 모두 접근 가능함!

function testFunc() {
  console.log(globalNum);
}

testFunc();
console.log(globalNum); // 100

// 2. 지역변수
let globalNum2 = 100;

function testFunc() {
  let innerNum = 50; // 🗺️ testFunc 내부에서 선언된 변수
  console.log(globalNum2);
  console.log(innerNum);
}

testFunc();

console.log(globalNum2);
console.log(innerNum);

// 1 + 2
let global = "나는 전역 변수입니다";

function outerFunction() {
  let outer = "나는 외부 함수의 변수입니다";

  function innerFunction() {
    let inner = "나는 내부 함수의 변수입니다";
    console.log(global); // ✅
    console.log(outer); // ✅
    console.log(inner); // ✅
  }

  innerFunction();
  console.log(global); // ✅
  console.log(outer); // ✅
  console.log(inner); // ❌
}

outerFunction();

// 3. 블록 스코프
function print() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i); // ❌
  // i 는 for문 스코프 안에 선언되어 있기 때문에 외부에서 i에 접근할 수 없다.
}

print();

// 4. 함수 스코프
function print() {
  for (var i = 0; i < 10; i++) {
    // let -> var
    console.log(i);
  }
  console.log(i); // ✅
  // let -> var 키워드로 변경하면 "함수" 스코프이기 때문에 아래 콘솔이 i에 접근 가능해진다.
}

// let,const : 블록스코프 | var : 함수스코프
