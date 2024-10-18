/*
keyof 연산자
*/

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "박준성",
  age: 34,
};

getPropertyKey(person, "name");
