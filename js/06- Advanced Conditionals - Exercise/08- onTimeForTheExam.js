function examArrival(examHour, examMinute, arrivalHour, arrivalMinute) {
    let examTime = examHour * 60 + examMinute;
    let arrivalTime = arrivalHour * 60 + arrivalMinute;
    let timeDifference = arrivalTime - examTime;
    
    if (timeDifference > 0) {
        console.log("Late");
        if (timeDifference < 60) {
            console.log(timeDifference + " minutes after the start");
        } else {
            let hours = Math.floor(timeDifference / 60);
            let minutes = timeDifference % 60;
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            console.log(hours + ":" + minutes + " hours after the start");
        }
    } else if (timeDifference === 0 || timeDifference >= -30) {
        console.log("On time");
        if (timeDifference !== 0) {
            console.log(-timeDifference + " minutes before the start");
        }
    } else {
        console.log("Early");
        if (Math.abs(timeDifference) < 60) {
            console.log(-timeDifference + " minutes before the start");
        } else {
            let hours = Math.floor(Math.abs(timeDifference) / 60);
            let minutes = Math.abs(timeDifference) % 60;
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            console.log(hours + ":" + minutes + " hours before the start");
        }
    }
}

examArrival();