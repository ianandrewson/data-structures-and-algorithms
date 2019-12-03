const reverseArray = arr => {
    if(!Array.isArray(arr)) {
        throw 'Parameter is not an array';
    }
    let result = Array(arr.length);
    for(let i = 0; i < result.length; i++) {
        result[arr.length - i - 1] = arr[i];
    }
    return result;
};

module.exports = {
    reverseArray
};
