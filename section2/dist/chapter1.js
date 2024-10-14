//원시타입
// 1. number type
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = NaN;
// 2. string type
let str1 = "hello";
let str2 = `hello ${num1}`;
// 3. boolean type
let bool1 = true;
let bool2 = false;
// 4. null type
let null1 = null;
// 5. undefiend
let unde1 = undefined;
// 6. 리터럴 type
//타입이 값 그자체가 되는것
//타입에 값을 넣으면 다른 값으로 변환이 안된다.
let numA = 10;
export {};
// numA = 12; -> 에러나는 이유는 타입에 값을 10을 넣어서 고정한거나 마찬가진데 값을 바꿔서 에러가 나옴
// 변수에 빈값을 적용할때 tsconfig.json 파일에서
// "strictNullChecks": false 속성을 추가한다.
// let numA: number = null;
