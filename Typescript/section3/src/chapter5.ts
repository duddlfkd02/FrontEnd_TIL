/*
타입 추론
*/

let a = 10; // number

let b = "hi"; // string

let c = {
  id: 1,
  name: "김ㅇㅇ",
  profile: {
    nickname: "취준생",
  },
  urls: ["https://abc.com"],
};
// 모두 프로퍼티가 있는 객체 타입으로 추론함 (*초기값을 기준으로)

let { id, name, profile } = c;

let [one, two, three] = [1, "문자", true];

function func(message = "hello") {
  return "hello"; // 함수는 반환값을 기준으로 추론
}

// any 타입 진화
let d; // 암묵적 any
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
// d.toFixed() ❌

const num = 10;
const str = "hello";

let arr = [1, "string"];
