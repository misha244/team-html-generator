const Intern = require("../src/lib/Intern");

describe("Intern", () => {
  const internInfo = {
    employeeName: "Corrado",
    employeeId: "420",
    employeeEmail: "unclejun@yahoo.com",
    school: "Top Business School",
  };

  it("should set up school via constructor fn", () => {
    const expected = internInfo.school;
    const intern = new Intern(internInfo);
    const actual = intern.school;

    expect(actual).toBe(expected);
  });

  it("should get school when called", () => {
    const expected = internInfo.school;
    const intern = new Intern(internInfo);
    const actual = intern.getSchool();

    expect(actual).toBe(expected);
  });

  it("should override employeeRole via constructor", () => {
    const expected = "Intern";
    const intern = new Intern(internInfo);
    const actual = intern.employeeRole;

    expect(actual).toBe(expected);
  });

  it("should get employeeRole when called", () => {
    const expected = "Intern";
    const intern = new Intern(internInfo);
    const actual = intern.getRole();

    expect(actual).toBe(expected);
  });
});
