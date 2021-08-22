
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

function getForm() {
    let form = document.createElement('form');
    
    let input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.setAttribute('name', 'input1');
    input1.setAttribute('value', 'value1');

    let input2 = document.createElement('input');
    input2.setAttribute('type', 'text');
    input2.setAttribute('name', 'input2');
    
    let checkbox1 = document.createElement('input');
    checkbox1.setAttribute('type', 'checkbox');
    checkbox1.setAttribute('name', 'checkbox1');
    checkbox1.setAttribute('value', 'checkbox1');
    checkbox1.setAttribute('checked', 'checked');

    let checkbox2 = document.createElement('input');
    checkbox2.setAttribute('type', 'checkbox');
    checkbox2.setAttribute('name', 'checkbox2');
    checkbox2.setAttribute('value', 'checkbox2');
    
    let radio1 = document.createElement('input');
    radio1.setAttribute('type', 'radio');
    radio1.setAttribute('name', 'radio');
    radio1.setAttribute('value', 'radio1');
    radio1.setAttribute('checked', 'checked');

    let radio2 = document.createElement('input');
    radio2.setAttribute('type', 'radio');
    radio2.setAttribute('name', 'radio');
    radio2.setAttribute('value', 'radio2');

    let option1 = document.createElement('option');
    option1.setAttribute('value', 'option1');
    let option2 = document.createElement('option');
    option2.setAttribute('value', 'option2');
    option2.setAttribute('selected', 'selected');
    let option3 = document.createElement('option');
    option3.setAttribute('value', 'option3');
    let option4 = document.createElement('option');
    option4.setAttribute('value', 'option4');
    let option5 = document.createElement('option');
    option5.setAttribute('value', 'option5');
    let option6 = document.createElement('option');
    option6.setAttribute('value', 'option6');

    let select1 = document.createElement('select');
    select1.setAttribute('name', 'select1');
    select1.appendChild(option1);
    select1.appendChild(option2);
    select1.appendChild(option3);

    let select2 = document.createElement('select');
    select2.setAttribute('name', 'select2');
    select2.appendChild(option4);
    select2.appendChild(option5);
    select2.appendChild(option6);


    form.appendChild(input1);
    form.appendChild(input2);
    form.appendChild(checkbox1);
    form.appendChild(checkbox2);
    form.appendChild(radio1);
    form.appendChild(radio2);
    form.appendChild(select1);
    form.appendChild(select2);

    return form;
}

export {
    getDom,
    getForm
};
