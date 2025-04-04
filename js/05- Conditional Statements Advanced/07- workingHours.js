function workingHours(hour, dayOfWeek){
    switch(dayOfWeek){
        case "Monday" : 
        case "Tuesday" : 
        case "Wednesday" : 
        case "Thursday" : 
        case "Friday" : 
        case "Saturday" : 
            if(hour >= 10 && hour <= 18){
                console.log("open"); break;
            } 
        default : console.log("closed"); break;
    }
}
workingHours();