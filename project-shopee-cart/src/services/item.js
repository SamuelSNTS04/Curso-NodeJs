async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subTotal: () => quantity * price
    }
}

export default createItem;