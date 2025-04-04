function password(input){
 let index = 0;
 let userName = input[index];
 index++
 let password = input[index];
 index++ ;
 let tempPassword = input[index];
 index++ ;

 while(password !== tempPassword){

       tempPassword = input[index];
       index++ 
}

 console.log (`Welcome ${userName}!`)
 
}
password((["Gosho", "secret", "secret"]));