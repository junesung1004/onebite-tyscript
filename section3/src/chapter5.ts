/*
  타입 단언(assertion)
*/

//타입 별칭
type Person = {
  name: string;
  age: number;
};

// 어떤 값이 들어올지 몰라서 값은 빈값으로 하는데 나중에 추가할거야
// 그럴때는 타입 별칭을 as Person 으로 사용하면 추 후에 추가가 가능하다.
let person = {} as Person;
person.name = "박준성";
person.age = 34;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

//타입 단언의 규칙
// 값 as 단언 <- 단언식
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입어야 함

/*
const
*/
let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

/*
Non Null 단언
*/

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "타입스크립트",
  author: "박준성",
};

//const len:number = post.author?.length; <- undefined라 에러 ? 를 !표로 수정
const len: number = post.author!.length;
