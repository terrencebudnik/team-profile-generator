const fs = require('fs');
const inquirer = require('inquirer');
const genHTML = require('./Dist/genHTML'); 
const managerPrompt = require('./Src/prompts')

function init() {
inquirer
.prompt([
  {
    type: 'confirm',
    message: "Would you like to add a new team?",
    name: 'new',
  }
])

.then((response)=> {
  fs.writeFile('index.html', genHTML(),(err) =>
    err ? console.log(err) : managerPrompt())
})
}

init()
