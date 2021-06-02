import { getDom } from '../utils'
import contains from '../../src/dom/contains';

test('should return true when item contains', function() {
    
    let parent = getDom();

    expect(contains(parent, '.child-2')).toBe(true);

    let element = parent.querySelector('.child-2');
    expect(contains(parent, element)).toBe(true);

});

test('should return false when item not contained', function() {
    
    let parent = getDom();

    expect(contains(parent, '.child-5')).toBe(false);

    expect(contains(parent, null)).toBe(false);

    let p = document.createElement('p');
    expect(contains(parent, p)).toBe(false);

    let span = document.createElement('span');
    expect(contains(parent, span)).toBe(false);

});
