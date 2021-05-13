class Employee {
  constructor({ employeeName }) {
    this.employeeName = employeeName;
  }

  getName() {
    return this.employeeName;
  }
}

module.exports = Employee;
