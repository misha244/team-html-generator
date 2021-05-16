const createIntern = require("./createIntern");
const createManager = require("./createManager");
const createEngineer = require("./createEngineer");
const getAnswers = require("./getAnswers");

const qsAndAs = async () => {
  const questions = [
    {
      type: "list",
      message: "Please enter the type of employee: ",
      name: "employee",
      choices: [
        {
          name: "Manager",
          value: "manager",
        },
        {
          name: "Engineer",
          value: "engineer",
        },
        {
          name: "Intern",
          value: "intern",
        },
        {
          name: "Exit",
          value: "exit",
        },
      ],
    },
  ];

  const answers = await getAnswers(questions);

  return answers;
};

const getEmployees = async () => {
  const employees = [];

  let inProgress = true;

  while (inProgress) {
    const answers = await qsAndAs();

    if (answers.employee === "exit") {
      inProgress = false;
    } else {
      if (answers.employee === "manager") {
        const manager = await createManager();
        employees.push(manager);
      } else if (answers.employee === "intern") {
        const intern = await createIntern();
        employees.push(intern);
      } else if (answers.employee === "engineer") {
        const engineer = await createEngineer();
        employees.push(engineer);
      }
    }
  }
  return employees;
};

module.exports = getEmployees;
