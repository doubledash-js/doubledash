import { getDom } from '../utils'
import dom from '../../src/dom';

test('should return element', function() {
    
    let parent = getDom();
    let element = dom.findOne('.child-4-1', parent);
    let parents = dom.parents(element);

    expect(parents.length).toBe(2);

});
