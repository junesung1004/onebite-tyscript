/*
함수 타입 호환성
특정 함수 타입을 다른 함수 타입으로  취급해도 괜찮은가를 판단할때
1. 반환값의 타입이 호환되는가
2. 매개변수의 타입이 호환되는가
*/

// 기준1. 반환값이 호환되는가?

type A = () => number; // number type
type B = () => 10; // number literal type

let a: A = () => 10;
let b: B = () => 10;

a = b; // 이 코드가 되는 이유는 업캐스팅이라 가능
// b = a; // 이 코드가 안되는 이유는 다운캐스팅이라 에러발생

// 기준2. 매개변수가 호환되는가 ?
// 중요! 매개변수에서는 업캐스팅이 불가하고 다운캐스팅이 가능하다!
// 2-1 : 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; -> 특이하게 매개변수에서의 타입은 업캐스팅이 불가능하다
d = c;

// 아래의 2개 타입에서는 animal이 상위 부모타입이다 이유는
// 객체에서 속성이 작은게 부모타입이 된다.
type Animal = {
  name: string;
};
type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.color);
  console.log(dog.name);
};

// animalFunc = dogFunc;
dogFunc = animalFunc;

// 2-2 : 매개변수의 개수가 다를때
type Func1 = (a: number, n: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // func1 의 속성은 2개 func2의 속성은 1개  즉 2 <- 1 구조는 가능
//func2 = func1; // func2 의 속성은 1개 func1의 속성은 2개  즉 1 <- 2 구조는 불가능
