function yardGreening(squareMetres){
 let pricePerSquareMetres = 7.61;
 let finalPrice = squareMetres * pricePerSquareMetres;
 let discount = 0.18 * finalPrice;
 let totalPrice = finalPrice - discount;
 console.log (`The final price is: ${totalPrice} lv. `)
 console.log (`The discount is: ${discount} lv.`)
}
yardGreening();