function shopping(budget, videoCardCount, processorCount, ramMemoryCount){
let videoCardPrice = 250 * videoCardCount;
let processorPrice = (0.35 * videoCardPrice) * processorCount;
let ramMemoryPrice = (0.10 * videoCardPrice) * ramMemoryCount;
let totalSum = videoCardPrice + processorPrice + ramMemoryPrice;
if(videoCardCount > processorCount){
    totalSum *= 0.85;
}

if(budget >= totalSum){
    let budgetLeft = budget - totalSum;
    console.log(`You have ${budgetLeft.toFixed(2)} leva left! `);
} else {
    let moneyNeeded = totalSum - budget;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more! `);
}
}
shopping();