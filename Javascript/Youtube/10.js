// 반복되는 부분을 하나로 묶고 상속 시키기.
const car = {
  wheels: 4,
  drive() {
    console.log("운전중...");
  },
};

const bmw = {
  color: "Red",
  navigation: 1,
};

const benz = {
  color: "White",
};

const audi = {
  color: "Blue",
};

// __proto__ 를 적어주면 상속된다.
// 객체에서 프로퍼티를 찾으려고 하는데 없으면 __proto__ 여기에서 찾는다.

bmw.__proto__ = car; // bmw 는 car의 속성을 상속 받음
benz.__proto__ = car;
audi.__proto__ = car;

// ⛓️ Prototype Chain : 상속은 계속 이어질 수 있다.

const x5 = {
  color: "White",
  name: "x5",
};

x5.__proto__ = bmw;

// hasOwnProperty : 객체에 직접 구현되어있는 프로퍼티일 때만 true를 반환
// for ..in 으로 구분해서 상속 받은 값까지 모두 찾아보기
for (property in x5) {
  if (x5.hasOwnProperty(property)) {
    console.log("o", property);
  } else {
    console.log("x", property);
  }
}

// 상속 받은 값을 보여주지 않음
Object.keys(x5);
Object.values(x5);
