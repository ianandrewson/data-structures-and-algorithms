const insertShiftArray = (arr, newValue) => {
    let result = Array(arr.length + 1);
    for(let i = 0; i < result.length; i++) {
        if(i < Math.floor(result.length / 2)) {
            result[i] = arr[i];
        } else if(i === Math.floor(result.length / 2)) {
            result[i] = newValue;
        } else if(i > Math.floor(result.length / 2))
            result[i] = arr[i - 1];
    }
    return result;
};

module.exports = { insertShiftArray };
