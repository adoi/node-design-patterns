const JpegImage = require('./JpegImage');
const GifImage = require('./GifImage');
const PngImage = require('./PngImage');

const createImage = name => {
    if (name.match(/\.jpeg$/)) {
        return new JpegImage(name);
    } else if (name.match(/\.gif$/)) {
        return new GifImage(name);
    } else if (name.match(/\.png$/)) {
        return new PngImage(name);
    } else {
        throw new Error('This is an unsupported format');
    }
}

module.exports = createImage;