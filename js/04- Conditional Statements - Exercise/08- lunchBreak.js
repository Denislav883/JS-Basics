function lunchBreak(nameOfTheSeries, timeOfEpisode, brakTime){
let lunchTime = (1 / 8) * brakTime;
let relaxTime = (1 / 4) * brakTime;
let timeForTheEpisode = brakTime - (lunchTime + relaxTime);
if(timeForTheEpisode >= timeOfEpisode){
    let tiemLeft = timeForTheEpisode - timeOfEpisode;
    console.log(`You have enough time to watch ${nameOfTheSeries} and left with ${Math.ceil(tiemLeft)} minutes free time. `);
} else{
    let timeNeeded = timeOfEpisode - timeForTheEpisode;
    console.log(`You don't have enough time to watch ${nameOfTheSeries}, you need ${Math.ceil(timeNeeded)} more minutes.`);
}
}
lunchBreak();