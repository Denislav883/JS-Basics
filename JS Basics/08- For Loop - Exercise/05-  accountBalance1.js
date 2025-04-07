function accountBalance1 (input){
 let index = 0;
 let totalSum = 0;
 let command = input[index]
 index++ ;

 while(command !== "NoMoreMoney"){
    let money = Number(command);
    if(money < 0){
        console.log("Invalid operation!");
        break;
    }
    console.log(` Increase: ${Number(money).toFixed(2)} `);
    totalSum += money;

    command = input[index];
    index++ ;
 }

 console.log(`Total: ${Number(totalSum).toFixed(2)}`);
 
}
accountBalance1((["5.51",

    "69.42",
    
    "100",
    
    "NoMoreMoney"]));