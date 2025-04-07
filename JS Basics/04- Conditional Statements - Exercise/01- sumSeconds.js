function calculateSumOfSeconds (timeNumOne, timeNumTwo, timeNumThree){
let totallTime = timeNumOne + timeNumTwo + timeNumThree;
let minutes = Math.floor (totallTime / 60);
let seconds = totallTime % 60;
if (seconds < 10){
    console.log(`${minutes}:0${seconds}`);
} else{
    console.log(`${minutes}:${seconds}`);
}
}
calculateSumOfSeconds();