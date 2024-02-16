const removeFromArray = function (array, ...args) {

    for (arg of args) {
        for (arr of array) {
            if (arg === arr) {
                let index = array.indexOf(arr);
                while (index !== -1) {
                    array.splice(index, 1);
                    index = array.indexOf(arr);
                }
            } continue;
        };
    } return array;
};

// Do not edit below this line
module.exports = removeFromArray;
