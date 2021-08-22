import isSet from '../lang/isSet';
import isJson from '../lang/isJson';
import find from '../dom/find';
import findOne from '../dom/findOne';

/**
 * The `parseForm()` function finds all form elements and returns a JSON object of all the values.
 * 
 * @param {Element} element 
 * @returns {object}
 */
function parseForm(form) {
    
    let data = {};

    let elements = find('input, select, textarea', form);
    for (let i = 0; i < elements.length; i++) {
        let field = elements[i];
        let name = field.getAttribute('name');
        let type = field.getAttribute('type');

        if (name) {
            let value;

            if (type == 'radio') {
                let checked = findOne('input[name=' + name + ']:checked', form);
                value = isSet(checked) ? checked.value : undefined;
            } else if (type == 'checkbox') {
                value = field.checked;
            } else {
                value = field.value;
                value = isJson(value) ? JSON.parse(value) : value;
            }

            // check for repeaters `[]`
            if (name.indexOf('[]') !== -1) {
                let splitsville = name.split(/-(.*)/);
                let repeater = splitsville[0];
                let cleanName = splitsville[1];

                if (!data.hasOwnProperty(repeater)) {
                    data[repeater] = {};
                }

                if (data[repeater].hasOwnProperty(cleanName)) {
                    data[repeater][cleanName].push(value);
                } else {
                    data[repeater][cleanName] = [value];
                }

            } else {
                data[name] = value;
            }

        }
    }

    return data;
}

export default parseForm;
