function jurney(budget, season){
    let vacation = "" ;
    let destination = "" ;
    let moneySpent = 0 ;
switch(season){
    case "summer" : 
         vacation = "Camp";
        break;
    case "winter" :
         vacation = "Hotel";
         break;
}

if(budget <= 100 && season === "summer"){
    destination = "Bulgaria" ;
    moneySpent = 0.3 * budget;
  } else if(budget <= 100 && season === "winter"){
    destination = "Bulgaria"
    moneySpent = 0.7 * budget;
} else if(budget <= 1000){
    destination = "Balkans" ;
  if(season === "summer"){
    moneySpent = 0.4 * budget;
  } else if(season === "winter"){
    moneySpent = 0.8 * budget;
  }
} else if(budget > 1000){
    destination = "Europe" ;
    moneySpent = 0.9 * budget;
    switch(destination){
        case "Europe" : 
            vacation = "Hotel" ;
            break;
    }
} 
console.log(` Somewhere in ${destination} `);
console.log(` ${vacation} - ${moneySpent.toFixed(2)} `)
}
jurney();