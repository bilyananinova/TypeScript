"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    constructor(buttonCapacity) {
        this.getCount = 0;
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    addDrink(drink) {
        if (this.buttonCapacity > 0) {
            this.drinks.push(drink);
            this.buttonCapacity--;
            this.getCount = this.drinks.length;
        }
    }
    removeDrink(name) {
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
    getLongest() {
        let drink = this.drinks.sort((a, b) => b.volume - a.volume)[0];
        return drink.toString();
    }
    getCheapest() {
        let drink = this.drinks.sort((a, b) => a.price - b.price)[0];
        return drink.toString();
    }
    buyDrink(name) {
        let drink = this.drinks.find(d => d.name == name);
        return drink.toString();
    }
    report() {
        let print = [];
        print.push(`Drinks available:`);
        this.drinks.forEach(d => {
            print.push(`${d.toString()}`);
        });
        return print.join('\n');
    }
}
exports.VendingMachine = VendingMachine;
