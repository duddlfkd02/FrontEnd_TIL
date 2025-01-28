/**
 맵드 타입(Mapped type)
 interface에서 사용할 수 없음! type 별칭에서 사용!
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};
// User[key]는 인덱스드 타입! 따라서 User타입 객체의 값이 들어옴

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(user: User) {
  // 유저정보 불러오는 기능
  return {
    id: 1,
    name: "김ㅇㅇ",
    age: 10,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // 수정하는 기능
}

updateUser({
  // id: 1,
  // name: "김ㅇㅇ",
  age: 20,
});
