// 함수 선언과 함수 호출

const add = (a, b) => a + b;

// 함수 선언
function calculator(func, a, b) {
  return func(a, b);
}

add(3, 5); // 8
calculator(add, 3, 5); // 8

const onClick = () => (event) => {
  console.log("hello");
};

// const onClick = () => {
//   return () => {
//     console.log("hello");
//   };
// };

// 함수의 호출은 return 값으로 대체하기
calculator(add(), 3, 5);
document.querySelector("#header").addEventListener("click", add()); // -> undefined + undefined 가 됨 ❌
document.querySelector("#header").addEventListener("click", onClick()); // onClick 이라는 함수 실행 "hello" ✅
