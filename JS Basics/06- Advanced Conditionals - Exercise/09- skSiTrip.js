function  skiTrip(days, typeOfRoom, feedback){
let overnightStay = days - 1;
let totalPrice = 0;

switch(typeOfRoom){
    case "room for one person" :
        totalPrice = overnightStay * 18;
        break;

    case "apartment" :
        totalPrice = overnightStay * 25;

        if(days <= 10){
            totalPrice *= 0.7;
        } else if(days <= 15 ){
            totalPrice *= 0.65;
        } else if(days > 15){
            totalPrice *= 0.5;
        }
        break;

    case "president apartment" :
        totalPrice = overnightStay * 35;
        
        if(days <= 10){
            totalPrice *= 0.9;
        } else if(days <= 15 ){
            totalPrice *= 0.85;
        } else if(days > 15){
            totalPrice *= 0.8;
        }
        break;
}

if(feedback === "positive"){
    totalPrice *=1.25;
} else {
    totalPrice *= 0.9;
}
console.log(totalPrice.toFixed(2))
}
skiTrip();