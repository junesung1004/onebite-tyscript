/*
인터페이스 interface = type 이랑 비슷
타입 별칭 지정하는게 인터페이스 = 객체 특화
*/

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
  sayHi(a: number, b: number, c: number): void;
}

const person: Person = {
  name: "june",
  age: 34,
  sayHi: () => {
    console.log("hi");
  },
};

person.sayHi();
person.sayHi(1, 2);
person.sayHi(1, 2, 3);
