import isEmpty from '../../src/lang/isEmpty';

test('should return `true` for empty values', () => {
    
    expect(isEmpty(false)).toBe(true);
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(NaN)).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty()).toBe(true);
});

test('should return `false` for non-empty values', () => {
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(1)).toBe(false);
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty(new Date)).toBe(false);
    expect(isEmpty(new Error)).toBe(false);
    expect(isEmpty({ '0': 1, 'length': 1 })).toBe(false);
    expect(isEmpty(/x/)).toBe(false);
    expect(isEmpty('a')).toBe(false);
    expect(isEmpty([0])).toBe(false);
});

test('should work with an object that has a `length` property', () => {
  expect(isEmpty({ 'length': 0 })).toBe(false);
});

test('should not treat objects with non-number lengths as array-like', () => {
  expect(isEmpty({ 'length': '0' })).toBe(false);
});

test('should work with `arguments` objects', function() {
  expect(isEmpty(arguments)).toBe(false);
});

test('should work with prototype objects', () => {
  function Foo() {}
  Foo.prototype = { 'constructor': Foo };

  expect(isEmpty(Foo.prototype)).toBe(false);

  Foo.prototype.a = 1;
  expect(isEmpty(Foo.prototype)).toBe(false);
});

test('should not treat objects with negative lengths as array-like', () => {
  function Foo() {}
  Foo.prototype.length = -1;

  expect(isEmpty(new Foo)).toBe(true);
});

test('should not treat objects with lengths larger than `MAX_SAFE_INTEGER` as array-like', () => {
  function Foo() {}
  Foo.prototype.length = Number.MAX_SAFE_INTEGER + 1;

  expect(isEmpty(new Foo)).toBe(true);
});


