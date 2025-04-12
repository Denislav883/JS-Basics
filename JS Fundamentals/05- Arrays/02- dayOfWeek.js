function dayOfWeek(day){
    let dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ];

    let result = day >= 1 && day <= 7 ?  console.log(dayOfWeek[day - 1]) : console.log("Invalid day!"); 
}
dayOfWeek();