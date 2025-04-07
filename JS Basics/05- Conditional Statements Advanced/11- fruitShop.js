function fruitShop(fruit, dayOfWeek, count){
let price= 0;
if((dayOfWeek !== "Monday" && dayOfWeek !== "Tuesday" && dayOfWeek !== "Wednesday" && dayOfWeek !== "Thursday" && dayOfWeek !== "Friday" && dayOfWeek !== "Saturday" && dayOfWeek !== "Sunday") || (fruit !== "banana" && fruit !== "apple" && fruit !== "orange" && fruit !== "grapefruit" && fruit !== "kiwi" && fruit !== "pineapple" && fruit !== "grapes" ) ){
    console.log("error")
} else if(dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday"){
    switch(fruit){
        case "banana" : price = count * 2.50; break;
        case "apple" : price = count * 1.20; break;
        case "orange" : price = count * 0.85; break;
        case "grapefruit" : price = count * 1.45; break;
        case "kiwi" : price = count * 2.70; break;
        case "pineapple" : price = count * 5.50; break;
        case "grapes" : price = count * 3.85; break;
    } 
    console.log(price.toFixed(2))
} else if(dayOfWeek === "Saturday" || "Sunday"){
    switch(fruit){
        case "banana" : price = count * 2.70; break;
        case "apple" : price = count * 1.25; break;
        case "orange" : price = count * 0.90; break;
        case "grapefruit" : price = count * 1.60; break;
        case "kiwi" : price = count * 3.00; break;
        case "pineapple" : price = count * 5.60; break;
        case "grapes" : price = count * 4.20; break;
    }
    console.log(price.toFixed(2));
} 
}
fruitShop();