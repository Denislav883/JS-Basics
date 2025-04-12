function amazingNumbers(number) {
    let numberAsStr = number.toString();
    let sum = 0;

    for (let i = 0; i < numberAsStr.length; i++) {
        sum += Number(numberAsStr[i]);
    }

    let result = sum.toString().includes("9");
    console.log(result ?
        `${number} Amazing? True` :
        `${number} Amazing? False`);
        
}
amazingNumbers();