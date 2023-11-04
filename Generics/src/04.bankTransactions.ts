abstract class CreateAccount<B, I> {
    bankName: B;
    bankID: I;

    constructor(bankName: B, bankID: I) {
        this.bankName = bankName;
        this.bankID = bankID
    }
}

class PersonalAccount<B, I> extends CreateAccount<B, I> {

    readonly ownerName: string;
    public money: number = 0;
    public recentTransactions: { [key: string]: number } = {};

    constructor(bankName: B, bankID: I, ownerName: string,) {
        super(bankName, bankID)
        this.ownerName = ownerName;
    }

    deposit(amount: number): number {
        return this.money += amount;
    }

    expense(amount: number, expenseType: string) {
        if (this.money >= amount) {
            if (this.recentTransactions.hasOwnProperty(expenseType)) {
                this.recentTransactions[expenseType] += amount;
            } else {
                this.recentTransactions[expenseType] = amount;
            }
            this.money -= amount;
        } else {
            throw new Error(`You cant make ${expenseType} transaction`);
        }
    }

    showDetails(): string {
        let totalMoneySpentOnExpenses: number = 0;

        Object.values(this.recentTransactions).forEach(v => totalMoneySpentOnExpenses += v);

        return `
        Bank name: ${this.bankName}
        Bank ID: ${this.bankID}
        Owner name: ${this.ownerName}
        Money: ${this.money}
        Money spent: ${totalMoneySpentOnExpenses}
        `
    }
}

let account = new PersonalAccount('DSK', 101240, 'Ivan Ivanov');

account.deposit(1000);
account.deposit(1000);
account.expense(700, 'Buy new phone');
account.expense(400, 'Book a vacation');
account.expense(400, 'Book a vacation');
account.expense(100, 'Buy food');
console.log(account.showDetails());


let account2 = new PersonalAccount('Fibank', 100000, 'Petar Petrol');

account2.deposit(10000);
account2.deposit(7000);
account2.expense(12000, 'Buy a new car');
account2.expense(200, 'Go to a fancy restaurant');
account2.expense(100, 'Go to a bar');
account2.expense(30, 'Go to the movies');
console.log(account2.showDetails());
