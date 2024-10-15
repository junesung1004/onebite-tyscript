// 타입 추론 = 타입 넓히기
let a = 10; // 값을 보고 자동으로 number 타입으로 지정
let b = "hi";
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "준",
  },
  urls: ["https://go.go"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hi";
}

//값을 초기화 하지 않았을때 any타입이 지정되는데
// 값을 초기화 하는거에 따라 타입이 진화된다.
let d;
d = 10;
d.toFixed();
d = "hi";
d.toUpperCase();

//const로 값을 선언하면 그값이 타입이 된다.
const num = 10;

const arr = [1, "hi"];
