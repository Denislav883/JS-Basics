function login(input) {
    let username = input[0];
    let password = username.split("").reverse().join("");
    currentTry = 1;

    for (let i = 1; i < input.length; i++) {
        let guessedPassword = input[i];

        if (guessedPassword === password) {
            console.log(`User ${username} logged in.`);
            break;
        }

        if (currentTry === 4) {
            console.log(`User ${username} blocked!`);
            break;
        }

        console.log("Incorrect password. Try again.");
        

        currentTry++;
    }

}
login(['Acer', 'login', 'go', 'let me in', 'recA']);