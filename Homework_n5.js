function multiplyWithoutOperator(a, b) {
    let product = 0
    for (let i = 0; i < b; i++) {
        product += a
    }
    return product
}
let product = multiplyWithoutOperator(3,4)
console.log(product)