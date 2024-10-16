/*
함수 타입 표현식
*/
type Add = (a: number, b: number) => number;

const add = (a: number, b: number): number => a + b;
const add1: Add = (a, b) => a + b;

/*
호출 시그니처
콜 시그니처
*/

type Operation = {
  (a: number, b: number): number;
};

const add2: Operation = (a, b) => a + b;
