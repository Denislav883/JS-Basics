function sumDigits(number){
    let numberAsStr = number.toString();
    let sum = 0;

    for(let i = 0; i < numberAsStr.length; i++){
        let currentDigit = Number(numberAsStr[i]);
        sum += currentDigit;
    }

    console.log(sum);
}
sumDigits();