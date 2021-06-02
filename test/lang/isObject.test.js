import isObject from '../../src/lang/isObject';

test('should return `true` for objects', function() {
    expect(isObject({ '0': 1, 'length': 1 })).toBe(true);
    expect(isObject({})).toBe(true);
});

test('should return `false` for non-objects', function() {

    expect(isObject(arguments)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(new Date)).toBe(false);
    expect(isObject(new Error)).toBe(false);
    expect(isObject([1, 2, 3])).toBe(false);
    expect(isObject([])).toBe(false);
    expect(isObject('a')).toBe(false);
    expect(isObject('')).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(false)).toBe(false);
    expect(isObject(0)).toBe(false);
    expect(isObject(1)).toBe(false);
    expect(isObject(NaN)).toBe(false);
    expect(isObject(/x/)).toBe(false);
    expect(isObject()).toBe(false);

    expect(isObject(Object(false))).toBe(false); // why?
    expect(isObject(Object(0))).toBe(false); // why?
    expect(isObject(Object('a'))).toBe(false); // why?
});
