#! /usr/bin/env node 


import inquirer from "inquirer";
// import Choice from "inquirer/lib/objects/choice.js";

class Student {
  static counter = 1000;
  name: string;
  id: number;
  course: string[];
  balance: number;

  constructor(name: string) {
    this.name = name;
    this.id = Student.counter++;
    this.course = [];
    this.balance = 1000;
  }

  enroll_Course(course: string) {
    this.course.push(course);
  }

  show_Balance() {
    console.log(`Balance for ${this.name} : $${this.balance}`);
  }

  pay_fee(amount: number) {
    this.balance = this.balance - amount;
    console.log(`Fees paid for ${this.name}`);
    return console.log(`Remaining Balance: $${this.balance}`);
  }

  std_status() {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Courses: ${this.course}`);
    console.log(`Balance: ${this.balance}`);
  }
}

class student_Manager {
  students: Student[];

  constructor() {
    this.students = [];
  }

  find_student(student_id: number) {
    return this.students.find((std) => std.id == student_id);
  }

  addNewStudents(name: string) {
    let student = new Student(name);
    this.students.push(student);
    console.log(
      `Student ${name} added successfully. Student ID: ${student.id}`
    );
  }

  enroll_Student(student_id: number, course: string) {
    let student = this.find_student(student_id);
    if (student) {
      student.enroll_Course(course);
      console.log(`${student.name} enrolled successfully in ${course} course.`);
    }
  }

  view_Student_Balance(student_id: number) {
    let student = this.find_student(student_id);
    if (student) {
      student.show_Balance();
    } else {
      console.log("Student not found please enter correct id.");
    }
  }

  pay_Student_fee(student_id: number, amount: number) {
    let student = this.find_student(student_id);
    if (student) {
      student.pay_fee(amount);
    } else {
      console.log("student not found. Please enter a correct student ID.");
    }
  }

  show_student_status(student_id: number) {
    let student = this.find_student(student_id);
    if (student) {
      student.std_status();
    } else {
      console.log("student not found. Please enter a correct student ID.");
    }
  }
}

async function main() {
  console.log("_".repeat(70));
  console.log("_".repeat(70));
  console.log(
    "Welcome to 'M Ehtesham Ul Hassan Malik' Studnet Management System"
  );
  console.log("_".repeat(70));
  console.log("_".repeat(70));

  let std_Manager = new student_Manager();

  //
  while (true) {
    let choice = await inquirer.prompt({
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        "Add a new student",
        "Enroll a student in a course",
        "View student balance",
        "Pay student fee",
        "View student status",
        "Exit",
      ],
    });

    switch (choice.choice) {
      case "Add a new student":
        let name = await inquirer.prompt({
          type: "input",
          name: "name",
          message: "Enter the name of the student:",
        });
        std_Manager.addNewStudents(name.name);
        break;


      case "Enroll a student in a course":
        let courseInput = await inquirer.prompt({
          type: "input",
          name: "student_id",
          message: "Enter the student ID:",
        });
        let course = await inquirer.prompt({
          type: "input",
          name: "course",
          message: "Enter the course name:",
        });
        std_Manager.enroll_Student(courseInput.student_id, course.course);
        break;


      case "View student balance":
        let balanceInput = await inquirer.prompt({
          type: "input",
          name: "student_id",
          message: "Enter the student ID:",
        });
        std_Manager.view_Student_Balance(balanceInput.student_id);
        break;


      case "Pay student fee":
        let feeInput = await inquirer.prompt({
          type: "input",
          name: "student_id",
          message: "Enter the student ID:",
        });
        let amount = await inquirer.prompt({
          type: "input",
          name: "amount",
          message: "Enter the amount:",
        });
        std_Manager.pay_Student_fee(feeInput.student_id, amount.amount);
        break;


        case "View student status":
            let statusInput = await inquirer.prompt({
                type: "input",
                name: "student_id",
                message: "Enter the student ID:",
            });
            std_Manager.show_student_status(statusInput.student_id);
            break;

        case "Exit":
            console.log("Thank you for using our system.");
            return;
            break;

        default:
            console.log("Invalid choice. Please try again.");
            break;
    }
  }
}

main();
