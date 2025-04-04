function calculateTradeCommissions(town, sales){
    let tradeCommission = 0;
    if((town !== "Sofia" && town !== "Varna" && town !== "Plovdiv") || (sales < 0) ){
        console.log("error");
    } else switch(town){
        case "Sofia" :
            if(sales >= 0 && sales <= 500){
                tradeCommission = sales * 0.05;
            } else if(sales > 500 && sales <= 1000){
                tradeCommission = sales * 0.07;
            } else if(sales > 1000 && sales <= 10000){
                tradeCommission = sales * 0.08;
            } else if(sales > 10000 ){
                tradeCommission = sales * 0.12;
            } console.log(tradeCommission.toFixed(2));
            break;
        case "Varna" : 
            if(sales >= 0 && sales <= 500){
                tradeCommission = sales * 0.045;
            } else if(sales > 500 && sales <= 1000){
                tradeCommission = sales * 0.075;
            } else if(sales > 1000 && sales <= 10000){
                tradeCommission = sales * 0.1;
            } else if(sales > 10000 ){
                tradeCommission = sales * 0.13;
        } console.log(tradeCommission.toFixed(2));
        break;
        case "Plovdiv" :
            if(sales >= 0 && sales <= 500){
                tradeCommission = sales * 0.055;
            } else if(sales > 500 && sales <= 1000){
                tradeCommission =sales * 0.08;
            } else if(sales > 1000 && sales <= 10000){
                tradeCommission = sales * 0.12;
            } else if(sales > 10000 ){
                tradeCommission = sales * 0.145; 
        }  console.log(tradeCommission.toFixed(2)); break;
}
}
calculateTradeCommissions();