import { Drink } from "./Drink";

export class VendingMachine {

    buttonCapacity: number;
    drinks: Drink[];
    getCount: number = 0;

    constructor(buttonCapacity: number) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }

    addDrink(drink: Drink): void {
        if (this.buttonCapacity > 0) {
            this.drinks.push(drink);
            this.buttonCapacity--;
            this.getCount = this.drinks.length;
        }
    }

    removeDrink(name: string): boolean {
        let drink = this.drinks.find(d => d.name == name);

        if (drink) {
            let index = this.drinks.findIndex(d => d.name == name);
            this.drinks.splice(index, 1);
            this.buttonCapacity++;
            this.getCount = this.drinks.length;
            return true;
        }

        return false;
    }

    getLongest(): string {
        let drink = this.drinks.sort((a, b) => b.volume - a.volume)[0];
        return drink.toString();
    }

    getCheapest(): string {
        let drink = this.drinks.sort((a, b) => a.price - b.price)[0];
        return drink.toString();
    }

    buyDrink(name: string): string {
        let drink = this.drinks.find(d => d.name == name) as Drink;
        return drink.toString();
    }

    report(): string {
        let print: string[] = [];

        print.push(`Drinks available:`);

        this.drinks.forEach(d => {
            print.push(`${d.toString()}`)
        });

        return print.join('\n');
    }
}