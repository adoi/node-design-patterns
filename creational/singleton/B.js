const singleton = require('./Singleton');

class B {
    constructor() {
        singleton.sendMessage('B was instansiated');
    }
}

module.exports = B;