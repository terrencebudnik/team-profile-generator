const fs = require('fs');
const inquirer = require('inquirer');
const createHTML = require('./Dist/genHTML.js'); 
const managerPrompt = require('./Src/prompts.js')

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
  fs.writeFile('index.html', createHTML(),(err) =>
    err ? console.log(err) : managerPrompt())
})
}

init()

module.exports= init; 
