const { bracketValidation } = require('./multi-bracket-validation.js');

describe('multi bracket validation tests', () => {
  it('should be able to detect whether or not a string has balanced brackets', () => {
    expect(bracketValidation('()')).toBeTruthy();
    expect(bracketValidation('{}')).toBeTruthy();
    expect(bracketValidation('[]')).toBeTruthy();
    expect(bracketValidation('({})')).toBeTruthy();
    expect(bracketValidation('{({})}')).toBeTruthy();
    expect(bracketValidation('({[]})')).toBeTruthy();
    expect(bracketValidation('(')).toBeFalsy();
    expect(bracketValidation('()[')).toBeFalsy();
    expect(bracketValidation('{}[]{')).toBeFalsy();
    expect(bracketValidation('(jhsdf)[ijhas')).toBeFalsy();
  });
});
