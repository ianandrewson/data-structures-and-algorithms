const { reverseArray } = require('../array-reverse/array-reverse.js');

describe('reverse array', () => {
    it('should return the input array in reverse order', () => {
        expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
        expect(reverseArray([1, 3, 2, 7, 6])).toEqual([6, 7, 2, 3, 1]);
        expect(reverseArray([3, -5, 7, -15, 999, 0, Infinity, -100]).toEqual([-100, Infinity, 0, 999, -15, 7, -5, 3]));
        expect(reverseArray([])).toEqual([]);
        expect(reverseArray('123')).toThrowError(new Error('Parameter is not an array'));
    });
});
