function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    expenses = 0;

    for (let currentLostFight = 1; currentLostFight <= lostFightsCount; currentLostFight++) {

        if (currentLostFight % 2 === 0) {
            expenses += helmetPrice;
        }

        if (currentLostFight % 3 === 0) {
            expenses += swordPrice;
        }

        if (currentLostFight % 6 === 0) {
            expenses += shieldPrice;
        }

        if (currentLostFight % 12 === 0) {
            expenses += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${(expenses).toFixed(2)} aureus`);

}
gladiatorExpenses();