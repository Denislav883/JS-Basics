function worldSwimmingRecord(recordInSec, distanceInMetres, secondsForOneMetre){
    let ivanTime = distanceInMetres * secondsForOneMetre;
    let waterResistance = Math.trunc(distanceInMetres / 15);
    let waterResistanceSec = waterResistance * 12.5;    
    let ivanTotalTime = ivanTime + waterResistanceSec;
    let missingSec = ivanTotalTime - recordInSec;

    if(ivanTotalTime < recordInSec){
        console.log(`Yes, he succeeded! The new world record is ${ivanTotalTime.toFixed(2)} seconds. `);
    } else {
        console.log(`No, he failed! He was ${missingSec.toFixed(2)} seconds slower. `);
    }
}
worldSwimmingRecord();