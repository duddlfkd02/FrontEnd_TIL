/**
 접근 제어자
 access modifier
 -> public private protected
 */

class Employee {
  //필드
  private name: string; // 클래스 내부가 아닌 곳에서 접근하려고 하면 에러 발생, 파생 클래스에서 접근하려고 해도 안 됨
  protected age: number; // 파생클래스에서는 접근 가능
  public position: string; // 가장 기본 접근제어자

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  //메서드
  work() {
    console.log("일하는 중");
  }
}

/*
class Employee {
  //필드

  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    // ⭐️ 초기화도 알아서 해주기 때문에 this.name = name 도 안 적어도 에러 발생 안 함
  }
  //메서드
  work() {
    console.log("일하는 중");
  }
}
*/

// 파생 클래스
class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  //생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position), (this.officeNumber = officeNumber);
  }

  func() {
    this.age; // ✅ protected는 파생클래스에서만 접근 가능
    // this.name; ❌ private 라서 에러 발생
  }
}

const employee = new Employee("김ㅇㅇ", 20, "developer");
// employee.name = "홍길동";  ❌ private 라서 에러 발생
// employee.age = 30; ❌ protected 라서 에러 발생
employee.position = "디자이너";
