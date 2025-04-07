function depositCalculator(depositSum, depositTerm, yearRatePercent) {
let rate = depositSum * (yearRatePercent/100);
let ratePerMounth = rate / 12;
let sum = depositSum + depositTerm * ratePerMounth;
console.log(sum);
}
depositCalculator();