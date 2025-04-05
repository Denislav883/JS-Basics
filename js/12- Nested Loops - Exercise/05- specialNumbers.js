function specialNumbers(n){

    let output = "";
    
    for (let num = 1111; num <= 9999; num++) {
        let numStr = num.toString();
        let isSpecial = true;
    
        for (let i = 0; i < numStr.length; i++) {
            let digit = Number(numStr[i]);
            if (digit === 0 || n % digit !== 0) {
                isSpecial = false;
                break;
            }
        }
    
        if (isSpecial) {
            output += num + " ";
        }
    }
    
    console.log(output);
}
specialNumbers();