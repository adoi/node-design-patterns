const User = require('./User');
const Employee = require('./Employee');

const user = new User('John');
user.getInfo();

const employee = new Employee(user, 'admin', 40);
employee.getInfo();