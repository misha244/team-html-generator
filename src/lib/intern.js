const Employee = require("./Employee");

class Intern extends Employee {
  constructor({ school }) {
    super(school);
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
