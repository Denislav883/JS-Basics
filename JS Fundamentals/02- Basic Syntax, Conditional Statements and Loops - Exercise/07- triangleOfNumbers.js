function triangleOfNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += i;
            if (j < i) {
                row += ' ';
            }
        }
        console.log(row);
    }
}
triangleOfNumbers();