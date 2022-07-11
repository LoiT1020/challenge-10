const Employee = require('../lib/Employee');

test('create a employee object',() =>{
    const Em= new Employee ('Loi');
    
    expect (Em.name).toBe('Loi');
})
test('get employee name',() =>{
    const Em= new Employee ('Loi','Email','ID')
    expect(Em.name).toBe('Loi');
})
test('get employee ID',() =>{
    const Em= new Employee ('Loi','Email','ID')
    expect(Em.ID).toBe('ID');
})
test('get employee Email',() =>{
    const Em= new Employee ('Loi','Email','ID')
    expect(Em.email).toBe('Email');
})
test('get employee position',() =>{
    const Em= new Employee ('Loi','Email','ID','abc')
    expect(Em.getrole()).toEqual('employee');
})