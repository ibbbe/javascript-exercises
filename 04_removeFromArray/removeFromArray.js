const removeFromArray = function (array, ...args) {
    
    for (arg of args) {
        for (arr of array) {
            if (arg === arr) {
                array.splice(array.indexOf(arr), 1);
            } continue;
        }
    } return array;
};

// Do not edit below this line
module.exports = removeFromArray;
