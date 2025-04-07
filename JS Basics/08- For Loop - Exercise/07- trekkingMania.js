function trekkingMania(input){
 let climberGroupCount = Number(input[0]);
 let count1 = 0;
 let count2 = 0;
 let count3 = 0;
 let count4 = 0;
 let count5 = 0;
 let totalClimber = 0;
 for(let i = 1; i <= climberGroupCount; i++){
    let climbersInGroup = Number(input[i]);
    totalClimber += climbersInGroup;

    if(climbersInGroup <= 5){
        count1 += climbersInGroup ; 
    } else if(climbersInGroup <= 12){
        count2 += climbersInGroup ;
    } else if(climbersInGroup <=25){
        count3 += climbersInGroup ;
    } else if(climbersInGroup <=40){
        count4 += climbersInGroup ;
    } else if(climbersInGroup >= 41){
        count5 += climbersInGroup ;
    }
 }
 
 let percent1 = (count1 / totalClimber) * 100;
 let percent2 =(count2 / totalClimber) * 100;
 let percent3 =(count3 / totalClimber) * 100;
 let percent4 =(count4 / totalClimber) * 100;
 let percent5 =(count5 / totalClimber) * 100;

 console.log(`${percent1.toFixed(2)}%`);
 console.log(`${percent2.toFixed(2)}%`);
 console.log(`${percent3.toFixed(2)}%`);
 console.log(`${percent4.toFixed(2)}%`);
 console.log(`${percent5.toFixed(2)}%`);
}
trekkingMania((["5",

    "25",
    
    "41",
    
    "31",
    
    "250",
    
    "6"]));