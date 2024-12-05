// 객체 메소드

const user = {
  name: "Mike",
  age: 30,
};

/* ----------------------------------------------------- */

// Object.assign : 객체 복사
const user2 = Object.assign({}, user);
user2.name = "Tom";
console.log(user); // Mike
console.log(user2); // Tom

/* ----------------------------------------------------- */

// Object.key & value & entries : 배열로 key, value
const result = Object.keys(user); // ["name", "age"]
const result2 = Object.values(user); // "Mike", 30
const result3 = Object.entries(user); // ["name", "Mike"] , ["age", 30]
console.log(result, result2, result3);

/* ----------------------------------------------------- */

// Object.fromEntries

let arr = [
  ["mon", "월"],
  ["tue", "화"],
];

const arrResult = Object.fromEntries(arr);
console.log(arrResult);
