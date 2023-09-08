class BankAccount {
  constructor (saldo) {
    this.saldo = saldo;
  }

  deposit (amount) {
    if (!isNaN (amount) && amount >= 0) {
      this.saldo += amount;
      setTimeout (() => {
        console.log (`Saldo baru: ${this.saldo}`);
      }, 3000);
    } else {
      console.log ('Masukkan jumlah saldo yang valid.');
    }
  }

  withdraw (amount) {
    if (!isNaN (amount) && amount >= 0 && amount <= this.saldo) {
      this.saldo -= amount;
      csetTimeout (() => {
        console.log (`Saldo baru: ${this.saldo}`);
      }, 3000);
    } else {
      console.log ('Masukkan jumlah saldo yang valid.');
    }
  }
}

let bank = new BankAccount (1000000);
bank.deposit (300000);
bank.withdraw (300000);
