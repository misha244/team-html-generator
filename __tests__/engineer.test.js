const Engineer = require("../src/lib/Engineer");

describe("Engineer", () => {
  const engineerInfo = {
    employeeName: "Corrado",
    employeeId: "420",
    employeeEmail: "unclejun@yahoo.com",
    github: "unclejun",
  };

  it("should set up github through constructor fn", () => {
    const expected = engineerInfo.github;
    const engineer = new Engineer(engineerInfo);
    const actual = engineer.github;

    expect(actual).toBe(expected);
  });
});
