'use strice';

//////////////////////////////////////////////////////////////////////
/// Encapsulation: Private Class Fields and Methods

// 1) Public fields

//// they should be on all instances and doesn't depend on a specific instance
//// eg: the locale! (we define it outside the methods)

// 2) Private fields

//// they are the same but can't be accessed from outside
//// eg: the mission critical movement array! (we use private fields(#))

// 3) Public methods

//// the regualr methods (APIs)

// 4) Private methods (eg: approveLoan())

//// the #methods

// STATIC versions of these 4

//// are applied on the class itself not on the instances!
//// there are also #(private) ones (they are only used on the inside of class)

class Account {
  locale = navigator.language;
  bank = 'Bankist';
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('loan approved');
    }
  }

  static TestStatic() {
    console.log('Static test');
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// don't manipulate properties yourself like this:
// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);

// but should we also be able to do these????
acc1.requestLoan(1000);
// acc1.approveLoan(1000); // ;(

Account.TestStatic();
