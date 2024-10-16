/*
클래스
*/

let studentA = {
  name: "준",
  grade: "B-",
  age: 34,
  study() {
    console.log("열심히 공부중");
  },
  introduce() {
    console.log("안녕하세요");
  },
};

class Student {
  // 필드 (멤버변수)
  name;
  grade;
  age;

  //생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  //메서드(멤버함수)
  study() {
    console.log("열심히 공부중");
  }

  introduce() {
    console.log(`안녕하세요 ${this.name}`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  //생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

//클래스를 이용해서 만든 객체를 -> 인스턴스라 불른다
// 스튜던트 인스턴스
let studentB = new Student("준성", "A+", 36);
// console.log(studentB);
// studentB.introduce();
// studentB.study();

let studentDeveloper = new StudentDeveloper("박준성", "C+", 28, "JavaScript");
console.log(studentDeveloper);
studentDeveloper.programming();
