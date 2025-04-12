function evenAndOddSubtraction(arr) {
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i]);

        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }

    let result = evenSum - oddSum;
    console.log(result);

}
evenAndOddSubtraction();