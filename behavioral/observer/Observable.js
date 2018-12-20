class Observable {
    constructor() { 
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    notifyAll() {
        this.observers.map(observer => observer.notify());
    }
}

module.exports = Observable;