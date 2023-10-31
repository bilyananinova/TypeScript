class BankAccount {
    private static id: number = 0;
    private balance: number = 0;
    private static rate: number = 0.02;
    readonly idsDetails: { id: number, balance: number }[] = [];

    constructor() { }

    create(): void {
        BankAccount.id++;

        this.idsDetails.push({ id: BankAccount.id, balance: 0 });

        console.log(`Account ID${BankAccount.id} created`);
    }

    deposite(id: number, amount: number): void {
        let acc = this.idsDetails.find((obj) => obj.id == id);

        if (acc) {
            acc.balance = amount;
            console.log(`Deposited ${amount} to ID${id}`);
        } else {
            console.log(`Account does not exist`);
        }
    }

    getInterest(id: number, years: number): void {
        let acc = this.idsDetails.find((obj) => obj.id == id);

        if (acc) {
            let interest = BankAccount.rate * years;
            let totalInterest = interest * acc.balance;
            console.log(totalInterest.toFixed(2));
        } else {
            console.log(`Account does not exist`);
        }
    }

    setInterestRate(interest: number): number {
        return BankAccount.rate = interest;
    }
}

let account = new BankAccount();
account.create();
account.create();
account.deposite(1, 20);
account.deposite(3, 20);
account.deposite(2, 10);
account.setInterestRate(1.5)
account.getInterest(1, 1);
account.getInterest(2, 1);
account.getInterest(3, 1);

