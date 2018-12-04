class Singleton {
    constructor() {
        this.messages = [];
    }

    sendMessage(content) {
        this.messages.push(content);
    }
}

module.exports = new Singleton;