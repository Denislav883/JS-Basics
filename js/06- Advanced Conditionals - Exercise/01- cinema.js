function cinema(type, rowCount, columnCount){
    let faceOfCinema = rowCount * columnCount;
    let income = 0;
switch(type){
    case "Premiere" : income = faceOfCinema * 12; break;
    case "Normal" : income = faceOfCinema * 7.50; break;
    case "Discount" : income = faceOfCinema * 5; break;
} 
console.log(`${income.toFixed(2)} leva`);
}
cinema();