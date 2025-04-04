function toyShop(vacationPrice, puzzleCount, talkingDollCount, teddyBearCount, minionCount, truckCount){
    let puzzlePricce = 2.60 *puzzleCount;
    let talkingDollPrice = 3 * talkingDollCount;
    let teddyBearPrice = 4.10 * teddyBearCount;
    let minionPrice = 8.20 * minionCount;
    let truckPrice = 2 * truckCount;
    let deliveredToys = puzzleCount + talkingDollCount + teddyBearCount + minionCount + truckCount;
    let earnedMoney = Number(puzzlePricce + talkingDollPrice + teddyBearPrice + minionPrice + truckPrice);
    if(deliveredToys >= 50){
        earnedMoney *= 0.75; 
    }
     earnedMoney *= 0.90;
    if(earnedMoney >= vacationPrice){
        let remainigMoney = earnedMoney - vacationPrice;
        console.log(`Yes! ${remainigMoney.toFixed(2)} lv left.`);
    } else {
        let neededMoney = vacationPrice - earnedMoney;
        console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`);
    }
}
toyShop();