const Employee = require('./Employee');
const Iterator = require('./Iterator');

const employees = new Iterator([
    new Employee('Callie Boyle', 'Backend Developer'),
    new Employee('Jane Doe', 'Devops Architect'),
    new Employee('Andres Avila', 'Frontend Developer'),
    new Employee('Marley Kelly', 'Android Developer'),
    new Employee('Arielle Ball', 'iOS Developer')
]);

// For each method there are tester console logs. 
// To test them uncomment lies 18, 23, 28-31, 36-38, 43-44, 49-50 sequentially

/**
 * Get the first Employee
 */
// console.log(employees.first());

/**
 * Get the last Employee
 */
// console.log(employees.last());

/**
 * Get the next employee
 */
// employees.next();
// employees.next();
// employees.next();
// console.log(employees.next());

/**
 * Get the previous employee
 */
// employees.next();
// employees.next();
// console.log(employees.prev());

/**
 * Get the current employee
 */
// employees.next();
// console.log(employees.current());

/**
 * Check if there is a next value
 */
employees.next();
console.log(employees.hasNext()); 
