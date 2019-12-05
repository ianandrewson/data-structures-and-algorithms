const { arrayBinarySearch } = require('./array-binary-search.js');

describe('array binary search test', () => {
    it('should return the index of the sought value', () => {
        expect(arrayBinarySearch([1, 2, 3, 4, 5, 6], 4)).toEqual(3);
        expect(arrayBinarySearch([1], 1)).toEqual(0);
        expect(arrayBinarySearch([0, 1, 2, 3], 4)).toEqual(-1);
    });
});
