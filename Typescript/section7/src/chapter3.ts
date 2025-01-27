/**
 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

// ⭐️ 직접 타입 변수에 할당할 타입을 지정해주어야 한다.
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["안녕"],
};

/**
 인덱스 시그니처
 */
interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -123,
  key2: 1234,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};

/**
 제네릭 인터페이스 활용 예시
 : 유저 관리 프로그램
 -> 학생 유저 / 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  //profile: Student | Developer;
  profile: T;
}

function goToSchool(user: User<Student>) {
  // if (user.profile.type !== "student") {
  //   console.log("잘 못 오셨습니다.");
  //   return;
  // }
  // -> 타입 변수 T에 이미 Student로 정해줬기 때문에 조건문으로 타입좁히기 할 필요가 없어짐

  const school = user.profile.school;
  console.log(`${school}로 등교완료`);
}

//goToSchool(developerUser) ❌

const developerUser: User<Developer> = {
  name: "김개발자",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "서울대학교",
  },
};
