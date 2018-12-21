const payment = require('./Payment');

// The default is a credit card payment
payment.pay();
payment.pay();

// Now the strategy is changed to paypal
payment.changeStrategy('paypalPay');
payment.pay();

// Now the strategy is changed to crypto
payment.changeStrategy('cryptoPay');
payment.pay();
payment.pay();

// And finally we set the strategy to none
payment.changeStrategy('none');
payment.pay();