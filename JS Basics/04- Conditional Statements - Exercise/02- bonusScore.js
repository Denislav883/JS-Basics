function calculateBonusScore (initialPoints){
let bonus = 0;
if (initialPoints <= 100){
    bonus= 5;
} else if(initialPoints <= 1000){
    bonus = 0.2 * initialPoints;
} else {
    bonus = 0.1 * initialPoints;
}
if(initialPoints % 2 === 0){
 bonus += 1;
} else if(initialPoints % 10 === 5){
    bonus += 2;
}
let totalScore = initialPoints + bonus;
console.log(bonus);
console.log(totalScore);
}
calculateBonusScore();