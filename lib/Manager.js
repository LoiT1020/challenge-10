const Employee = require("./Employee");

class Manager extends Employee{
    constructor(info,officenumber=''){
       super(info)
        this.position='manager'
        this.officenumber=officenumber
    }
}
module.exports = Manager;
