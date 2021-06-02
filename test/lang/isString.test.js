import isString from '../../src/lang/isString';

test('should return `true` for strings', function() {
    expect(isString('a')).toBe(true);
    expect(isString('')).toBe(true);
    expect(isString(Object('a'))).toBe(true);
});

test('should return `false` for non-strings', function() {

    expect(isString(arguments)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(new Date)).toBe(false);
    expect(isString(new Error)).toBe(false);
    expect(isString([1, 2, 3])).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString({ '0': 1, 'length': 1 })).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString(0)).toBe(false);
    expect(isString(1)).toBe(false);
    expect(isString(NaN)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(false)).toBe(false);
    expect(isString(/x/)).toBe(false);
    expect(isString()).toBe(false);
    expect(isString(Object(false))).toBe(false);
    expect(isString(Object(0))).toBe(false);
    
});
