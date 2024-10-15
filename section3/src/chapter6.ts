/*
타입 좁히기
조건문 등을 이용해 넓은 타입에서 좁은 타입으로
타입을 상황에 따라 좁히는 방법을 구현
*/

//value => number : toFixed
//value => string : toUpperCase
function func(value: number | string) {
  value;
  //value.toUpperCase() // 에러 발생 -> 조건문을 통해 타입을 좁힌다.
  //value.toFixed() // 에러 발생 -> 조건문을 통해 타입을 좁힌다.

  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

type Person = {
  name: string;
  age: number;
};

function func1(value: number | string | Date | null | Person) {
  //value -> Date : getTime
  //value -> Person : name은 age살입니다 출력
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}입니다.`);
  }
}
