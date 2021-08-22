import { getForm } from '../utils'
import parseForm from '../../src/form/parseForm';

test('parseForm test', () => {

    var form = getForm();
    
    var json = {
        input1: 'value1',
        input2: '',
        checkbox1: true,
        checkbox2: false,
        radio: 'radio1',
        select1: 'option2',
        select2: 'option4'
    };

    expect(parseForm(form)).toStrictEqual(json);

});
