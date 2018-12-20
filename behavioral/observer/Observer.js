class Observer {
    constructor(name) {
        this.name = name;
    }

    notify() {
        console.log(`${this.name} is notified`);
    }
}

module.exports = Observer;