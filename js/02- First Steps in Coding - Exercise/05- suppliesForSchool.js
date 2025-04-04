function suppliesForSchool(pens, markers, litrePreparation, percentDiscount){
let pricePerPen = 5.80;
let pricePerMarkers = 7.20;
let preparation = 1.20 * litrePreparation;
let discount = percentDiscount / 100;
let totalPrice = pens * pricePerPen + markers * pricePerMarkers + preparation;
let totalPriceWithDiscount = totalPrice * discount;
let neededPrice = totalPrice - totalPriceWithDiscount;
console.log (neededPrice);
}
suppliesForSchool();