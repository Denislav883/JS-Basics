function rightPlace(firstString, char, secondStr) {
    let result = firstString.replace("_", char);

    result === secondStr ? console.log("Matched") : console.log("Not Matched");
}
rightPlace('Str_ng', 'I', 'String');