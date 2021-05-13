const Employee = require("./Employee");

class Engineer extends Employee {
  constructor({ github }) {
    super(github);
    this.github = github;
  }

  getGitHub() {
    return this.github;
  }
}

module.exports = Engineer;
