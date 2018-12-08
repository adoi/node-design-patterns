const imageFactory = require('./imageFactory');

const jpegImage = imageFactory('someImage.jpeg');
const gifImage = imageFactory('someImage.gif');
const pngImage = imageFactory('someImage.png');

console.log(jpegImage.name);
console.log(gifImage.name);
console.log(pngImage.name);