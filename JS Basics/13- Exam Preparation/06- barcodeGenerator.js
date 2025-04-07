function barcodeGenerator(startNum, endNum){
    let startNumAsString = String(startNum);
    let endNumAsString =String(endNum);
    let buff = "";

    let starA = Number(startNumAsString[0]);
    let starB = Number(startNumAsString[1]);
    let starC = Number(startNumAsString[2]);
    let starD = Number(startNumAsString[3]);

    let endA = Number(endNumAsString[0]);
    let endB = Number(endNumAsString[1]);
    let endC = Number(endNumAsString[2]);
    let endD = Number(endNumAsString[3]);

    for(let a = starA; a <= endA; a++){
         for(let b = starB; b <= endB; b++){
            for(let c = starC; c <= endC; c++){
                for(let d = starD; d <= endD; d++){
                    

                    if(a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0){
                        buff += `${a}${b}${c}${d} ` ;
                    }
                 }
             }
        }
    }

    console.log(buff);
}
barcodeGenerator();