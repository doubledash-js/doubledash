import { getDom } from '../utils'
import index from '../../src/dom/elementIndex';

test('should return number', function() {
    let parent = getDom();
    let child2 = parent.querySelector('.child-2');

    expect(index(child2)).toBe(1);

});

test('should return number', function() {
  
    expect(index(null)).toBe(-1);

});
