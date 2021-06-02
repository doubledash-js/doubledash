import { getDom } from '../utils'
import next from '../../src/dom/next';

test('should add item after target', function() {

    let parent = getDom();
    let child2 = parent.querySelector('.child-2');
   
    let element = next(child2)

    expect(element.outerHTML).toBe('<div class="child-3"></div>');

});