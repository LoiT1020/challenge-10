const inquirer = require("inquirer");
const Employee = require("./Employee");
const Manager = require("./Manager");

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
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter right name!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "what is the employee email?",
        },
        {
          type: "input",
          name: "ID",
          message: "what is the member employee ID",
        },
        {
          type: "list",
          name: "position",
          message: "what is the member position in the team",
          choices: ["manager", "engineer", "intern"],
        },
      ])
      .then(({ name, email, ID, position }) => {
        this.Em = new Employee(name, email, ID,position);
        console.log(this.Em.position);
        // this.member.push(this.Em);
        this.getposition(this.Em.position);
       
      });
  }
  getposition(position){
    
    switch(position){
      case 'manager':

        inquirer.prompt ({
          type:'input',
          name:'officenumber',
          message:'what is the officenumber?',
        }).then(officenumber=>{console.log(this.Em);
           this.Em=new Manager;
          console.log(this.Em);
        })
        break;
      // case 'engineer':
      // break;
      // case 'intern':
      // break;
    }}
};




module.exports = Team;
