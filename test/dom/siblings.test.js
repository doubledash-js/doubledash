import { getDom } from '../utils'
import siblings from '../../src/dom/siblings';

test('should add item after target', function() {

    let parent = getDom();
    let child2 = parent.querySelector('.child-2');
   
    let elements = siblings(child2)

    expect(elements.length).toBe(3);

});