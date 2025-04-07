function sumOfTwoNumbers(startNum, endNum, magicNum) {
    let combinationCount = 0;
    let isFound = false;
    
    for(let num1 = startNum; num1 <= endNum; num1++){
        for(let num2 = startNum; num2 <= endNum; num2++){
            combinationCount++;

            if(num1 + num2 === magicNum){
                console.log(`Combination N:${combinationCount} (${num1} + ${num2} = ${magicNum})`);
                isFound = true;
                break;
              }
        }

        if(isFound){
            break;
        }
    }

    if(!isFound){
        console.log(`${combinationCount} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNumbers();