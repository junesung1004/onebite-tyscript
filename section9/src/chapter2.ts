/*
분산적인 조건부 타입
*/

type StringNumberSwich<T> = T extends number ? string : number;

let a: StringNumberSwich<number>;
let b: StringNumberSwich<string>;
let c: StringNumberSwich<number | string>;
let d: StringNumberSwich<boolean | number | string>;

/*
실용적인 예제
*/

type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<number | string | boolean, string>;
