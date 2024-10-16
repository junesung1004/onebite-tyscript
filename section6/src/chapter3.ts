/*
접근 제어자
access modifier
-> public private protected
*/

class Employee {
  //멤버변수
  protected name: string;
  private age: number;
  position: string;

  //생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //메서드
  work() {
    console.log(`${name}`);
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

  func() {
    this.name;
  }
}

const employee = new Employee("박준성", 34, "developer");
// employee.age = 30;
