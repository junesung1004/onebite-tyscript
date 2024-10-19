/*
조건부 타입
*/

// 1. 삼항 연산자

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/*
제네릭과 조건부 타입
*/

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

function removeSpace<T>(text: T): T extends string ? string : undefined;
function removeSpace<T>(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpace("hi my name is june sung");
result.toUpperCase();
console.log(result);
