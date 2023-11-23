"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    addCloth(cloth) {
        if (this.capacity > 0) {
            this.clothes.push(cloth);
            this.capacity--;
        }
    }
    removeCloth(color) {
        let findedCloth = this.clothes.find(c => c.color == color);
        if (findedCloth) {
            let index = this.clothes.findIndex(c => c.color == color);
            this.clothes.splice(index, 1);
            return true;
        }
        return false;
    }
    getSmallestCloth() {
        let smalest = this.clothes.sort((a, b) => a.size - b.size);
        return smalest[0];
    }
    getCloth(color) {
        let clothwithColor = this.clothes.find(c => c.color == color);
        return clothwithColor;
    }
    getClothCount() {
        return this.clothes.length;
    }
    report() {
        let print = [];
        print.push(`${this.type} magazine contains:`);
        this.clothes.sort((a, b) => a.size - b.size).forEach(cloth => {
            print.push(`${cloth.toString()}`);
        });
        return print.join('\n');
    }
}
exports.Magazine = Magazine;
//# sourceMappingURL=Magazine.js.map