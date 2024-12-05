// ** class 의 기본 개념 (생성자함수와 비교해보기)

// 생성자 함수
const User = function (name, age) {
  this.name = name;
  this.age = age;
  // this.showName = function () {
  //   console.log(this.name);
  // };
};

User.prototype.showName = function () {
  console.log(this.name);
};

const mike = new User("Mike", 30);

// Class
class User2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(this.name);
  }
}

const tom = new User2("Tom", 19);

// 생성자 함수로 만들어진 경우 객체 안에 showName 이 있지만 (객체 안에 있어서 상속)
// class로 만들어진 Tom 은 __proto__ 안에 showName이 있다.

// 생성자함수 class 차이점 ⭐️
// 1. new 없이 호출하면 class 는 에러를 즉시 나타내줌
// 2. for .. in 문을 사용했을 때 class 에서 사용하면 showName을 볼 수 없다. (생성자함수는 객체 안에 있는 속성 모두 보여줌)
