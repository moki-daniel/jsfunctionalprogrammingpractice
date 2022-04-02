const products = [
    {
        name: "laptop",
        price: 1000,
        stockCount: 50
    },
    {
        name: "desktop",
        price:800,
        stockCount: 30
    },
    {
        name: "printers",
        price:300,
        stockCount: 40
    },
    {
        name: "blowers",
        price:1000,
        stockCount: 100
    },
];
const totalCostValueofEachProduct = products.map(product => ({
    name: product.name,
    totalValue: product.stockCount * product.price
}));

console.log(totalCostValueofEachProduct);
