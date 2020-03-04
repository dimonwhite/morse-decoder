const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    expr = expr.match(/(.{1,10})/g).map(item => item.match(/(.{1,2})/g).map(item => {
        let symbol;
        switch (item) {
            case '10': {
                symbol = '.';
                break;
            }
            case '11': {
                symbol = '-';
                break;
            }
            case '**': {
                symbol = ' ';
                break;
            }
            default: {
                symbol = '';
                break;
            }
        }
        return symbol;
    }).join(''));

    expr = expr.reduce((accum, item) => {
        return accum += (MORSE_TABLE[item]) ? MORSE_TABLE[item] : ' ';
    }, '');

    return expr;
}

module.exports = {
    decode
}