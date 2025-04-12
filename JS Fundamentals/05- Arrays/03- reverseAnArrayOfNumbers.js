function  reverseAnArrayOfNumbers(num, input){
    let arr = [];
    let reversedArr = [];

    for(let i = 0; i < num ; i++){
        arr.push(input[i]);
    }

    for(let j = arr.length - 1; j >= 0; j--){
     reversedArr.push(arr[j]) ;
    }
    console.log(reversedArr.join(" "));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);