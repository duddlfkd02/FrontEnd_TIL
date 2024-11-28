// 전개구문

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// arr2.reverse().forEach((num) => {
//   arr1.unshift(num);
// });

arr1 = [...arr2, ...arr1];

console.log(arr1);

/* ------------------------------------------------------------ */

let user = { name: "Mike" };
let info = { age: 30 };
let skills = ["JS", "React"];
let lang = ["Korean", "English"];

// 1. 전개구문 사용 ❌
// user = Object.assign({}, user, info, {
//   skills: [],
// });

// skills.forEach((item) => {
//   user.skills.push(item);
// });

// lang.forEach((item) => {
//   user.skills.push(item);
// });

// 2. 전개구문 사용 ⭕️
user = {
  ...user,
  ...info,
  skills: [...skills, ...lang],
};

console.log(user);
