const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./Lib/manager.js');
const Engineer = require('./Lib/engineer.js');;
const Intern = require('./Lib/intern.js');


function internPrompt() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: "What is intern's name?",
        name: 'name',
      },
      {
        type: 'input',
        message: "What is the intern's ID number?",
        name: 'idNumber',
      },
      {
        type: 'input',
        message: "What is the intern's email address?",
        name: 'email',
      },
      {
        type: 'input',
        message: "What is the intern's current University?",
        name: 'school',
      }
    ])
    .then((response) => {
      fs.appendFileSync('index.html', internHTML(response));
      addEmployee();
    })
}

function engineerPrompt() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: "What is Engineer's name?",
        name: 'name',
      },
      {
        type: 'input',
        message: "What is the Engineer's ID number?",
        name: 'idNumber',
      },
      {
        type: 'input',
        message: "What is the Engineer's email address?",
        name: 'email',
      },
      {
        type: 'input',
        message: "What is the employee's GitHub?",
        name: 'github',
      }

    ])
    .then((response) => {
      fs.appendFileSync('index.html', engineerHTML(response));
      addEmployee();
    })

}



function managerPrompt() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: "What is manager's name?",
        name: 'name',
      },
      {
        type: 'input',
        message: "What is the manager's ID number?",
        name: 'idNumber',
      },
      {
        type: 'input',
        message: "What is the manager's email address?",
        name: 'email',
      },
      {
        type: 'input',
        message: "What is manager's office number?",
        name: 'office',
      }
    ])
    .then((response) => {
      fs.appendFileSync('index.html', managerHTML(response));
      addEmployee();
    })

}



function employeeType() {
  inquirer.
    prompt([
      {
        type: 'list',
        message: "What is the employee's title",
        name: 'position',
        choices: ["Manager", "Engineer", "Intern"],
      }
    ])
    .then((response) => {
      if (response.position === "Manager") {
        managerPrompt();
      } else if (response.position === "Engineer") {
        engineerPrompt();
      } else if (response.position === "Intern") {
        internPrompt();
      }
    })
}

function addEmployee() {
  inquirer.
    prompt([
      {
        type: 'list',
        message: "Would you like to add another team member?",
        name: 'new',
        choices: ["Yes", "No"]
      }
    ])
    .then((response) => {
      if (response.new === "Yes") {
        employeeType();
      } else if (response.new === "No") {
        console.log("Go to HTML to view team members")
      }
    })
}

function init() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: "What can I help you with today?",
        name: 'inital',
        choices: ["Add New Team", "Something else"],
      }
    ])
    .then((response) => {
      if (response.inital === "Add New Team") {
        fs.writeFile('index.html', genHTML(), (err) => console.log(err))
          addEmployee()
      } else if (response.initial === "Something else") {
        console.log("Please see your team lead for more details")
      }
    })
}

function managerHTML(response) {
  return `<div class="col">
          <div class="card" style="width:max-content">
              <div class="card-header bg-success text-white">Manager Name: ${response.name}</div>
              <div class="card-body">
                  <ul style="list-style:none">
                      <li>ID Number: ${response.idNumber}</li>
                      <li>Email: <span><a href="mailto:${response.email}">${response.email}</a></span></li>
                      <li>Office Number: ${response.office}</l>
                  </ul>
              </div>
          </div>
      </div>`
}
function engineerHTML(response) {
  return `<div class="col">
          <div class="card" style="width:max-content">
              <div class="card-header">Engineer Name: ${response.name}</div>
              <div class="card-body">
                  <ul style="list-style:none">
                      <li>ID Number: ${response.idNumber}</li>
                      <li>Email: <span><a href="mailto:${response.email}">${response.email}</a></span></li>
                      <li>GitHub Username: <span><a href="https://github.com/${response.github}">${response.github}</a></span></li>
                  </ul>
              </div>
          </div>
      </div>` 
}

function internHTML(response) {
  return `<div class="col">
          <div class="card" style="width:max-content">
              <div class="card-header">Intern Name: ${response.name}</div>
              <div class="card-body">
                  <ul style="list-style:none">
                      <li>ID Number: ${response.idNumber}</li>
                      <li>Email: <span><a href="mailto:${response.email}">${response.email}</a></span></li>
                      <li>School: ${response.school}</l>
                  </ul>
              </div>
          </div>
      </div>
    </div>
  `
}

function genHTML() {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Information</title>
</head>

<body>
 <nav class="navbar bg-primary">
  <div class="container-fluid justify-content-center">
      <h1 class="navbar-brand">My Team</h1>
  </div>
</nav>
<div class="container-fluid d-flex justify-content-center" style="margin-top:20px">
  <div class="row d-flex justify-content-center">
  `
}



init();
