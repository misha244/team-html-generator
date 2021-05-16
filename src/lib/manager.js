const Employee = require("./Employee");

class Manager extends Employee {
  constructor({ officeNumber, ...rest }) {
    super(rest);
    this.officeNumber = officeNumber;
    this.employeeRole = "Manager";
  }

  getRole() {
    return this.employeeRole;
  }
}

module.exports = Manager;
