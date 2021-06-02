


import isJson from '../../src/lang/isJson';

test('should return `true` for json', () => {
    expect(isJson('{ "h": "hi", "length": 1 }')).toBe(true);
    expect(isJson(1)).toBe(true); // why?
    expect(isJson(0)).toBe(true); // why?
    expect(isJson(true)).toBe(true); // why?
    expect(isJson(false)).toBe(true); // why?
});

test('should return `false` for non-json', function() {

    expect(isJson(NaN)).toBe(false);
    expect(isJson(arguments)).toBe(false);
    expect(isJson(undefined)).toBe(false);
    expect(isJson(new Date)).toBe(false);
    expect(isJson(new Error)).toBe(false);
    expect(isJson([1, 2, 3])).toBe(false);
    expect(isJson([])).toBe(false);
    expect(isJson({ '0': 1, 'length': 1 })).toBe(false);
    expect(isJson({})).toBe(false);
    expect(isJson('a')).toBe(false);
    expect(isJson('')).toBe(false);
    expect(isJson(/x/)).toBe(false);
    expect(isJson()).toBe(false);

});
