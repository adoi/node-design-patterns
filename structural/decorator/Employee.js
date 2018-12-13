class Employee {
    constructor(user, role, hours) {
        this.user = user;
        this.name = user.name;
        this.role = role;
        this.hours = hours;
    }

    getInfo() {
        console.log(`Decorated User: ${this.name}, ${this.role}, ${this.hours}`);
    }
}

module.exports = Employee;