function operationsBetweenNumbers(num1, num2, operator){
    let result ;
    let isEvenOrOdd = "" ;
    
 switch(operator){
    case "+" :
        result = (num1 + num2); 
        if(result % 2 === 0){
            isEvenOrOdd = "even" ;
        } else {
            isEvenOrOdd = "odd";
        }console.log(`${num1} ${operator} ${num2} = ${result} - ${isEvenOrOdd}`);
         break;
    case "-" :
        result = (num1 - num2); 
        if(result % 2 === 0){
            isEvenOrOdd = "even" ;
        } else {
            isEvenOrOdd = "odd"
        } console.log(`${num1} ${operator} ${num2} = ${result} - ${isEvenOrOdd}`);
        break;
    case "*" :
        result = (num1 * num2); 
          if(result % 2 === 0){
            isEvenOrOdd = "even" ;
        } else {
            isEvenOrOdd = "odd"
        } console.log(`${num1} ${operator} ${num2} = ${result} - ${isEvenOrOdd}`);
        break;
    case "/" : 
        if(num2 === 0){
        console.log(`Cannot divide ${num1} by zero`);
        } else  {
            result = num1 / num2;
        console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
    }
         break;
    case "%" :
        if(num2 === 0){
            console.log(`Cannot divide ${num1} by zero`);
        } else{
            result = num1 % num2;
        console.log(`${num1} % ${num2} = ${result}`);
    }
        break;
 }  
}
operationsBetweenNumbers();