"use strict";
function cities(input) {
    let products = {};
    for (let i = 0; i < input.length; i++) {
        let [town, product, price] = input[i].split(' | ');
        if (products[product] == undefined) {
            products[product] = { town, price: Number(price) };
        }
        else {
            if (products[product].price > Number(price)) {
                products[product] = { town, price: Number(price) };
            }
        }
    }
    for (const product in products) {
        console.log(`${product} -> ${products[product].price} (${products[product].town})`);
    }
}
;
cities(['Sample Town | Sample Product | 1000', 'Sample Town | Orange | 2', 'Sample Town | Peach | 1', 'Sofia | Orange | 3',
    'Sofia | Peach | 2', 'New York | Sample Product | 1000.1', 'New York | Burger | 10']);
//# sourceMappingURL=02.index.js.map