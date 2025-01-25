/*
 인터페이스의 확장
*/

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  // name: "hello"; 동일한 프로퍼티의 타입을 다시 정의할 수 있다. (⭐️ 원본 프로퍼티 타입의 서브타입이어야한다!)
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

// 다중 확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
