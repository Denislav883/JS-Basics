function cinema(input){
    let studentTicketCount = 0;
    let standardTicketCount = 0;
    let kidTicketCount = 0;

    let index = 0;
    let command = input[index];
    index++;

    while (command !== "Finish") {
        let movieTitle = command;
        let totalAvailableSeats = Number(input[index]);
        index++;

        let takenSeats = 0;

        let ticketType = input[index];
        index++;

        while (ticketType !== "End") {
            if (ticketType === "standard") {
                standardTicketCount++;
            } else if (ticketType === "student") {
                studentTicketCount++;
            } else if (ticketType === "kid") {
                kidTicketCount++;
            }

            takenSeats++;

            if (takenSeats >= totalAvailableSeats) {
                break;
            }

            ticketType = input[index];
            index++;
        }

        let fullPercentage = (takenSeats / totalAvailableSeats) * 100;
        console.log(`${movieTitle} - ${fullPercentage.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }

    let totalTicketCount = studentTicketCount + standardTicketCount + kidTicketCount;

    console.log(`Total tickets: ${totalTicketCount}`);
    console.log(`${(studentTicketCount / totalTicketCount * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTicketCount / totalTicketCount * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTicketCount / totalTicketCount * 100).toFixed(2)}% kids tickets.`);
}
cinema();