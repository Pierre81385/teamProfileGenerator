const inquirer = require("inquirer");

//Employee class, with Engeneer, Manager, and Intern

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    inquirer
      .prompt({
        type: "input",
        message: "What is the name of the employee?",
        name: "name",
      })
      .then((data) => {
        this.name = data;
        console.log(data);
      });
  }

  getId() {
    inquirer
      .prompt({
        type: "input",
        message: "What is the employee's ID number?",
        name: "employeeID",
      })
      .then((data) => {
        this.id = data;
      });
  }

  getEmail() {
    inquirer
      .prompt({
        type: "input",
        message: "What is the employee's email address?",
        name: "email",
      })
      .then((data) => {
        this.email = data;
      });
  }

  getRole() {
    inquirer.prompt({
      type: "list",
      message: "Please select employee type:",
      choices: ["Engineer", "Intern", "Manager"],
      name: "employeeType",
    });
  }
}

class Manger extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
}

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
}

Engineer.prototype.getGitHub = function () {
  inquirer.prompt({
    type: "input",
    message: "What is this employee's gitHub user name?",
    name: "github",
  });
};

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
}

Intern.prototype.getSchool = function () {
  inquirer.prompt({
    type: "input",
    message: "What school did this employee go to?",
    name: "school",
  });
};

module.exports = Employee;
