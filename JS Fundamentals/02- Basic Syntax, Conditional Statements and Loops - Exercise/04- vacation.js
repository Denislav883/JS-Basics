function vacation(peopleCount, typeOfThGroup, dayOfTheWeek) {
    let singlePrice = 0;

    switch (typeOfThGroup) {
        case "Students":

            if (dayOfTheWeek === "Friday") {
                singlePrice = 8.45;
            } else if (dayOfTheWeek === "Saturday") {
                singlePrice = 9.80;
            } else {
                singlePrice = 10.46;
            }
            break;

        case "Business":

            if (dayOfTheWeek === "Friday") {
                singlePrice = 10.90;
            } else if (dayOfTheWeek === "Saturday") {
                singlePrice = 15.60;
            } else {
                singlePrice = 16;
            }
            break;

        case "Regular":

            if (dayOfTheWeek === "Friday") {
                singlePrice = 15;
            } else if (dayOfTheWeek === "Saturday") {
                singlePrice = 20;
            } else {
                singlePrice = 22.50;
            }
            break;
    }

    let totalPrice = peopleCount * singlePrice;

    if (typeOfThGroup === "Students" && peopleCount >= 30) {
        totalPrice *= 0.85;
    } else if (typeOfThGroup === "Business" && peopleCount >= 100) {
        totalPrice -= 10 * singlePrice;
    } else if(typeOfThGroup === "Regular" && peopleCount >= 10 && peopleCount <= 20){
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${(totalPrice).toFixed(2)}`);
}
vacation();