const arrayBinarySearch = (array, searchKey) => {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === searchKey) {
            return i;
        }
    }
    return -1;
};

module.exports = {
    arrayBinarySearch
};
