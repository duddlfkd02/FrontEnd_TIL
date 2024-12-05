// 호이스팅
// 함수 호이스팅

connectStrings("study", "hoisting");

function connectStrings(str1, str2) {
  console.log(str1 + str2);
}

// 변수 호이스팅
// console.log(num1)
// let num1 = 123;

console.log(num2); // undefied
var num2 = 123;

/* var num2
console.log(num2); // undefied
num2 = 123;


⭐️  1) 변수의 선언문만을,
    2) 스코프의 최상단으로 끌어올린 다음, 
    3) 다음 코드를 실행하고, 
    4) 변수에 초기값을 할당
*/

// TDZ : Temporal Dead Zome
// 변수를 사용하는 것을 허용하지 않는 공간

// var 키워드와는 다르게 let과 const 키워드로 선언된 변수는, 변수 스코프의 가장 위쪽에서 변수의 초기화가 완료될 때까지 TDZ라는 공간에 있다.
/* let과 const 키워드는 호이스팅이 발생하지 않는 것이 아니라, 
⭐️ 변수의 초기화가 완료될 때까지 TDZ라는 공간에 있기 때문에 호이스팅이 발생하지 않는 것처럼 보이는 것 */
