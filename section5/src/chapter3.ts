/*
선언 합침
*/
//interface는 타입이름이 같을때는 합쳐진다. type은 에러발생
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "june",
  age: 34,
};

/*
모듈 보강
*/
interface Lib {
  a: number;
  b: number;
}
interface Lib {
  c: string;
}
const lib = {
  a: 1,
  b: 2,
  c: "hello",
};
