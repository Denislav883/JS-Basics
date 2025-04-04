function calculateTheFaceOfFigures(areaOfFigures, arg1, arg2){
    let faceOfFigure = 0;
     
if(areaOfFigures == "square"){
    let sideOfSquare = Number(arg1);
     faceOfFigure = sideOfSquare * sideOfSquare ;
} else if(areaOfFigures == "rectangle"){
    let firstSideOfRectangle = Number(arg1);
    let secondSideOfRectangle = Number(arg2);
     faceOfFigure = firstSideOfRectangle * secondSideOfRectangle ;
} else if(areaOfFigures == "circle"){
    let radiusOfCircle = Number(arg1);
     faceOfFigure = Math.PI * Math.pow(radiusOfCircle, 2); //moje umnojenieto vmesto s Math.pow(radiusOfCircle, 2) da e s - radiusOfCircle**radiusOfCircle
}  else if(areaOfFigures = "triangle"){
    let sideOfTriangle = Number(arg1);
    let heightOfTriangle = Number(arg2);
    faceOfFigure = (sideOfTriangle * heightOfTriangle) / 2;
}
console.log (faceOfFigure.toFixed(3));
}
calculateTheFaceOfFigures();
