/**
 제네릭 클래스
 */

// class NumberList {
//   constructor(private list: number[]) {}

//   push(data: number) {
//     this.list.push(data);
//   }
//   pop() {
//     return this.list.pop();
//   }
//   print() {
//     console.log(this.list);
//   }
// }

// 제네릭 클래스로 바꾸기
class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
numberList.pop(); // [1,2]
numberList.push(4); // [1,2,4]
numberList.print(); // [1,2,4]

const stringList = new List(["1", "2"]);
stringList.pop(); // ["1"]
stringList.push("3"); // ["1","3"]
stringList.print(); // ["1","3"]
