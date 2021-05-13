const Employee = require("./Employee");

class Engineer extends Employee {
  constructor({ github }) {
    super(github);
    this.github = github;
    this.employeeRole = "Engineer";
  }

  getGitHub() {
    return this.github;
  }

  getRole() {
    return this.employeeRole;
  }
}

module.exports = Engineer;
