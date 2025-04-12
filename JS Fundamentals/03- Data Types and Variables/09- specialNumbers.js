function specialNumbers(n){

    for(let i = 1; i <= n; i++){
        let sumOfDigits = 0;
        let number = i;

        while(number > 0){
            sumOfDigits += number % 10;
            number = parseInt(number / 10);
        }

        let isSpecial = (sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11);
        console.log(`${i} -> ${isSpecial ? "True" : "False"}`);
        
    }
}
specialNumbers();