function cinemaTicket(dayOfWeek){
let priceOfTickets = 0;
if(dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Friday"){
    priceOfTickets = 12;
} else if(dayOfWeek === "Wednesday" || dayOfWeek === "Thursday"){
    priceOfTickets = 14;
} else if(dayOfWeek === "Saturday" || dayOfWeek === "Sunday"){
    priceOfTickets = 16;
}
console.log(priceOfTickets);
}
cinemaTicket();