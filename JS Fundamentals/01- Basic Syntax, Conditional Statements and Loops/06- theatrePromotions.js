function theatrePromotions(typeOfDay, personAge) {
    let singleTicketPrice = 0;

    switch (typeOfDay) {
        case "Weekday":

            if(personAge < 0 || personAge > 122){
                console.log("Error!");
            } else if(personAge <= 18){
                console.log(12 + "$");
            } else if(personAge <= 64){
                console.log(18 + "$");
            } else{
                console.log(12 + "$" );
            }
            break;

        case "Weekend" :
            if(personAge < 0 || personAge > 122){
                console.log("Error!");
            } else if(personAge <= 18){
                console.log(15 + "$");
            } else if(personAge <= 64){
                console.log(20 + "$");
            } else{
                console.log(15 + "$" );
            }
            break;

        case "Holiday" :
            if(personAge < 0 || personAge > 122){
                console.log("Error!");
            } else if(personAge <= 18){
                console.log(5 + "$");
            } else if(personAge <= 64){
                console.log(12 + "$");
            } else{
                console.log(10 + "$" );
            }
            break;
    }
}
theatrePromotions('Weekday', 15);