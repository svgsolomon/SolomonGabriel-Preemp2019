// module.exports.produs = function(url, descriere, pret) {
//   this.url = url;
//   this.descriere = descriere;
//   this.pret = pret;
//   console.log(url + " " + descriere + " " + pret);
// };
var fs = require("fs");
module.exports.addProduct = function(content) {
  fs.appendFile("mynewfile.JSON", content, function(err) {
    if (err) throw err;
  });
};
module.exports.citireConsole = function() {
  "use strict";
  var inquirer = require("inquirer");

  var questions = [
    {
      type: "input",
      name: "nume_produs",
      message: "Numele produsului: "
    },
    {
      type: "input",
      name: "descriere",
      message: "Descriere: "
    },
    {
      type: "input",
      name: "pret",
      message: "Pret:",
      validate: function(value) {
        var pass = value.match(/^\d+$/);
        if (pass) {
          return true;
        }

        return "Introduce doar cifre";
      }
    }
  ];

  inquirer.prompt(questions).then(answers => {
    const scris = JSON.stringify(answers, null, "  ");
    this.addProduct(scris);
  });
};
