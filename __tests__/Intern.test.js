const Intern = require("../lib/Intern");

//test for initilization
describe("Intern Class", () => {
  it("When I initilize the class, a new Intern object is initialized.", () => {
    const testID = "0000";
    const testName = "test";
    const testEmail = "test@email.com";
    const testSchool = "Hogwartz";

    const testEmployee = new Intern(testName, testID, testEmail, testSchool);

    expect(testEmployee.id).toEqual(testID);
    expect(testEmployee.name).toEqual(testName);
    expect(testEmployee.email).toEqual(testEmail);
    expect(testEmployee.school).toEqual(testSchool);
  });
});

describe("getSchool", () => {
  it("When the getEmail method is called, it returns the new employee's email address.", () => {
    const testID = "0000";
    const testName = "test";
    const testEmail = "test@email.com";
    const testSchool = "Hogwartz";

    const testEmployee = new Intern(testName, testID, testEmail, testSchool);

    expect(testEmployee.getSchool()).toEqual(testSchool);
  });
});

describe("getRole", () => {
  it("When the getRole method is called, it returns the role of Intern.", () => {
    const testID = "0000";
    const testName = "test";
    const testEmail = "test@email.com";
    const testSchool = "Hogwartz";

    const testEmployee = new Intern(testName, testID, testEmail, testSchool);

    expect(testEmployee.getRole()).toEqual("Intern");
  });
});
