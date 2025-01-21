// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "김ㅇㅇ",
  nickname: "aaa",
  birth: "2000.01.01",
  bio: "Hi",
  location: "서울시",
};

let user2: User = {
  id: 2,
  name: "이ㅇㅇ",
  nickname: "bbb",
  birth: "2002.01.02",
  bio: "Bye",
  location: "부산시",
};

// 인덱스 시그니처
// type CountryCodes = {
//   Korea: string;
//   UnitedState: string;
//   UnitedKindom: string;
// };

type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKindom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 이 타입은 반드시 가지도록 설정
  // ⭐️ 인덱스 시그니처의 value 타입과 직접 추가한 프로퍼티의 value 타입이 호환되거나 일치해야함
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKindom: 826,
};
