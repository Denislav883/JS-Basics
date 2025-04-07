function building(floorsCount, roomsCount) {

    for (let floorsNum = floorsCount; floorsNum > 0; floorsNum--) {
        let buff = "";
        for (let roomsNum = 0; roomsNum < roomsCount; roomsNum++) {

            if (floorsNum === floorsCount) {
                buff += `L${floorsNum}${roomsNum} `;
            } else if (floorsNum % 2 === 0) {
                buff += `O${floorsNum}${roomsNum} `;
            } else {
                buff += `A${floorsNum}${roomsNum} `;
            }
        }
        console.log(buff);
    }

}
building();