// Symbol()
// 유일한 속성!

const user = {
  name: "Mike",
  age: 30,
};

// 나의 작업
//user.showName = function () {}; -> 그의 showName은 function () {}.
const showName = Symbol("show name");
user[showName] = function () {
  console.log(this.name); // Mike
};

user[showName]();

// 사용자가 보는 메시지
for (let key in user) {
  console.log(`그의 ${key}은 ${user[key]}.`);
}
