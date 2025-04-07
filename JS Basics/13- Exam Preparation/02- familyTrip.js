function familyTrip(budget, overnightStayCount, pricePerOvernightStay, percentBonusExpenses) {

    if (overnightStayCount > 7) {
        pricePerOvernightStay *= 0.95;
    }

    let totalPriceForVacation = overnightStayCount * pricePerOvernightStay;
    let totalBudget = budget - ((percentBonusExpenses * budget) / 100);

    if (totalBudget >= totalPriceForVacation) {
        console.log(`Ivanovi will be left with ${(totalBudget - totalPriceForVacation).toFixed(2)} leva after vacation.`);
    } else if (totalBudget < totalPriceForVacation) {
        console.log(`${(totalPriceForVacation - totalBudget).toFixed(2)} leva needed.`);

    }
}
familyTrip();