function townInfo(townName, population, area) {
    let nameIsValidLength = townName.length >= 3;
    let populationIsPositive = population>= 0;
    let areaIsPositive = area >= 0;

    if (!nameIsValidLength) {
        console.log("Town name must be at least 3 characters!");
    }
    
    if (!populationIsPositive) {
        console.log("Population must be a positive number!");
    }
    
    if (!areaIsPositive) {
        console.log("Area must be a positive number!");
    } 
        
    if(nameIsValidLength && populationIsPositive && areaIsPositive){
        console.log(`Town ${townName} has population of ${population} and area ${area} square km.`)
    }
}
townInfo();