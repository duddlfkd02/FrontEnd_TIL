/*
 클래스
 */

let studentA = {
  name: "김ㅇㅇ",
  grade: "A+",
  age: 20,
  study() {
    console.log("공부를 열심히");
  },
  introduce() {
    console.log("안녕하세요.");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  //생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  // 메서드
  study() {
    console.log("공부를 열심히");
  }
  introduce() {
    console.log(`안녕하세요. ${this.name} 입니다.`);
  }
}

class StudentDevelper extends Student {
  // 필드
  favoriteSkill;

  //생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 했음`);
  }
}

// 인스턴스 : 클래스를 사용하여 만든 객체
// 스튜던트 인스턴스
let studentB = new Student("김ㅇㅇ", "A+", 20);
studentB.study();
studentB.introduce();

const studentDeveloper = new StudentDevelper("이ㅇㅇ", "B+", 30, "React");
console.log(studentDeveloper);
studentDeveloper.programming();
