import { getDom } from '../utils'
import remove from '../../src/dom/remove';

test('should add item after target', function() {

    let parent = getDom();
    let child2 = parent.querySelector('.child-2');
   
    remove(child2)

    expect(parent.outerHTML).toBe('<div class="parent-1"><div class="child-1"></div><div class="child-3"></div><p class="child-4"><p class="child-4-1"></p><p class="child-4-2"></p></p></div>');

});