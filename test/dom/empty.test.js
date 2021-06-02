import { getDom } from '../utils'
import empty from '../../src/dom/empty';

test('should return element', function() {
    
    let parent = getDom();
    empty(parent);

    expect(parent.outerHTML).toBe('<div class="parent-1"></div>');

});
