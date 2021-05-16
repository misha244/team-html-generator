const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");

const renderIntern = (employee) => {
  return ` 
  <div class="card m-3 bg-light border-dark" style="width: 14rem">
  <div class="card-header bg-danger text-light">
    ${employee.employeeName}
    <div><i class="fas fa-cat"></i> Intern</div>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${employee.employeeId}</li>
      <li class="list-group-item">
      Email: <a href="mailto:${employee.employeeEmail}">${employee.employeeEmail}</a>
      </li>
      <li class="list-group-item">School: ${employee.school}</li>
    </ul>
  </div>
</div>
</div>
 `;
};
const renderManager = (employee) => {
  return `
  <div class="card m-3 bg-light border-dark" style="width: 14rem">
  <div class="card-header bg-danger text-light">
  ${employee.employeeName}
    <div><i class="fas fa-cat"></i> Manager</div>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${employee.employeeId}</li>
      <li class="list-group-item">
      Email: <a href="mailto:${employee.employeeEmail}">${employee.employeeEmail}</a>
      </li>
      <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
    </ul>
  </div>
  </div>`;
};
const renderEngineer = (employee) => {
  return `<div class="card m-3 bg-light border-dark" style="width: 14rem">
  <div class="card-header bg-danger text-light">
  ${employee.employeeName}
    <div><i class="fas fa-cat"></i> Engineer</div>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${employee.employeeId}</li>
      <li class="list-group-item">
      Email: <a href="mailto:${employee.employeeEmail}">${employee.employeeEmail}</a>
      </li>
      <li class="list-group-item">
      GitHub Link: <a href="https://github.com/${employee.github}">${employee.github}</a> 
      </li>
    </ul>
  </div>
</div>`;
};

const generateHTML = (employees) => {
  const renderCards = (employee) => {
    if (employee instanceof Manager) {
      console.log(employee, "1");
      return renderManager(employee);
    }
    if (employee instanceof Engineer) {
      console.log(employee, "1");
      return renderEngineer(employee);
    }
    if (employee instanceof Intern) {
      console.log(employee, "1");
      return renderIntern(employee);
    }
  };

  const employeeCards = employees.map(renderCards);

  console.log(employeeCards);

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
    </head>
    <body>
      <header class="navbar justify-content-center bg-danger mb-4 p-5">
        <h1 class="text-light">My Team</h1>
      </header>
  
      <div
        class="container-fluid justify-content-center d-flex manager-container"
      >
      ${employeeCards.join("")}
      </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
  `;
};

module.exports = generateHTML;
