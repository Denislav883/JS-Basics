function combinations(num) {
    let validCombinationCount = 0
    for (x1 = 0; x1 < num; x1++) {
        for (x2 = 0; x2 <= num; x2++) {
            for (x3 = 0; x3 <= num; x3++) {
                validCombinationCount++;
            }
        }
    }
    console.log(validCombinationCount);
}
combinations();