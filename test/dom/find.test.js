import { getDom } from '../utils'
import find from '../../src/dom/find';

test('should return element', function() {
    
    let parent = getDom();
    let elements = find('.child-2', parent);

    expect(elements[0].outerHTML).toBe('<div class="child-2"></div>');
    
});
