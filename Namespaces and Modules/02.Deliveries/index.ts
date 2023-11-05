///<reference path= "FoodAndBeverages.ts"/>

class Courier implements FoodAndBeverages.Delivery {
    protected placesTovisit: { [key: string]: string | boolean }[];

    constructor(placesTovisit: { [key: string]: string | boolean }[]) {
        this.placesTovisit = placesTovisit;
    }

    newCustomer(customerName: string, visited: boolean = false): void | string {
        if (this.placesTovisit.find(c => c.customerName == customerName)) {
            throw new Error(`${customerName} is already a customer of yours!`);
        } else {
            let obj = { customerName, visited }
            this.placesTovisit.push(obj);
            return `${customerName} just became your client.`;
        }
    }

    visitCustomer(customerName: string): void | boolean {
        let customerObj = this.placesTovisit.find(c => c.customerName == customerName);

        if (!customerObj) {
            throw new Error(`${customerName} is not your customer`);
        } else {
           return customerObj.visited = true;
        }
    }

    showCustomers(): string {
        let print: string = '';

        this.placesTovisit.forEach(p => {            
            print += `${p.customerName} -> ${p.visited}\n`;
        })

        return print;
    }

}


let courier = new Courier([{ customerName: 'DHL', visited: false }]);

courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');

courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');

console.log(courier.showCustomers());
