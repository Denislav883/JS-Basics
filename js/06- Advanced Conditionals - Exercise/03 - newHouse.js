function newHouse(typeOfFlower, flowerCount, budget){
let totalPrice = 0;
switch(typeOfFlower){
    case "Roses" : totalPrice = 5 * flowerCount; 
        if(flowerCount > 80){
            totalPrice *= 0.9;
    } 
    break;
    case "Dahlias" : totalPrice = 3.80 * flowerCount; 
        if(flowerCount > 90){
            totalPrice *= 0.85;
        } break;
    case "Tulips" : totalPrice = 2.80 * flowerCount;  
        if(flowerCount > 80){
            totalPricetotalPrice *= 0.85;
        } 
        break;
    case "Narcissus" : totalPrice = 3 * flowerCount; 
        if(flowerCount < 120){
            totalPrice *= 1.15;
        } 
        break;
    case "Gladiolus" : totalPrice = 2.50 * flowerCount;
        if(flowerCount < 80){
            totalPrice *= 1.20 ;
        } 
        break;
}
let moneyLeft = budget - totalPrice;
    let moneyNeeded = totalPrice - budget;
if(budget >= totalPrice){
    console.log(`Hey, you have a great garden with ${flowerCount} ${typeOfFlower} and ${moneyLeft.toFixed(2)} leva left.`)
} else if( budget < totalPrice ){
    console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
}
}
newHouse();