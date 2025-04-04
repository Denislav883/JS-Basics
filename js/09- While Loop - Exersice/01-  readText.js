function readText(input){
 let index = 0;
 let word = input[index];
index++ ;

while(word !== "Stop"){
    console.log(word)
    word = String(input[index]);
    index++ ;
}
}
readText();