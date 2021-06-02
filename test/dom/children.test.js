import { getDom } from '../utils'
import dom from '../../src/dom';

test('should return children of element', function() {

    let parent = getDom();

    let children = dom.children(parent)

    expect(children.length).toBe(4);

});


