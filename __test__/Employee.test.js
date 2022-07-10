const Employee = require('../lib/Employee');

test('create a employee object',() =>{
    const Em= new Employee ('Loi');
    
    expect (Em.name).toBe('Loi');
})