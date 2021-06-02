import extend from '../../src/lang/extend';

test('should return matched objects', function() {

    // Example objects
    var object1 = {
        apple: 0,
        banana: { weight: 52, price: 100 },
        cherry: 97
    };

    var object2 = {
        banana: { price: 200 },
        durian: 100
    };

    var object3 = {
        apple: 'yum',
        pie: 3.214,
        applePie: true
    }

    expect(extend(object1, object2, object3)).toStrictEqual({apple: "yum", applePie: true, banana: {price: 200}, cherry: 97, durian: 100, pie: 3.214});
    expect(extend(true, object1, object2, object3)).toStrictEqual({apple: "yum", applePie: true, banana: {weight: 52, price: 200}, cherry: 97, durian: 100, pie: 3.214});

});
