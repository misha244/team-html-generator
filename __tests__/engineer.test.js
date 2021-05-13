const Engineer = require("../src/lib/Engineer");

describe("Engineer", () => {
  const engineerInfo = {
    employeeName: "Corrado",
    employeeId: "420",
    employeeEmail: "unclejun@yahoo.com",
    github: "unclejun",
  };

  it("should set up github via constructor fn", () => {
    const expected = engineerInfo.github;
    const engineer = new Engineer(engineerInfo);
    const actual = engineer.github;

    expect(actual).toBe(expected);
  });

  it("should get GitHub when called", () => {
    const expected = engineerInfo.github;
    const engineer = new Engineer(engineerInfo);
    const actual = engineer.getGitHub();

    expect(actual).toBe(expected);
  });

  it("should override employeeRole via constructor", () => {
    const expected = "Engineer";
    const engineer = new Engineer(engineerInfo);
    const actual = engineer.employeeRole;

    expect(actual).toBe(expected);
  });

  it("should get employeeRole when called", () => {
    const expected = "Engineer";
    const engineer = new Engineer(engineerInfo);
    const actual = engineer.getRole();

    expect(actual).toBe(expected);
  });
});
