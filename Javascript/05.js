// find, findIndex
// 첫번째 true 값만 반환하고 끝, 없으면 undefined 반환

const findArr = [1, 2, 3, 4, 5, 6];

const findResult = findArr.find((item) => {
  return item % 2 === 0;
});

console.log(findResult); // 2

/* ------------------------------------------------------------ */

const userList = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 27 },
  { name: "Tom", age: 10 },
];

const findUserResult = userList.find((user) => {
  //const findUserResult = userList.findIndex((user) => {
  if (user.age < 19) {
    return true;
  }
  return false;
});

console.log(findUserResult); // { name: "Tom", age: 10 }
// console.log(findIdxUserResult); // 2

/* ------------------------------------------------------------ */
// filter
// 조건에 맞는 모든 요소 찾을 때

const filterArr = [1, 2, 3, 4, 5, 6];

const filterResult = filterArr.filter((item) => {
  return item % 2 === 0;
});

console.log(filterResult); // [2,4,6]
