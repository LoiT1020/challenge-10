const inquirer = require("inquirer");
const Employee = require("./Employee");


class Team {
  constructor() {
    this.member = [];
  }

  addingnewmember() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "what is the first and last name of the member",
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter right name!');
              return false;
            }
          }
        },
        {
          type: "list",
          name: "position",
          message: "what is the member position in the team",
          choices: ["manager", "engineer", "intern"],
        },
        {
          type: "input",
          name: "ID",
          message: "what is the member employee ID",
        },
      ])
      .then(({ name, position, ID }) => {
        this.Em = new Employee(name, position, ID);
        console.log(this.Em);
      });
  }
}

module.exports = Team;
