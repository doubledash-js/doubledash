import { getDom } from '../utils'
import prev from '../../src/dom/prev';

test('should add item after target', function() {

    let parent = getDom();
    let child2 = parent.querySelector('.child-2');
   
    let element = prev(child2)

    expect(element.outerHTML).toBe('<div class="child-1"></div>');

});