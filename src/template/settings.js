

let settings = {
    tokens: {
        '&': {
            process: (line, token, statement) => {
                return 'r.push(' + statement + ');' + '\n';
            }
        },
        'if': {
            process: (line, token, statement) => {
                return 'if ' + statement + '{' + '\n';
            }
        },
        'elseif': {
            process: (line, token, statement) => {
                return '} else if' + statement + '{' + '\n';
            }
        },
        'else': {
            process: (line, token, statement) => {
                return '} else {' + '\n';
            }
        },
        'endif': {
            process: (line, token, statement) => {
                return '}' + '\n';
            }
        },
        'for': {
            process: (line, token, statement) => {
                return 'for ' + statement + '{' + '\n';
            }
        },
        'endfor': {
            process: (line, token, statement) => {
                return '}' + '\n';
            }
        },
        'break': {
            process: (line, token, statement) => {
                return 'break;' + '\n';
            }
        },
        'continue': {
            process: (line, token, statement) => {
                return 'continue;' + '\n';
            }
        },
    }
    
}

export default settings;