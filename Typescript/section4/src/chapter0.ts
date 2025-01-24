/*
  함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 설명하기
// 반환값을 기준으로 추론하기 때문에 결과값은 생략할 수 있다.

function func(a: number, b: number): number {
  return a + b;
}

/*
 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/*
 함수의 매개변수
 필수 매개변수, 선택적 매개변수
 ⭐️ 필수매개변수는 선택적 매개변수보다 앞에 작성해야한다.
 */
function introduce(name = "김ㅇㅇ", age: number, tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}
// tall이 선택적 매개변수라서 undefiend 일 수 있기 때문에
// 바로 + 10 을 하면 덧셈은 number타입에서만 가능하므로 오류가 발생한다.
// 따라서 조건문으로 타입가드를 만들어 안전하게 코드를 작성해야한다.

introduce("김ㅇㅇ", 23, 100);

introduce("김ㅇㅇ", 23);

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((element) => (sum += element));
}

getSum(1, 2, 3); //6
getSum(1, 2, 3, 4, 5); // 15
