import isRegExp from '../../src/lang/isRegExp';

test('should return `true` for regexes', function() {
    expect(isRegExp(/x/)).toBe(true);
    expect(isRegExp(RegExp('x'))).toBe(true);
});

test('should return `false` for non-regexes', function() {

    expect(isRegExp(arguments)).toBe(false);
    expect(isRegExp(undefined)).toBe(false);
    expect(isRegExp(new Date)).toBe(false);
    expect(isRegExp(new Error)).toBe(false);
    expect(isRegExp([1, 2, 3])).toBe(false);
    expect(isRegExp([])).toBe(false);
    expect(isRegExp({ '0': 1, 'length': 1 })).toBe(false);
    expect(isRegExp({})).toBe(false);
    expect(isRegExp('a')).toBe(false);
    expect(isRegExp('')).toBe(false);
    expect(isRegExp(true)).toBe(false);
    expect(isRegExp(false)).toBe(false);
    expect(isRegExp(0)).toBe(false);
    expect(isRegExp(1)).toBe(false);
    expect(isRegExp(NaN)).toBe(false);
    expect(isRegExp(Object(0))).toBe(false);
    expect(isRegExp()).toBe(false);

});

