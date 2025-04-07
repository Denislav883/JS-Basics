function salary(input){
let tabCount = input[0];
let salary = input[1]; 

for(let i = 2; i < tabCount + 2; i++){
    currentName= String(input[i]);

    if(currentName === "Facebook"){
        salary -= 150;
    } else if(currentName === "Instagram"){
        salary -= 100;
    } else if(currentName === "Reddit"){
        salary -= 50;
    } 

    if(salary <= 0){
        console.log("You have lost your salary.");
    return;
    }
}
    console.log(salary);
}
salary();