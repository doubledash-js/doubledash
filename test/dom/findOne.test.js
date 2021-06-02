import { getDom } from '../utils'
import findOne from '../../src/dom/findOne';

test('should return element', function() {
    
    let parent = getDom();
    let element = findOne('.child-2', parent);

    expect(element.outerHTML).toBe('<div class="child-2"></div>');
    
});
