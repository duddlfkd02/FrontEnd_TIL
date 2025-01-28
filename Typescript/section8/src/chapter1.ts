/**
 인덱스드 엑세스 타입 (타입 추출)
 */

// 1️⃣ 객체에서 요소의 타입 추출하기
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

// ⚠️ 타입["인덱스"] : 인덱스에 들어가는 문자열은 타입이다!! 타입만 명시할 수 있다.
// ⚠️ 존재하지 않는 인덱스를 적으면 오류가 발생한다.
// 🍯 Tip! 중첩 대괄호를 써서 객체의 특정값만 받아올 수 있다 Post["author"]["id"]

const post: Post = {
  title: "제목",
  content: "내용",
  author: {
    id: 1,
    name: "작가이름",
    age: 10,
  },
};

// 2️⃣ 배열에서 요소의 타입 추출하기
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

const post2: PostList[number] = {
  title: "제목",
  content: "내용",
  author: {
    id: 1,
    name: "작가이름",
    age: 10,
  },
};

// ✏️ PostList[number]는 배열의 모든 요소 타입을 추출하는 방식으로, 배열 내의 특정 인덱스 값과는 무관함

// 3️⃣ 튜플과 요소의 타입 추출하기
type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number

type Tup1 = Tup[1]; //string

type Tup2 = Tup[2]; // boolean

// type Tup3 = Tup[3] ❌ 정의한 Tup보다 많으므로 오류 발생

type TupNum = Tup[number]; // string | number | boolean;

/** 💡 배열, 객체, 튜플에서 타입 추출 차이 정리

 1️⃣ 배열의 요소 타입을 추출하기 위해 [number]를 사용
    type MyArray = string[];
    type ElementType = MyArray[number]; // string

2️⃣ 객체에서 키를 사용해 속성 타입을 추출
    type MyObject = { a: string; b: number };
    type AType = MyObject["a"]; // string

3️⃣ 튜플에서 특정 위치의 타입을 추출하려면 해당 인덱스를 사용
    type MyTuple = [string, number, boolean];
    type FirstElement = MyTuple[0]; // string
    type SecondElement = MyTuple[1]; // number

 */
