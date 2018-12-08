class GifImage {
    constructor(name = 'unnamed image') {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if (name.match(/\.gif$/)) {
            this._name = name;
        }
    }
}

module.exports = GifImage;