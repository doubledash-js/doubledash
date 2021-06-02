import isFunction from '../../src/lang/isFunction';

test('should return `true` for functions', function() {

    let func = function() {
        
    };

    expect(isFunction(func)).toBe(true);
});

test('should return `true` for async functions', function() {

    let asyncFunc = () => {
        return Function('return async () => {}');
    };

    expect(isFunction(asyncFunc)).toBe(true);
});

test('should return `true` for generator functions', function() {

    let genFunc = () => {
        return Function('return function*(){}');
    };

    expect(isFunction(genFunc)).toBe(true);
});

test('should return `false` for non-functions', function() {

    expect(isFunction(null)).toBe(false);
    expect(isFunction(NaN)).toBe(false);
    expect(isFunction(arguments)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction(new Date)).toBe(false);
    expect(isFunction(new Error)).toBe(false);
    expect(isFunction([1, 2, 3])).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction({ '0': 1, 'length': 1 })).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction('a')).toBe(false);
    expect(isFunction('')).toBe(false);
    expect(isFunction(1)).toBe(false);
    expect(isFunction(0)).toBe(false);
    expect(isFunction(true)).toBe(false);
    expect(isFunction(false)).toBe(false);
    expect(isFunction(/x/)).toBe(false);
    expect(isFunction()).toBe(false);

});
