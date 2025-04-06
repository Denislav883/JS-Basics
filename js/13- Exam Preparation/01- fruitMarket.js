function fruitMarket(strawberriesPrice, bananasQuantity, orangesQuantity, raspberriesQantity, strawberriesQuantity){
    let raspberriesPrice = strawberriesPrice / 2;
    let orangesPrice = 0.6 * raspberriesPrice;
    let bananasPrice = 0.2 * raspberriesPrice;

    let totalPrice = (strawberriesPrice * strawberriesQuantity) + (raspberriesPrice * raspberriesQantity) + (orangesPrice * orangesQuantity) + (bananasPrice * bananasQuantity);

    console.log(totalPrice.toFixed(2));
}
fruitMarket();