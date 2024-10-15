/*
  기본 타입간의 호환성
*/

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/*
객체 타입간의 호환성
-> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
*/

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

// 중요!! 객체에서 속성이 적은개 부모타입으로 되고 속성이 많은게 자식타입으로 된다.
// animal = dog // 도그의 속성은 3개 애니멀타입의 속성은 2개라 가능
// dog = animal // 반대의 상황에서는 에러발생

type Book = {
  //슈퍼타입(부모타입)
  name: string;
  price: number;
};

type ProgrammingBook = {
  // 서브타입(자식타입)
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;
//programmingBook = book; -> 다운캐스팅이라 에러 발생

// 아래의 코드가 에러나는 이유는
// book을 programmingBook 대입해서 skill이라는 속성값도 생기게 했지만
// 초과 프로퍼티 검사에 에러가 발생
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //skill: "reactjs",
};
