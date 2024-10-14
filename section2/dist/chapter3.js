// 객체 type
// 객체의 type은 object인데 카와 벨류를 인식못함
// 해서 객체의 type 표기는  {} 사용하여 각 키에대한 타입을 명시
let user = {
    id: 1,
    name: "박준성",
};
user.id;
user.name;
// let dog: { name: string; color: string } = {
//   name: "돌돌이",
//   color: "brown",
// };
// dog.name;
// dog.color;
//속성이 아직 정해지지 않았을때
// ?(옵셔널) 기호를 사용해서 있거나 없거나 다 사용하게 가능
// user = {
//   name: "홍길동",
// };
//api키처럼 타입을 지정 후 내용을 바꾸지 못하게 해야 할때는
//readonly 속성을 붙임
let config = {
    apiKey: "MY API KEY",
};
export {};
// config.apiKey = 'hacked' -> apiKey의 속성은 읽기전용이라 값 수정 x
