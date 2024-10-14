// 1. 배열 type
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "i'm", "june"];

// ts에서 <> 꺽쇄를 제네릭이라고 한다.
let boolArr: Array<boolean> = [true, false, true];

// 2. 배열에 들어가는 요소의 타입이 다양할때
//(number | string) 위 방법을 유니온 타입이라고 한다.
let multiArr: (number | string)[] = [1, "hello"];

// 3. 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 4. 튜플 type
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
//tup1 = [1, 2, 3]; -> 에러 발생
//tup1 = ["1", "2"]; -> 에러 발생

let tup2: [number, string, boolean] = [1, "2", true];

//튜플이 유용하게 사용될때의 예시
const users: [string, number][] = [
  ["박준성", 1],
  ["박준성1", 2],
  ["박준성2", 3],
  ["박준성3", 3],
  //[5, "박준성4"], // 이 코드만 구조가 틀릴때 유용하게 사용
];
