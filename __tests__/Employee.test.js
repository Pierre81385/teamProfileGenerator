const Employee = require("../lib/Employee");

describe("Employee Class", () => {
  it("When I initilize the class, a new Employee object is created.", () => {
    const testID = "0000";
    const testName = "test";
    const testEmail = "test@email.com";

    const testEmployee = new Employee(testName, testID, testEmail);

    expect(testEmployee.id).toEqual(testID);
    expect(testEmployee.name).toEqual(testName);
    expect(testEmployee.email).toEqual(testEmail);
  });
});
