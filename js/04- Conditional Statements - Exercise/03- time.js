function calculatetimePlusFifteenMinutes(hours, minutes){
let totalMinutes = hours * 60 + minutes + 15;
let newHour= Math.floor(totalMinutes / 60);
let newMinutes = totalMinutes % 60;

if(newHour === 24){
    newHour = 0;
}

if(newMinutes < 10 ){
    console.log(` ${newHour}:0${newMinutes} `)
} else {
    console.log(`${newHour}:${newMinutes}`)
}
}
calculatetimePlusFifteenMinutes();