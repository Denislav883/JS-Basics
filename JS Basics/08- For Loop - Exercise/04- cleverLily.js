function cleverLily(ageLily, washerPrice, pricePerToy ){
    let savedMoney = 0;
    let moneyGifted = 10;

    for(let birthday = 1; birthday <= ageLily; birthday++) {

        if(birthday % 2 === 0){
            savedMoney += moneyGifted - 1;
            moneyGifted += 10;
        } else {
            savedMoney += pricePerToy;
        }

        }

    if(savedMoney >= washerPrice){
        let moneyLeft = savedMoney - washerPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else{
        let moneyNeeded = washerPrice - savedMoney;
        console.log(`No! ${moneyNeeded.toFixed(2)}`)
    }
}
cleverLily();