import isNumber from '../../src/lang/isNumber';

test('should return `true` for numbers', function() {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(1)).toBe(true);
    expect(isNumber(Object(0))).toBe(true);
    expect(isNumber(NaN)).toBe(true);
});

test('should return `false` for non-numbers', function() {

    expect(isNumber(arguments)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(new Date)).toBe(false);
    expect(isNumber(new Error)).toBe(false);
    expect(isNumber([1, 2, 3])).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber({ '0': 1, 'length': 1 })).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber('a')).toBe(false);
    expect(isNumber('')).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(false)).toBe(false);
    expect(isNumber(/x/)).toBe(false);
    expect(isNumber()).toBe(false);

});
