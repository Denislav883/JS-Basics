function minNumber(input){
 let index = 0;
 command = input[index];
  index++ ;
    
 let minNum = Number(input[index]);
    
    while(command !== "Stop"){
        let num = Number(command);
        if(num < minNum){
            minNum = num; 
        }
        command = input[index];
        index++ ;
    }
    console.log(minNum);
}
minNumber((["-10", "20", "-30", "Stop"]));