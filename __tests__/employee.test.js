const Employee = require("../src/lib/Employee");

describe("Employee", () => {
  const employeeInfo = {
    employeeName: "Corrado",
    employeeId: "420",
    employeeEmail: "unclejun@yahoo.com",
  };

  it("new instance of Employee should be named after a character in The Sopranos", () => {
    const expected = employeeInfo.employeeName;
    const employee = new Employee(employeeInfo);
    const actual = employee.employeeName;

    expect(actual).toBe(expected);
  });
});
