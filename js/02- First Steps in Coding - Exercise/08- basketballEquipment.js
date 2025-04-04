function basketallEquipment (yearTax){
let basketballTrousers = yearTax - ( 0.40 * yearTax );
let equipmentForBasketball = basketballTrousers - ( 0.20 * basketballTrousers );
let basketballBall = equipmentForBasketball/ 4;
let basketballAcseaccessories = basketballBall/ 5;
let expenses = basketballTrousers + equipmentForBasketball + basketballBall + basketballAcseaccessories + yearTax;
console.log(expenses);
}
basketballballEquipment();