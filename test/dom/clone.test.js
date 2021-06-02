import { getDom } from '../utils'
import clone from '../../src/dom/clone';

test('should add item to the bottom', function() {

    let parent = getDom();

    let cloned = clone(parent)

    expect(cloned.outerHTML).toBe('<div class="parent-1"><div class="child-1"></div><div class="child-2"></div><div class="child-3"></div><p class="child-4"><p class="child-4-1"></p><p class="child-4-2"></p></p></div>');

});