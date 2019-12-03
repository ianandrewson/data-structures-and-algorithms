const { insertShiftArray } = require('../arrayShift/array-shift.js');

describe('insert shift array', () => {
    it('should insert a value into the middle of the array', () => {
        expect(insertShiftArray([1, 2, 4, 5], 3)).toEqual([1, 2, 3, 4, 5]);
        expect(insertShiftArray([5, 7,], 6)).toEqual([5, 6, 7]);
        expect(insertShiftArray([], 4)).toEqual([4]);
        expect(insertShiftArray([100, 1000, 10000, 100000], 5000)).toEqual([100, 1000, 5000, 10000, 100000]);
    });
});
