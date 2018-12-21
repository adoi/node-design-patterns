const PaymentStrategy = require('./PaymentStrategy');

class Payment {
    constructor(strategy='creditCardPay') {
        this.strategy = PaymentStrategy[strategy];
    }

    changeStrategy(newStrategy) {
        this.strategy = PaymentStrategy[newStrategy];
    }

    pay() {
        this.strategy(); 
    }

}

module.exports = new Payment();