// any type
// 특정 변수의 타입을 우리가 확실히 모를때
// 문자형이 될수도있고, 숫자형이 될 수도 있고, 불리언 값이 될 수도 있고 등등
// 모든, 누구나 다된다는 뜻을 가짐.
let anyVar: any = 10;
anyVar = "hello";
anyVar = true;

let num: number = 10;
num = anyVar;

console.log(num);

// unknown
//연산 작업은 다 오류 발생
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};
// num = unknownVar -> unknown타입은 any타입처럼 대입은 오류가 난다.

if (typeof unknownVar === "number") {
  // 타입 정제하면 가능하다
  num = unknownVar;
}
