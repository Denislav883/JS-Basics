function tennisRanklist(input){
 let tournamentCount = Number(input[0]);
 let startPoints = Number(input[1]);
 let pointsWon = 0;
 let winCount = 0;

 for(let i = 2; i < tournamentCount + 2; i++){
    let currentTournament = input[i];

    if(currentTournament === "W"){
        pointsWon += 2000;
        winCount++;
    } else if(currentTournament === "F"){
        pointsWon += 1200;
    } else if(currentTournament === "SF"){
        pointsWon += 720;
    }
 }
    let totalPoints = startPoints + pointsWon;
    let averagePoints = Math.floor(pointsWon  / tournamentCount);
    let averageWinPercent = ((winCount / tournamentCount) * 100).toFixed(2);

 console.log(`Final points: ${totalPoints}`);
 console.log(`Average points: ${averagePoints}`);
 console.log(`${averageWinPercent}%`)
}
tennisRanklist();