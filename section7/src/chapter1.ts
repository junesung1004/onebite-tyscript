/*
제네릭
매개변수가 어떤타입이 들어올지 모를때
제네릭 함수를 따로 설정해서 적용해준다
*/

function func<T>(v: T): T {
  return v;
}

let num = func(10);
let bool = func(true);
let str = func("hi");
let arr = func<[number, number, number]>([1, 2, 3]);
