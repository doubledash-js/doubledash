import isUndefined from '../../src/lang/isUndefined';

test('should return `true` for `undefined` values', function() {
    expect(isUndefined()).toBe(true);
    expect(isUndefined(undefined)).toBe(true);
});

test('should return `false` for non `undefined` values', function() {
    expect(isUndefined(arguments)).toBe(false);
    expect(isUndefined(new Date)).toBe(false);
    expect(isUndefined(new Error)).toBe(false);
    expect(isUndefined([1, 2, 3])).toBe(false);
    expect(isUndefined([])).toBe(false);
    expect(isUndefined({ '0': 1, 'length': 1 })).toBe(false);
    expect(isUndefined({})).toBe(false);
    expect(isUndefined('a')).toBe(false);
    expect(isUndefined('')).toBe(false);
    expect(isUndefined(true)).toBe(false);
    expect(isUndefined(false)).toBe(false);
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined(1)).toBe(false);
    expect(isUndefined(NaN)).toBe(false);
    expect(isUndefined(/x/)).toBe(false);
    expect(isUndefined(Object(false))).toBe(false);
    expect(isUndefined(Object(0))).toBe(false);
    expect(isUndefined(Object('a'))).toBe(false);
});
