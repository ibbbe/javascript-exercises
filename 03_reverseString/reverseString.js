const reverseString = function(word) {
    let length = word.length -1;
    let half = Math.ceil(length / 2);
    const array = word.split('');

    for (let i = 0; i <= half; i++) {
        let buffer = array[i];
        array[i] = array[length -i];
        array[length - i] = buffer;
    }
    
    let dorW = array.join("");
    return dorW;
};

// Do not edit below this line
module.exports = reverseString;
