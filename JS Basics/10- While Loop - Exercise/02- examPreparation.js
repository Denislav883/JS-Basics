function examPreparation(input){
    let maxBadGrades = Number(input[0]);
    let currentBadGrade = 0;
    let gradeSum = 0;
    let gradeCount = 0;
    let lastProblem = "";

    let index = 1;
    let command = input[index];
    index++;

    while(command !== "Enough"){
        lastProblem = command;

        let grade = Number(input[index]);
        index++;

        if(grade <= 4){
            currentBadGrade++;

            if(currentBadGrade === maxBadGrades){
                console.log(`You need a break, ${currentBadGrade} poor grades.`);
                return;
            }

        }

        gradeCount++;
        gradeSum += grade;

        command = input[index];
        index++;
    }

    let avgGrade = gradeSum / gradeCount;
    console.log(`Average score: ${avgGrade.toFixed(2)}`);
    console.log(`Number of problems: ${gradeCount}`);
    console.log(`Last problem: ${lastProblem}`);
}
examPreparation();