interface Dealership<T> {
    dealershipName: T;
    soldCars: number;
}
interface Actions<A> {
    sellCar(dealerID: A, model: A): void;
}

class CarDealership<T, A> implements Dealership<T>, Actions<A> {
    public dealershipName: T;
    public soldCars: number = 0;

    static modelsSold: object = {};

    constructor(dealrshipName: T) {
        this.dealershipName = dealrshipName;
    }

    sellCar(dealerID: A, model: A): void {
        this.soldCars++;
        CarDealership.modelsSold[dealerID.toString()] = model;
    };

    showDetails(): string {
        console.log(this.dealershipName);
        let print = '';
        Object.keys(CarDealership.modelsSold).forEach(car => {
            print += `${car} sold ${CarDealership.modelsSold[car]} \n`;
        });

        return print;
    }
}


let dealership = new CarDealership('SilverStar');

dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());



