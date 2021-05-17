const { INTERNAL_MATCHER_FLAG } = require("expect/build/jestMatchersObject");
const inquirer = require("inquirer");
const Employee = require("./lib/classes");
const Engineer = require("./lib/classes");
const Manager = require("./lib/classes");
const Intern = require("./lib/classes");

function init() {
  const newEmployee = new Employee();
  const newEngineer = new Engineer();
  const newManager = new Manager();
  const newIntern = new Intern();

  console.log("Please build your team.");
  newEmployee.getRole();
}

init();
