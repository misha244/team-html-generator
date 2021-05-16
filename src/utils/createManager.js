const Manager = require("../lib/Manager");
const getAnswers = require("./getAnswers");
const baseQuestions = require("./baseQuestions");

const createManager = async () => {
  const questions = [
    ...baseQuestions,
    {
      type: "input",
      message: "Please enter the manager's office number: ",
      name: "officeNumber",
    },
  ];

  const answers = await getAnswers(questions);

  const manager = new Manager(answers);

  return manager;
};

module.exports = createManager;
