function foodForPets(input) {
    days = Number(input[0]);
    totalFood = Number(input[1]);
    let daysCounter = 0;
    let totalDogEatenFood = 0;
    let totalCatEatenFood = 0;
    let totalEatenFood  = 0
    let totalBiscuitsEaten = 0;
    let biscuitsEaten = 0

    for (let i = 2; i <= input.length - 1; i++) {
        let dogEatenFood = Number(input[i]);
        i++;
        let catEatenFood = Number(input[i]);

         totalDogEatenFood += dogEatenFood;
         totalCatEatenFood += catEatenFood;

         totalEatenFood = totalDogEatenFood + totalCatEatenFood;

        daysCounter++;

        if (daysCounter % 3 === 0) {
             biscuitsEaten = (10 * (dogEatenFood + catEatenFood)) / 100;
             totalBiscuitsEaten += biscuitsEaten;
        }
    }
    
    let totalEatenFoodPercent = (totalEatenFood / totalFood) * 100;
    let dogEatenFoodPercent = totalDogEatenFood / totalEatenFood * 100;
    let catEatenFoodPercent = totalCatEatenFood / totalEatenFood * 100;

    console.log(`Total eaten biscuits: ${Math.round(totalBiscuitsEaten)}gr.`);
    console.log(`${totalEatenFoodPercent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogEatenFoodPercent.toFixed(2)}% eaten from the dog.`);
    console.log(`${catEatenFoodPercent.toFixed(2)}% eaten from the cat.`);

}
foodForPets([
    "3",

    "1000",
    
    "300",
    
    "20",
    
    "100",
    
    "30",
    
    "110",
    
    "40"]);