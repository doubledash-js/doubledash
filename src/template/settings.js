
let settings = {
    tokens: {
        '&': (line, token, statement) => {
            return 'r.push(' + statement + ');' + '\n';
        },
        'if': (line, token, statement) => {
            return 'if ' + statement + '{' + '\n';
        },
        'elseif': (line, token, statement) => {
            return '} else if' + statement + '{' + '\n';
        },
        'else': (line, token, statement) => {
            return '} else {' + '\n';
        },
        'endif': (line, token, statement) => {
            return '}' + '\n';
        },
        'for': (line, token, statement) => {
            return 'for ' + statement + '{' + '\n';
        },
        'endfor': (line, token, statement) => {
            return '}' + '\n';
        },
        'break': (line, token, statement) => {
            return 'break;' + '\n';
        },
        'continue': (line, token, statement) => {
            return 'continue;' + '\n';
        },
        '>': (line, token, statement) => {
            console.log(line);
            console.log(token);
            console.log(statement);
            const parts = statement.trim().split(" ", 2)

            const name = parts[0];
            const params = parts[1];
            console.log(this);
            const tpl = "";//Template.getPartials()[name]

            return 'r.push(_supplant(`' + tpl + '`, ' + params + ');'+ '\n';
        },
        'log': (line, token, statement) => {
            console.log(statement);
            return '';
        }
    }
    
}

export default settings;