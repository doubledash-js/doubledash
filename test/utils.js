
function getDom() {
    let parent = document.createElement('div');
    parent.setAttribute('class', 'parent-1');

    let child1 = document.createElement('div');
    child1.setAttribute('class', 'child-1');
    
    let child2 = document.createElement('div');
    child2.setAttribute('class', 'child-2');
    
    let child3 = document.createElement('div');
    child3.setAttribute('class', 'child-3');
    
    let child4 = document.createElement('p');
    child4.setAttribute('class', 'child-4');
    
    let child4_1 = document.createElement('p');
    child4_1.setAttribute('class', 'child-4-1');
    
    let child4_2 = document.createElement('p');
    child4_2.setAttribute('class', 'child-4-2');
    
    parent.appendChild(child1);
    parent.appendChild(child2);
    parent.appendChild(child3);
    child4.appendChild(child4_1);
    child4.appendChild(child4_2);
    parent.appendChild(child4);

    return parent;
}

export {
    getDom
};

/*

    expect(isNull(null)).toBe(false);
    
    expect(isNull(arguments)).toBe(false);
    expect(isNull(undefined)).toBe(false);
    expect(isNull(new Date)).toBe(false);
    expect(isNull(new Error)).toBe(false);
    expect(isNull([1, 2, 3])).toBe(false);
    expect(isNull([])).toBe(false);
    expect(isNull({ '0': 1, 'length': 1 })).toBe(false);
    expect(isNull({})).toBe(false);
    expect(isNull('a')).toBe(false);
    expect(isNull('')).toBe(false);
    expect(isNull(1)).toBe(false);
    expect(isNull(0)).toBe(false);
    expect(isNull(NaN)).toBe(false);
    expect(isNull(true)).toBe(false);
    expect(isNull(false)).toBe(false);
    expect(isNull(/x/)).toBe(false);
    expect(isNull()).toBe(false);

    expect(isNull(Object(false)).toBe(false);
    expect(isNull(Object(0)).toBe(false);
    expect(isNull(Object('a')).toBe(false);

*/