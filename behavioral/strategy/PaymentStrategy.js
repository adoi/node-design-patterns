class PaymentStrategy {
    static creditCardPay() {
        /* ... */
        console.log('Performed credit card payment');
    }

    static paypalPay() {
        /* ... */
        console.log('Performed paypal payment');
    }

    static cryptoPay() {
        /* ... */
        console.log('Performed crypto payment');
    }

    static none() {
        /* ... */
        console.log('No payment requested');
    }
}

module.exports = PaymentStrategy;