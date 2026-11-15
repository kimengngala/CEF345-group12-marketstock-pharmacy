const products = [
    {name:"Rice (50 kg back)", qty: 4, minQty: 2, buy: 21000, sell: 23500},
    {name:"Groundnut oil (1 L)", qty: 1, minQty: 6, buy: 1100, sell: 1300},
    {name:"Sugar (1 kg)", qty: 0, minQty: 5, buy: 750, sell: 900},
    {name:"Maggi cubes (packet)", qty: 3, minQty: 2, buy: 21000, sell: 23500},
];

const lowStock = products.filter(product => product.qty < product.minQty);

console.log("Products with low stock:");
for (const product of lowStock) {
    console.log(`${product.name} - Quantity: ${product.qty}, Minimum Required: ${product.minQty}`);
}

const stockValue = products.reduce((total, product) => total + (product.qty * product.buy), 0);
console.log(`Total stock value: ${stockValue}`);

const profitPerUnit = (p) => p.sell - p.buy;
const best = products.reduce((a, b) => (profitPerUnit(a) > profitPerUnit(b)) ? a : b);
console.log(`Best product to sell: ${best.name} (Profit per unit: ${profitPerUnit(best)})`);

const outOfStock = products.filter(product => product.qty === 0);
console.log("Products out of stock:");
for (const product of outOfStock) {
    console.log(`${product.name}`);
}
const sellValue = products.reduce((total, product) => total + (product.qty * product.sell), 0);
console.log(`Total potential sell value: ${sellValue}`);
console.log(`Total potential profit: ${sellValue - stockValue}`);
