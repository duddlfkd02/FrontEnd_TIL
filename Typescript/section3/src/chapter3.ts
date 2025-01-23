/*
1️⃣ 기본 타입간의 호환성
*/

let num1: number = 10;
let num2: 10 = 10;

// num1 = num2; ✅ OK
// num2 = num1; ❌ NO

/*
 2️⃣ 객체 타입간의 호환성
 */
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "멍멍이",
  color: "white",
  breed: "말티즈",
};

// animal = dog; ✅ OK
// dog = animal; ❌ NO
// Animal 타입이 슈퍼타입, Dog 타입은 서브타입

// ⭐️ 프로퍼티를 기준으로 타입을 정의하는 구조적 타입 시스템을 따른다.
// Animal 타입이 Dog 타입이 되려면 breed 라는 속성이 있어야하기 때문!

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "가나다라",
  price: 10000,
  skill: "한글책",
};

book = programmingBook;
// programmingBook = book; ❌ NO

/*
3️⃣ 초과 프로퍼티 검사
변수를 객체 리터럴로 초기화 할 때 발동하는 타입스크립트의 특수한 기능
타입에 정의된 프로퍼티 외의 다른 초과된 프로퍼티를 갖는 객체를 변수에 할당할 수 없도록 막는다.
*/

let book2: Book = {
  name: "가나다라",
  price: 10000,
  // skill: "한글책", -> ❌ Book 타입에 정의되지 않은 skill 프로퍼티를 갖는 객체를 할당하려고 했으므로 초과 프로퍼티 검사가 실패
};

let book3: Book = programmingBook;
// 앞서 만들어둔 변수에 보관한 다음 초기화 값으로 사용하면 에러 발생 안 함
