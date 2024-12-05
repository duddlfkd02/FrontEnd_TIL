// 📝 함수 표현식과 화살표 함수
// 호이스팅과 관련이 있으므로 같이 알아두기!

// 💡 1. 기존에 작성했던 함수 모습
function func() {
  console.log("hello javascript");
}

// 💡 2. 화살표 함수
const func = () => {
  console.log("hello javascript");
};
// 화살표 함수는 "변수에 함수를 할당하는 방식"으로 작성한다.

// -----------------------------------------------

// 💡 함수 선언식
hoisted();

function hoisted() {
  console.log("hoisting");
} //hoisting

/* ⭐️⭐️⭐️ 
함수 선언식으로 선언된 함수는 "함수 전체가 호이스팅" 한다.
-> 함수를 선언하기 전에 호출해도 오류 발생 ❌ 
*/

// 💡 함수 표현식
hoisted();

const hoisted = function () {
  console.log("hoisting");
}; //Uncaught ReferenceError:
//Cannot access 'hoisted' before initialization

/* ⭐️⭐️⭐️ 
함수 표현식은 변수에 함수를 할당하기 때문에 호이스팅이 발생하면
변수의 호이스팅 방식처럼 변수 선언 부분과 할당 부분을 나누고 선언부만!! 호이스팅된다. 
*/

/* 🚧 위 코드를 호이스팅 과정으로 다시 작성해보기

const hoisted; // TDZ 머무르게 됨 (함수 초기화 되기 전까지)

hoisted(); 

function () {
  console.log("hoisting");
};
*/

// -----------------------------------------------

// 💡 화살표 함수
const add = (a, b) => a + b;
console.log(add(10, 20));
// 장점 : return 값이 한 줄 일 때 return, {} 생략가능

// 💡 콜백함수
// : 다른 함수에 매개 변수로 넘겨준 함수

const printResult = (a, b) => {
  let result = a + b;
  console.log("결과:", result);
};

const doubleResult = (a, b) => {
  let result = a + b;
  console.log("결과에 2를 곱한 값:", result * 2);
};

printResult(5, 3);
doubleResult(5, 3);

// 중복되는 부분을 calculate 라는 함수로 만들기
const calculate = (a, b, callback) => {
  // ✅ 매개변수로 callback 추가
  let result = a + b;
  callback(result);
};

const printResult = (result) => {
  // ✅ result 변수를 넣어 호출하는 코드 작성
  console.log("결과:", result);
};

const doubleResult = (result) => {
  // ✅ result 변수를 넣어 호출하는 코드 작성
  console.log("결과에 2를 곱한 값:", result * 2);
};

calculate(5, 3, printResult);
calculate(5, 3, doubleResult);
// ⭐️⭐️⭐️ calculate 함수를 호출할 때, 인수로 특정 함수를 전달하고, calculate 함수에서는 매개변수로 전달받은 함수를 호출해서 코드를 알맞게 변경
// ⭐️⭐️⭐️ 이렇게 매개변수로 전달 받은 함수를 "콜백 함수" 라고 부름

// 💡 화살표 함수 + 콜백함수 적용
const testFunc = (callback) => {
  callback();
};

testFunc(() => {
  console.log("콜백 함수 테스트");
});

/* ⭐️⭐️⭐️
1. testFunc는 함수 표현식으로 작성되었고, 이는 callback 이라는 매개변수를 가진다. (이 매개변수는 함수이다.)
2. testFunc를 호출하면서, 화살표 함수 () => { console.log('콜백 함수 테스트'); }를 callback으로 전달
3. testFunc의 내부 로직에서 callback()을 실행.
이 callback은 전달받은 화살표 함수이므로, 화살표 함수 내부의 코드(console.log('콜백 함수 테스트');)가 실행
*/
