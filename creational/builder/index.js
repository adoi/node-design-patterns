const User = require('./User');

const firstIn = new User.UserBuilder('1')
    .withName('Anne')
    .withEmail('anne@gmail.com')
    .build();

const secondIn = new User.UserBuilder('2')
    .withName('John')
    .withEmail('johndoe@outlook.com')
    .build();

console.log(firstIn);
console.log(secondIn);