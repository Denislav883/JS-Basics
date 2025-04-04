function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let cakePiecesCount = width * length;

    let index = 2;
    let command = input[index];
    index++;

    while (command !== "STOP") {
        let piecesTaking = Number(command);
        cakePiecesCount -= piecesTaking;

        if (cakePiecesCount < 0) {
            console.log(`No more cake left! You need ${Math.abs(cakePiecesCount)} pieces more.`);
            break;
        }

        command = input[index];
        index++;
    }

    console.log(`${cakePiecesCount} pieces are left.`);
}

cake((["10",

    "2",
    
    "2",
    
    "4",
    
    "6",
    
    "STOP"]));