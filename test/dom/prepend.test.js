import { getDom } from '../utils'
import prepend from '../../src/dom/prepend';

test('should add item to the bottom of the target', function() {

    let parent = getDom();
    let element = document.createElement('p');

    prepend(element, parent)

    expect(parent.outerHTML).toBe('<div class="parent-1"><p></p><div class="child-1"></div><div class="child-2"></div><div class="child-3"></div><p class="child-4"><p class="child-4-1"></p><p class="child-4-2"></p></p></div>');

});


