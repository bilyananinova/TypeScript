class Car {
    public brand: string;
    public model: string;
    public horsePower: number;

    constructor(brand: string, model: string, horsePower: number) {
        this.brand = brand;
        this.model = model;
        this.horsePower = horsePower;
    }

    get carBrand() {
        return this.brand;
    }

    set carBrand(brand: string) {
        this.brand = brand;
    }

    get carModel() {
        return this.model;
    }

    set carModel(model: string) {
        this.model = model;
    }

    get carHorsePower() {
        return this.horsePower;
    }

    set carHorsePower(horsePower: number) {
        this.horsePower = horsePower;
    }

    carDetail(): void {
        console.log(`The car is: ${this.brand} ${this.model} – ${this.horsePower} HP.`);
    }
}

let car = new Car('Chevrolet', 'Impala', 390);
car.carDetail();

car.carBrand = 'Skoda';
car.carModel = 'Karoq';
car.carHorsePower = 150;
car.carDetail();
