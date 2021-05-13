const Manager = require("../src/lib/Manager");

describe("Manager", () => {
  const managerInfo = {
    employeeName: "Corrado",
    employeeId: "420",
    employeeEmail: "unclejun@yahoo.com",
    officeNumber: "0121",
  };

  it("should set up officeNumber via constructor fn", () => {
    const expected = managerInfo.officeNumber;
    const manager = new Manager(managerInfo);
    const actual = manager.officeNumber;

    expect(actual).toBe(expected);
  });

  it("should override employeeRole via constructor", () => {
    const expected = "Manager";
    const manager = new Manager(managerInfo);
    const actual = manager.employeeRole;

    expect(actual).toBe(expected);
  });

  it("should get employeeRole when called", () => {
    const expected = "Manager";
    const manager = new Manager(managerInfo);
    const actual = manager.getRole();

    expect(actual).toBe(expected);
  });
});
