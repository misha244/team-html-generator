const Employee = require("./Employee");

class Manager extends Employee {
  constructor({ officeNumber }) {
    super(officeNumber);
    this.officeNumber = officeNumber;
    this.employeeRole = "Manager";
  }

  getRole() {
    return this.employeeRole;
  }
}

module.exports = Manager;
