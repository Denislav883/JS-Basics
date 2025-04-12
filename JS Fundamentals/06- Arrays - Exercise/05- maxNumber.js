function maxNumber(arr) {
    let topNums = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let isTop = true;

        for (let j = i + 1; j < arr.length; j++) {
            let numToRight = arr[j];
            if (num <= numToRight) {
                isTop = false;
                break;
            }
        }

        if (isTop) {
            topNums.push(num);
        }
    }

    console.log(topNums.join(" "));
}
maxNumber();