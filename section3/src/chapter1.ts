/*
Unknown 타입
*/
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  //up캐스팅은 가능하지만 down캐스팅은 불가능하다
  //let num: number = unknownVar;
  //let str: string = unknownVar;
}

/*
never 타입 (가장 하위계층 ) = 공집합(하나도 없다)
*/

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  //never는 값이 존재하지 않는건데
  //에러가 나지 않은 이유는 업 캐스팅이 되기때문
  let num: number = neverFunc();

  //이 코드는 가장 하위계층으로 다운캐스팅이 되기 때문에 에러 발생
  //let never1: never = 10;
}

/*
void type
*/
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }
}

/*
any type (치트키 타입)
모든타입에 main type으로 존재할수도 있고
모든타입에 sub type으로 존재할수도 있다.
즉 업, 다운캐스팅이 다 가능하다.
*/
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;

  anyVar = unknownVar;
}
