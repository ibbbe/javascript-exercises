const repeatString = function (word, num) {
    if (num < 0) return 'ERROR';
    let result = "";
    while (num > 0) {
        result += word;
        num--;
        console.log(result);
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
