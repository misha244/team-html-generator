const Intern = require("../lib/Intern");
const getAnswers = require("./getAnswers");
const baseQuestions = require("./baseQuestions");

const createIntern = async () => {
  const questions = [
    ...baseQuestions,
    {
      type: "input",
      message: "Please enter the intern's school: ",
      name: "school",
    },
  ];

  const answers = await getAnswers(questions);

  const intern = new Intern(answers);

  return intern;
};

module.exports = createIntern;
