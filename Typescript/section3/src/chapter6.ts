/*
 타입 단언
*/

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "김ㅇㅇ";
person.age = 10;
// ❌ person을 빈 객체로 두고 작성하면 에러 발생 (name, age 프로퍼티가 없기 때문!)

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  // 타입 단언을 할 경우 Dog명시 안 해도 오류 안 남!!
  name: "돌돌이",
  color: "brown",
  breed: "말티즈",
} as Dog; // 타입 단언을 breed 포함하여 Dog 초기값 설정

/*
 타입 단언의 규칙
 - A(값) as B(단언) 라고 할 때
  ⭐️ A가 B의 슈퍼타입이거나
  ⭐️ A가 B의 서브타입이어야 한다.
*/

let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as unknown as string; // ⚠️ 권장하지 않음

/*
 const 단언 
 */

let cat = {
  name: "야옹이",
  color: "blue",
} as const;

// cat.name = ""

/*
 Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글 1",
  author: "김작가",
};

let length: number = post.author!.length;
// null이 아닐것이라 믿게 하는 것

// 타입 단언은 실제로 그 값을 바꾸는 것이 아니다.
// 업캐스팅과 다운캐스팅이랑은 다른 개념임
