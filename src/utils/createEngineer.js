const Engineer = require("../lib/Engineer");
const getAnswers = require("./getAnswers");
const baseQuestions = require("./baseQuestions");

const createEngineer = async () => {
  const questions = [
    ...baseQuestions,
    {
      type: "input",
      message: "Please enter the engineer's GitHub username: ",
      name: "github",
    },
  ];

  const answers = await getAnswers(questions);

  const engineer = new Engineer(answers);

  return engineer;
};

module.exports = createEngineer;
