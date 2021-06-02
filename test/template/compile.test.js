import compile from '../../src/template/compile';

test('template variable test', () => {

    var template = `Hello {{message}}!`;
    var json = { message: 'World' };
    
    expect(compile(template, json)).toBe(`Hello World!`);

});

test('template condition test', function() {

    var template1 = `
        {{if (message)}}
            Message is true
        {{else}}
            Message is false
        {{endif}}
    `;

    var template2 = `
        {{if (message == 1)}}
            Message is 1
        {{elseif (message == 2)}}
            Message is 2
        {{else}}
            Message is other
        {{endif}}
    `;
    
    expect( (compile(template1, { message: true })).trim() ).toBe(`Message is true`);
    expect( (compile(template1, { message: false })).trim() ).toBe(`Message is false`);

    expect( (compile(template2, { message: 1 })).trim() ).toBe(`Message is 1`);
    expect( (compile(template2, { message: 2 })).trim() ).toBe(`Message is 2`);
    expect( (compile(template2, { message: 'dog' })).trim() ).toBe(`Message is other`);

});

test('template loop test', function() {

    var template = `{{for (let i = 0; i < message.length; i++)}}{{message[i]}}{{endfor}}`;
    var json = { message: ['one', 'two', 'three'] };
    
    expect( (compile(template, json)).trim() ).toBe(`onetwothree`);

});
