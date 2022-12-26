function repeatString(str, times) {
    var repeatedString ="";
    while (times > 0) {
        repeatedString += str;
        times--;
    }
    return repeatedString;
}

repeatString('hey', 3);


// Do not edit below this line
module.exports = repeatString;
