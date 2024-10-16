/*
인터페이스와 클래스
implements : 구현하다
*/

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Charater implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
