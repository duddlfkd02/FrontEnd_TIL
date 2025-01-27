/**
 map 메서드
 */

const arr = [1, 2, 3];
const newArr = arr.map((item) => item * 2);
// [2, 4, 6]

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (item) => item * 2);
map(["hi", "hello"], (item) => parseInt(item));

/**
 forEach 메서드
 */

const arr2 = [1, 2, 3];
arr.forEach((item) => console.log(item));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

// number 추론
forEach(arr, (item) => {
  console.log(item.toFixed());
});

// string 추론
forEach(["123", "456"], (item) => {
  item;
});
