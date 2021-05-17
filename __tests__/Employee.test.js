const Employee = require("../lib/classes");

describe("employeeClass", () => {
  it("When I initilize the class", () => {
    const obj = new Employee("Peter", 9999, "pjb.den@gmail.com");
  });
});
