// object
let user = {
    id: 1,
    name: "김ㅇㅇ",
};
user.id;
// 구조를 기준으로 타입을 정의한다. -> 구조적 타입 시스템 (property based type system)
let config = {
    apiKey: "MY API KEY",
};
export {};
// config.apiKey = "hacked"
// ==============================================================
/* 내용 정리
  1️⃣ 객체타입을 정의할 때는 object를 적어서 정의할 수 있다.

    let user: object = { ⭐️
    id: 1,
    name: "김ㅇㅇ",
  };

  그러나 이렇게 작성하면 user.id로 특정 프로퍼티에 접근하려고 할 때 오류가 발생한다.
  이유 : 타입스크립트의 object 타입은 단순 값이 객체임을 표현하는 것 외에는 아무런 정보도 제공하지 않는 타입이기 때문이다.

  ✅ 객체 리터럴 타입으로 작성
  {} 중괄호를 열고 객체가 갖는 프로퍼티를 직접 나열해 만드는 타입

    let user: { ⭐️
      id: number;
      name: string;
    } = {
      id: 1,
      name: "김ㅇㅇ",
    };

    user.id; -> 오류 발생하지 않음

  2️⃣ 읽기전용 프로퍼티
  프로퍼티 이름 앞에 readonly 키워드를 붙이면 해당 프로퍼티를 건드리지 못한다.
    
    let config: {
      readonly apiKey: string;
    } = {
      apiKey: "MY API KEY",
    };

    config.apiKey = "건드렸어"; 💥 오류 발생
*/
