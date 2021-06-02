import { getDom } from '../utils'
import after from '../../src/dom/after';

test('should add item after target', function() {

    let parent = getDom();
    let child2 = parent.querySelector('.child-2');
    let element = document.createElement('p');

    after(element, child2)

    expect(parent.outerHTML).toBe('<div class="parent-1"><div class="child-1"></div><div class="child-2"></div><p></p><div class="child-3"></div><p class="child-4"><p class="child-4-1"></p><p class="child-4-2"></p></p></div>');

});