import isSet from '../../src/lang/isSet';

test('should return `true` if set', function() {
    expect(isSet(arguments)).toBe(true);
    expect(isSet(new Date)).toBe(true);
    expect(isSet(new Error)).toBe(true);
    expect(isSet([1, 2, 3])).toBe(true);
    expect(isSet([])).toBe(true);
    expect(isSet({ '0': 1, 'length': 1 })).toBe(true);
    expect(isSet({})).toBe(true);
    expect(isSet('a')).toBe(true);
    expect(isSet('')).toBe(true);
    expect(isSet(1)).toBe(true);
    expect(isSet(0)).toBe(true);
    expect(isSet(NaN)).toBe(true);
    expect(isSet(true)).toBe(true);
    expect(isSet(false)).toBe(true);
    expect(isSet(/x/)).toBe(true);
    expect(isSet(Object(false))).toBe(true);
    expect(isSet(Object(0))).toBe(true);
    expect(isSet(Object('a'))).toBe(true);
});

test('should return `false` if not set', function() {
    expect(isSet()).toBe(false);
    expect(isSet(null)).toBe(false);
    expect(isSet(undefined)).toBe(false);
});
