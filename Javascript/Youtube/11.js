// const car = {
//   wheels: 4,
//   drive() {
//     console.log("운전중...");
//   },
// };

// 생성자함수
const Bmw = function (color) {
  this.color = color;
};

Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function () {
  console.log("drive...");
};

Bmw.prototype.navigation = 1;
Bmw.prototype.stop = function () {
  console.log("STOP!");
};

// 위 코드를 간결하게 작성하기 + constructor 직접 명시 (직접 적어주지 않으면 constructor 사라짐)
Bmw.prototype = {
  constuctor: Bmw, // constructor 직접 명시
  wheels: 4,
  drive() {
    console.log("drive..");
  },
  navigation: 1,
  stop() {
    console.log("STOP!");
  },
};

const x5 = new Bmw("red");
const z4 = new Bmw("blue");

// x5.__proto__ = car;
// z4.__proto__ = car;
