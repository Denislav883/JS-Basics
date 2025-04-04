function foodDelivery(meatMenu, fishMenu, vegetarianMenu){
let meatMenuPrice = meatMenu * 10.35; 
let fishMenuPrice = fishMenu * 12.40;
let vegetarianMenuPrice = vegetarianMenu * 8.15;
let totalPrice = meatMenuPrice + fishMenuPrice + vegetarianMenuPrice;
let desertMenuPrice = 0.20 * totalPrice;
let totalPriceForDelivery = totalPrice + desertMenuPrice + 2.50;
console.log (totalPriceForDelivery);
}
foodDelivery();