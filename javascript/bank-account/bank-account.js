function assert(condition) {
  if (!condition) throw new ValueError();
}

export class BankAccount {
  constructor() {
    this._isOpen = false;
    this._balance = 0;
  }

  get balance() {
    assert(this._isOpen);
    return this._balance;
  }

  open() {
    assert(!this._isOpen);
    this._isOpen = true;
  }

  close() {
    assert(this._isOpen);
    this._balance = 0;
    this._isOpen = false;
  }

  deposit(amount) {
    assert(this._isOpen && amount >= 0);
    this._balance += amount;
  }

  withdraw(amount) {
    assert(amount >= 0 && this.balance >= amount);
    this._balance -= amount;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
