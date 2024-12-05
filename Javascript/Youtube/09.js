// Closure
// 함수와 Lexical Environment 의 조합
// 함수가 생성될 당시의 외부 변수를 기억하고
// 생성 이후에도 계속 접근이 가능하다.

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add3 = makeAdder(3);
console.log(add3(2)); // 5

const add10 = makeAdder(10);
console.log(add10(5)); // 15
console.log(add3(1)); // 4

/* -------------------------------------------------------------- */

function makeCounter() {
  let num = 0; // 은닉화
  // -> 갑자기 99로 증가하는 등 console.log의 출력값 변경 불가

  return function () {
    return num++; // 내부함수가 외부함수를 참조 (num 값)
  };
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

// 비슷한 예제
function outer() {
  const outerVariable = "outer에서 왔어요!";

  function inner() {
    console.log(outerVariable); // outerVariable 에 접근 가능
  }

  return inner;
}

const innerFunction = outer(); // outer 함수 호출
innerFunction(); // 출력값 : "outer에서 왔어요!"

/* -------------------------------------------------------------- */
// ⭐️ 실제 사용 사례

// 1. 함수 내부 변수 캡슐화 : 변수에 직접 접근 X, 특정 메소드를 통해서만 조작하게 함
function createCounter() {
  let count = 0; // 외부에서 직접 접근 불가능

  return {
    increment() {
      count++;
      console.log(count);
    },

    decrement() {
      count--;
      console.log(count);
    },
  };
}

const counter2 = createCounter();
counter2.increment(); // 1
counter2.increment(); // 2
counter2.decrement(); // 1

// 2. 이벤트 핸들러에서 클로저 사용
function bindEvent(element, message) {
  element.addEventListener("click", () => {
    console.log(message);
  });
}

const button = document.querySelector("button");
bindEvent(button, "버튼 클릭!");

// 3. 반복문과 클로저

function createFunctions() {
  const examples = [];

  for (let i = 0; i < 3; i++) {
    examples.push(() => {
      console.log(i);
    });
  }

  return examples;
}

const examFunc = createFunctions();
examFunc[0](); // 0
examFunc[1](); // 1
examFunc[2](); // 2
