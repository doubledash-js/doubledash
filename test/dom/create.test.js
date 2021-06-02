import create from '../../src/dom/create';

test('should return element', function() {
    
    let element = create('p', { class: 'some-class-1', id: 'some-id' }, 'text');

    expect(element.outerHTML).toBe('<p class="some-class-1" id="some-id">text</p>');

});

test('should return element', function() {
    
    let element = create('p', { class: [ 'some-class-1', 'some-class-2' ] , id: 'some-id' }, 'text');

    expect(element.outerHTML).toBe('<p class="some-class-1 some-class-2" id="some-id">text</p>');

});

test('should return element', function() {
    
    let element = create('p', { class: 'some-class-1' , id: 'some-id' });

    expect(element.outerHTML).toBe('<p class="some-class-1" id="some-id"></p>');

});