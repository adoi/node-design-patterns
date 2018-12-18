class Iterator {
    constructor(items) {
        this.index = 0;
        this.items = items;
    }

    first() {
        const [first] = this.items;
        return first;
    }

    last() {
        return this.items[this.items.length-1];
    }

    next() {
        if (this.hasNext()) {
            this.index += 1;
        }
        return this.current();
    }

    prev() {
        if (this.index !== 0) {
            this.index -= 1;
        }
        return this.current();
    }

    hasNext() {
        return this.index < this.items.length - 1;
    }

    current() {
        return this.items[this.index];
    }
}

module.exports = Iterator;