const singleton = require('./Singleton');

class A {
    constructor() {
        singleton.sendMessage('A was instansiated');
    }
}

module.exports = A;