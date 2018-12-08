class PngImage {
    constructor(name = 'unnamed image') {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if (name.match(/\.png$/)) {
            this._name = name;
        }
    }
}

module.exports = PngImage;