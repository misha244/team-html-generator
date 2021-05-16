// the base questions that apply to all employees

const baseQuestions = [
  {
    type: "input",
    message: "Please enter the employee's name: ",
    name: "name",
  },
  {
    type: "number",
    message: "Please enter the employee's ID number: ",
    name: "employeeID",
  },
  {
    type: "input",
    message: "Please enter the employee's email address: ",
    name: "email",
  },
];

module.exports = baseQuestions;
