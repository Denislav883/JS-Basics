function easterEggsBattle(input) {
    let player1EggsCount = Number(input[0]);
    let player2EggsCount = Number(input[1]);
    let isGameEnd = false;

    index = 2;
    let command = input[index];
    index++;

    while (command !== "End") {
        let winner = (command);

        if (winner === "one") {
            player2EggsCount--;
        } else if (winner === "two") {
            player1EggsCount--;
        }

        if (player1EggsCount === 0) {
            isGameEnd = true;
            console.log(`Player one is out of eggs. Player two has ${player2EggsCount} eggs left.`);
            break;
        } else if (player2EggsCount === 0) {
            isGameEnd = true;
            console.log(`Player two is out of eggs. Player one has ${player1EggsCount} eggs left.`);
            break;
        }

        command = input[index];
        index++;

        if(command === "End"){
            console.log(`Player one has ${player1EggsCount} eggs left.`);
            console.log(`Player two has ${player2EggsCount} eggs left.`);
            return;
        }
    }


}
easterEggsBattle(([
    "2",

    "6",

    "one",

    "two",

    "two",]));