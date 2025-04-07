function sumOfOddNumbers(num) {
    let totalSum = 0;
    currentOdd = 1;
    for (i = 1; i <= num; i++) {
        console.log(currentOdd);
        totalSum += currentOdd;
        currentOdd += 2;

    }
    console.log(`Sum: ${totalSum}`);
}
sumOfOddNumbers();