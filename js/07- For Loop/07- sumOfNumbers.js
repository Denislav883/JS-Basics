function sumOfNumbers(numAsString){
let sum = 0;

for(let i = 0 ; i < numAsString.length ; i++){
    let char = numAsString.charAt(i);
    let num = Number(char);
    sum += num;
}
console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers();