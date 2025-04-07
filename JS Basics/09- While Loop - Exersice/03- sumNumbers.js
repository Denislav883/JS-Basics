function sumNumbers(input){
    let index = 0;
    let firstNum = input[index];
    index++ ;
    
    let totalSum = 0;
    
    while(true){
        if(totalSum >= firstNum){
            break;
        }
    
        let num = Number(Number(input[index]));
        index++ ;
        
        totalSum += num;
    }
    
    console.log(totalSum);
    
    }
    sumNumbers((["20", "1", "2", "3", "4", "5", "6"]));