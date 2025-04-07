function bitcoinMining(input) {
    let totalMoney = 0;
    let firstBitcoinDay = 0;
    let bitcoinBoughtCount = 0;
    let currentDay = 1;

    for (let goldQty of input) {
        if (currentDay % 3 === 0) {
            goldQty *= 0.7;
        }

        let moneyWon = goldQty * 67.51;
        totalMoney += moneyWon;

        while (totalMoney >= 11949.16){
            bitcoinBoughtCount++;
        totalMoney -= 11949.16;

        if (bitcoinBoughtCount === 1) {
            firstBitcoinDay = currentDay;
        }
    }

        currentDay++;
    }

    console.log(`Bought bitcoins: ${bitcoinBoughtCount}`);

    if (bitcoinBoughtCount > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }

    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)

}
bitcoinMining();