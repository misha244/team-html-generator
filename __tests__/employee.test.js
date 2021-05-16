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

  it("new instance of Employee Id should be set", () => {
    const expected = employeeInfo.employeeId;
    const employee = new Employee(employeeInfo);
    const actual = employee.employeeId;

    expect(actual).toBe(expected);
  });

  it("new instance of Employee email should be set", () => {
    const expected = employeeInfo.employeeEmail;
    const employee = new Employee(employeeInfo);
    const actual = employee.employeeEmail;

    expect(actual).toBe(expected);
  });

  it("should get employeeName when called", () => {
    const expected = employeeInfo.employeeName;
    const employee = new Employee(employeeInfo);
    const actual = employee.getName();

    expect(actual).toBe(expected);
  });

  it("should get employeeId when called", () => {
    const expected = employeeInfo.employeeId;
    const employee = new Employee(employeeInfo);
    const actual = employee.getId();

    expect(actual).toBe(expected);
  });

  it("should get employeeEmail when called", () => {
    const expected = employeeInfo.employeeEmail;
    const employee = new Employee(employeeInfo);
    const actual = employee.getEmail();

    expect(actual).toBe(expected);
  });

  it("should get employeeRole when called", () => {
    const expected = "Employee";
    const employee = new Employee(employeeInfo);
    const actual = employee.getRole();

    expect(actual).toBe(expected);
  });
});
