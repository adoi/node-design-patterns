const singleton = require('./Singleton');
const A = require('./A');
const B = require('./B');

new A();
new B();

console.log(singleton.messages.length);