function arrayRotation1(arr, rotationCount) {

    for (let currentRotation = 1; currentRotation <= rotationCount; currentRotation++) {
        let firstElement = arr.shift();
        arr.push(firstElement);
    }

    console.log(arr.join(" "));

}
arrayRotation1();