function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let cakePiecesCount = width * length;
    let takenPieces = 0;

    let index = 2;
    let command = Number(input[index]);
    index++;

    while (command !== "STOP") {
        let piecesTaking = Number(command);
        takenPieces += piecesTaking;


        if (takenPieces > cakePiecesCount) {
            console.log(`No more cake left! You need ${takenPieces - cakePiecesCount} pieces more.`);
            break;
    }

        command = Number(input[index]);
        index++;
    }

    
    if(cakePiecesCount >= takenPieces){
        console.log(`${cakePiecesCount - takenPieces} pieces are left.`);
    }

}

cake((["10",

    "2",
    
    "2",
    
    "4",
    
    "6",
    
    "STOP"]));