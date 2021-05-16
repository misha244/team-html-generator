const writeToFile = require("./utils/writeToFile");
const generateHTML = require("./utils/generateHTML");
const getAllEmployees = require("./utils/getAllEmployees");

//init
const init = async () => {
  const employees = await getAllEmployees();

  const generatedHTML = generateHTML(employees);

  writeToFile(generatedHTML);
};

init();
