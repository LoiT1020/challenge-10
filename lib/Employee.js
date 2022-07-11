
class Employee {
    constructor(name='',email='',ID='',position=''){
        this.name=name;
        this.email=email;
        this.ID=ID;
        this.position=position;
    };
    getrole(){
        return this.position='employee'
    }
    }


module.exports =Employee;