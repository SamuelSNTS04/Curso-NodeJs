const { getFullName, productType } = require('./services/products');
const config = require('./services/config');
const database = require('./services/database');

async function main() {
    console.log("carrinho compras:");

    console.log(productType);
    // getProductLabel("mouse");
    console.log(config.prodution);

}

main();