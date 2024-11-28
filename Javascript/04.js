let list = [
  "01. 들어가며",
  "02. JS의 역사",
  "03. 자료형",
  "04. 함수",
  "05. 배열",
];

let newList = [];

for (let i = 0; i < list.length; i++) {
  newList.push(list[i].slice(4));
}

console.log(newList);
// ['들어가며', 'JS의 역사', '자료형', '함수', '배열']

/* ----------------------------------------------------------- */
// 금칙어 : 콜라
function hasCola(str) {
  // if (str.indexOf("콜라")) { // 💥 오류 발생
  if (str.indexOf("콜라") !== -1) {
    // > -1 로도 가능
    console.log("금칙어가 있습니다.");
  } else {
    console.log("통과");
  }
}

hasCola("와 사이다가 짱이야!"); // 금칙어가 있습니다. // 통과
hasCola("무슨소리. 콜라가 최고야"); // 금칙어가 있습니다. // 금칙어가 있습니다.
hasCola("콜라"); // 통과 // 금칙어가 있습니다.
