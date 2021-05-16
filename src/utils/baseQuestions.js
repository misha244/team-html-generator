// the base questions that apply to all employees

const baseQuestions = [
  {
    type: "input",
    message: "Please enter the employee's name: ",
    name: "employeeName",
  },
  {
    type: "number",
    message: "Please enter the employee's ID number: ",
    name: "employeeId",
  },
  {
    type: "input",
    message: "Please enter the employee's email address: ",
    name: "employeeEmail",
  },
];

module.exports = baseQuestions;
