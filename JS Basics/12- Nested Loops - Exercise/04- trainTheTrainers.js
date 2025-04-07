function trainTheTrainerstrainTheTrainers(input){
    let judgeCount = input[0];
    let totalGradeSum = 0;
    let presentationCount = 0;

    let index = 1;
    let command = input[index];
    index++

    while(command !== "Finish"){
        let presentationTitle = command;
        let gradeSum = 0;

        for(let currentJudge = 1; currentJudge <= judgeCount; currentJudge++){
            let grade = Number(input[index]);
            index++

            gradeSum += grade;
        }

        let avgPresentationGrade = gradeSum / judgeCount;
        console.log(`${presentationTitle} - ${avgPresentationGrade.toFixed(2)}.`);
        
        presentationCount++
        totalGradeSum += avgPresentationGrade; 

        command = input[index];
        index++;
    }

    let totalAvgGrade = totalGradeSum / presentationCount;
    console.log(`Student's final assessment is ${totalAvgGrade.toFixed(2)}.`);
}
trainTheTrainerstrainTheTrainers();