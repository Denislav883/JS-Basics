    function personalTitles(age, gender){
        switch(gender){
        case "m" : 
            if(age >= 16){
                console.log("Mr.");
        } else if(age < 16){
            console.log("Master"); 
        }   
        break;
        case "f" :
            if(age >= 16){
                console.log("Ms."); break;
            } else if(age < 16){
                console.log("Miss"); 
            }
            break;
        }
    }
personalTitles();