/**
 Partial<T>
 : 부분적인, 일부분의
 -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

/*
1. [key in keyof T] : keyof T는 T 타입의 모든 키를 가져와 유니언 타입으로 반환, 이 유니언 타입을 순회하면서 맵드 타입을 적용하는 부분
즉, title, tags, content, thumbnailURL이 하나씩 key로 할당된다.

2. T[key] :  인덱스드 엑세스 타입으로 T에서 해당 키(key)의 타입을 가져옴.
 key는 title, tags, content, thumbnailURL 를 인덱스로 가진다. (T[key]는 Post[key]와 동일하게 매칭)

3. ? 를 붙여주어 선택적 프로퍼티가 되도록 하여 Partial<T> 타입 완성.
*/
const draft: Partial<Post> = {
  title: "제목은 나중에",
  content: "내용 작성 중",
};

/**
 Required<T>
 : 필수의, 필수적인
 -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

type Required<T> = {
  [key in keyof T]-?: T[key];
};
//  -?는 ?(선택적 프로퍼티)를 제거하는 역할

const withThumbnailPost: Required<Post> = {
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "http://...",
};

/**
 Readonly<T>
 : 읽기 전용, 수정 불가
 -> 특정 객체 타입의 모든 프로퍼티를 읽기 전용 프로퍼티로 만드는 타입
 */

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글",
  tags: [],
  content: "",
};
