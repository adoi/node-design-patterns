class User {
    constructor(name) {
        this.name = name;
    }

    getInfo() {
        console.log(`User name: ${this.name}`);
    }
}

module.exports = User;