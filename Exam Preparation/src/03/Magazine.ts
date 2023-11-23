import { Cloth } from "./Cloth";

export class Magazine {

    type: string;
    capacity: number;
    clothes: Cloth[];

    constructor(type: string, capacity: number) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = []
    }

    addCloth(cloth: Cloth): void {
        if (this.capacity > 0) {

            this.clothes.push(cloth)
            this.capacity--;
        }
    }

    removeCloth(color: string): boolean {
        let findedCloth = this.clothes.find(c => c.color == color);

        if (findedCloth) {
            let index = this.clothes.findIndex(c => c.color == color);
            this.clothes.splice(index, 1);
            return true;
        }

        return false;
    }

    getSmallestCloth(): Cloth {
        let smalest = this.clothes.sort((a, b) => a.size - b.size);
        return smalest[0];
    }

    getCloth(color: string): Cloth {
        let clothwithColor = this.clothes.find(c => c.color == color);
        return clothwithColor as Cloth;
    }

    getClothCount(): number {
        return this.clothes.length;
    }

    report(): string {
        let print: string[] = [];

        print.push(`${this.type} magazine contains:`)

        this.clothes.sort((a, b) => a.size - b.size).forEach(cloth => {
            print.push(`${cloth.toString()}`)

        })

        return print.join('\n');
    }
}