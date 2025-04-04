function fishingBoat(budget, season, fishermanCount){
let totalPrice = 0;
switch(season){
    case "Spring" : 
        totalPrice = 3000;
    break;

    case "Autumn" :
    case "Summer" :
        totalPrice = 4200;
    break;

    case "Winter" :
        totalPrice = 2600;
    break;
} 

if(fishermanCount <= 6){
    totalPrice *= 0.9;
} else if(fishermanCount <= 11){
    totalPrice *= 0.85;
} else {
    totalPrice *= 0.75;
}

if(fishermanCount % 2 === 0 && season !== "Autumn" ){
    totalPrice *= 0.95;
}
if(budget >= totalPrice){
    let moneyLeft = budget - totalPrice;
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
} else if(budget < totalPrice ){
    let moneyNeeded = totalPrice - budget;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
}
}
fishingBoat();