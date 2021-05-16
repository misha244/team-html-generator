const Employee = require("./Employee");

class Intern extends Employee {
  constructor({ school, ...rest }) {
    super(rest);
    this.school = school;
    this.employeeRole = "Intern";
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return this.employeeRole;
  }
}

module.exports = Intern;
