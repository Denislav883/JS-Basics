function fishTank(lengthCm, widthCm, heightCm, percent){
let volumeCm = lengthCm * widthCm * heightCm;
let volumeLitre = volumeCm / 1000;
let busyPercent = percent / 100;
let neededLitre =  volumeLitre - (volumeLitre * busyPercent) ;
console.log (neededLitre);
}
fishTank();