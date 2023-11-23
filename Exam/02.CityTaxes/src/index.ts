type City = {
    name: string,
    population: number,
    treasury: number,
    taxRate: number,
    collectTaxes: () => void;
    applyGrowth: (percentage: number) => void;
    applyRecession: (percentage: number) => void;
}

function cityTaxes(name: string, population: number, treasury: number): City {
    let result: City = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes(): void {
            this.treasury = Math.floor(this.treasury + (population * this.taxRate));
        },

        applyGrowth(percentage: number): void {
            this.population += Math.floor(this.population * (percentage / 100));

        },

        applyRecession(percentage: number): void {
            this.treasury -= Math.floor(this.treasury * (percentage / 100));
        },
    } 
    
    return result;

}

const city =
    cityTaxes('Tortuga',
        7000,
        15000);
console.log(city);

city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
