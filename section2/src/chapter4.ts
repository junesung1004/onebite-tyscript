// type 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "박준성",
  nickname: "june",
  birth: "1991.05.04",
  bio: "hello",
  location: "인천시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "june",
  birth: "1991.05.04",
  bio: "hello",
  location: "인천시",
};

// 인덱스 시그니처
// 인덱스 시그니처의 단점은 타입을 지정한 대상의 객체의 키와 값을 다 삭제해도
// 에러가 발생하지 않는다.
type ContryCodes = {
  [key: string]: string;
};

let contryCodes: ContryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKindom: "uk",
};

type ContryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

//위 객체의 속성을 주석해서 없애도 에러가 발생하지 않음
let contryNumberCodes: ContryNumberCodes = {
  Korea: 410,
  // UnitedState: 840,
  // UnitedKindom: 826,
};
