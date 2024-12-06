// this
// 생성자 함수 호출

function Cafe(menu) {
  console.log(this);
  this.menu = menu;
}

let myCafe = new Cafe("latte");
console.log(myCafe); // menu: "latte" (new키워드 없애면 일반함수로 호출되어서 전역객체 가리킴)

// 콜백 함수
const cafe = {
  brand: "이디야",
  menu: "",
  setMenu: function (menu) {
    this.menu = menu;
  },
};

function getMenu(menu, callback) {
  callback(menu); // 단순 함수로 호출 -> 전역객체 참조
}

getMenu("핫초코", cafe.setMenu); // this가 cafe를 참조하지 않고 전역객체 참조하게 됨

console.log(cafe); // cafe객체 , menu ""
console.log(window.menu); // menu 값 "핫초코" 출력

// 정리
// 1. 일반함수 : 전역객체
// 2. 콜백함수 : 전역객체
// 3. 생성자함수 : 새로 생성할 객체
// 4. 메서드로 함수 호출 : 메서드를 포함한 객체

// -------------------------------------------------

// this와 화살표함수
function Counter() {
  this.count = 0;
  setInterval(function () {
    // 일반함수로 실행되었기 때문 window
    this.count++;
    console.log(this.count); // NaN
  }, 2000);
}

// const counter = new Counter();

function CounterArrow() {
  this.count = 0;
  setInterval(() => {
    // 화살표 함수에서는 함수가 정의된 시점에서 상위스코프 this 참조!
    this.count++;
    console.log(this.count); // 정상작동
  }, 2000);
}

// const counterArrow = new CounterArrow();

// -------------------------------------------------

// 메서드에서 화살표함수
const cafeArrow = {
  name: "이디야",
  menu: "아메리카노",
  print: () => {
    console.log(this);
  },
};
cafeArrow.print();
