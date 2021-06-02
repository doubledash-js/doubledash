import isArray from '../../src/lang/isArray';

test('should return `true` for arrays', () => {
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray([])).toBe(true);
});

test('should return `false` for non-arrays', function() {

    expect(isArray(null)).toBe(false);
    expect(isArray(NaN)).toBe(false);
    expect(isArray(arguments)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(new Date)).toBe(false);
    expect(isArray(new Error)).toBe(false);
    expect(isArray({ '0': 1, 'length': 1 })).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray('a')).toBe(false);
    expect(isArray('')).toBe(false);
    expect(isArray(1)).toBe(false);
    expect(isArray(0)).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray(false)).toBe(false);
    expect(isArray(/x/)).toBe(false);
    expect(isArray()).toBe(false);

});
