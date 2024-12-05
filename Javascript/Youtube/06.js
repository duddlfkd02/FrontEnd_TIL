// sort
// a,b 뺐을 때 양수 -> 앞으로 / 음수 -> 순서 바뀜 / 0 -> 그대로
// 실무에서는 LoDash 라이브러리를 많이 사용함!

let arr = [5, 8, 13, 27];

const result = arr.sort((a, b) => {
  return a - b;
});

console.log(result);

// reduce
// 인수로 함수를 받음
// (누적 계산값, 현재 값) => {return 계산값}
// 배열 모든 수 합치기

let sumArr = [1, 2, 3, 4, 5];

// for, for of, forEach...

const sumResult = sumArr.reduce((prev, cur) => {
  return prev + cur;
}, 0);

console.log(sumResult);

let userList = [
  { name: "Mike", age: 30 },
  { name: "Tom", age: 10 },
  { name: "Jane", age: 27 },
  { name: "Sue", age: 26 },
  { name: "Harry", age: 42 },
  { name: "Steve", age: 60 },
];

let userResult = userList.reduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur.name);
  }
  return prev;
}, []);

let userAgeResult = userList.reduce((prev, cur) => {
  return (prev += cur.age);
}, 0);

let userNameResult = userList.reduce((prev, cur) => {
  if (cur.name.length === 3) {
    prev.push(cur.name);
  }
  return prev;
}, []);

console.log(userResult); // ['Mike', 'Jane', 'Sue', 'Harry', 'Steve']
console.log(userAgeResult); // 195
console.log(userNameResult); // ["Tom, "Sue"]
