function traveling(input){
    let index = 0;
    
    let command = input[index];
    index++;

    while(command !== "End"){
        let destination = command;
        let budged = Number(input[index]);
        index++;
        let sum = 0;

        while(sum < budged){
            let currentMoney = Number(input[index]);
            index++;
            sum += currentMoney;
        }

        console.log(`Going to ${destination}!`);
        
        command = input[index];
        index++;
    }
}
traveling();