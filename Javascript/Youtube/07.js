// 나머지 매개변수
// * 항상 맨 뒤에 위치해야한다! 나머지 매개변수 뒤에 추가로 더 있으면 안됨
// ❌ User(name, age, ...skills, etc)

function User(name, age, ...skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}

const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Tom", 20, "JS", "React");
const user3 = new User("Jane", 27, "Next.js");

console.log(user1);
// User {name: 'Mike', age: 30, skills: Array(2)}
// skills: (2) ['html', 'css']
console.log(user2);
console.log(user3);
