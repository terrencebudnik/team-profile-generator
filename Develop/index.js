const fs = require('fs');
const genHTML = require('./Dist/genHTML'); 




function init() {
    fs.writeFile('index.html', genHTML(),(err) =>
  err ? console.log(err) : console.log("Check out HTML!"))
}

init()