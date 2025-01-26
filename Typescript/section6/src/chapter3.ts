/**
 인터페이스와 클래스
 */
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}
// ⭐️ interface는 접근제어자가 무조건 public 이다. (-> private, protected ❌)

class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string // public 외 다른 접근제어자를 사용하고 싶을 경우
  ) {}
  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동중입니다.`);
  }
}
