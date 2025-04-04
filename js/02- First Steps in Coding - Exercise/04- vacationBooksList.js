function vacationBooksList(pagesPerBook, readPagesPerHour, dayPerBook){
let hours = pagesPerBook / readPagesPerHour;
let hoursPerDay = hours  / dayPerBook;
console.log(hoursPerDay);
}
vacationBooksList();