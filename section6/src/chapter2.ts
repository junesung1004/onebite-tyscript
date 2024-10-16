/*
타입스크립트의 클래스
*/

const employee = {
  name: "준성",
  age: 34,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  //멤버변수
  name: string;
  age: number;
  position: string;

  //생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //메서드
  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  //멤버변수
  officeNumber: number;

  //생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("준", 34, "student");
console.log(employeeB);

const employeeC: Employee = {
  name: "",
  age: 1,
  position: "",
  work() {},
};
