function movieDestination(budget, destination, season, dayCount) {
    let totalPrice = 0;
    
    switch (season) {
        case "Winter" :

            if (destination === "Dubai") {
                totalPrice = dayCount * 45000;
            } else if (destination === "Sofia") {
                totalPrice = dayCount * 17000;
            } else {
                totalPrice = dayCount * 24000;
            }
            break;

        case "Summer" :

            if (destination === "Dubai") {
                totalPrice = dayCount * 40000;
            } else if (destination === "Sofia") {
                totalPrice = dayCount * 12500;
            } else {
                totalPrice = dayCount * 20250;
            }
            break;
    }

    if (destination === "Dubai") {
        totalPrice *= 0.7;
    } else if(destination === "Sofia"){
        totalPrice *= 1.25;
    }

    let difference = Math.abs(budget - totalPrice);

    if (budget >= totalPrice) {
        console.log(`The budget for the movie is enough! We have ${difference.toFixed(2)} leva left!`);
    } else if (totalPrice > budget) {
        console.log(`The director needs ${difference.toFixed(2)} leva more!`);
    }
}
movieDestination(1000000,

    "Dubai",

    "Summer",

    5);