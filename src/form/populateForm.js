import findOne from '../dom/findOne';
import isSet from '../lang/isSet';

/**
 * 
 * The `populateForm()` function poulates form inputs with a data object.
 * 
 * @param {Element} form
 * @param {object} data
 */
function populateForm(form, data) {
  
    for (const key in data) {
        let value = data[key];
        let element = findOne('[name="' + key + '"]', form);
        if (isSet(element)) {
            var type = element.getAttribute('type');
            if (type == 'radio') {
                let radio = findOne('[name="' + key + '"][value="' + value + '"]', form);
                if (isSet(radio)) radio.checked = true;
            } else if (type == 'checkbox' && (value == true || value == 'true')) {
                element.checked = true;
            } else {
                element.value = value;
            }
            
            continue;
        }
        
        let smartElement = findOne('[data-name="' + key + '"]', form);
        if (isSet(smartElement)) {
            value = typeof value === 'object' ? JSON.stringify(value) : value;
            smartElement.setAttribute('data-value', value);
            
            continue;
        }
    }

}

export default populateForm;