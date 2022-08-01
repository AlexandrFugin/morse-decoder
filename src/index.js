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

let arrSymbolBin = [];
let arrSymbolMorse = [];
let res = '';

for (i=0; i < expr.length; i+=10) {
    arrSymbolBin.push(expr.slice(i, i + 10))
}
  arrSymbolBin.map(symbol => arrSymbolMorse.push(symbol.replace(/10/g,'.').replace(/11/g,'-').replace(/00/g,'')) );

  arrSymbolMorse.map(symbol => symbol == '**********' ? res += ' ' : res += MORSE_TABLE[symbol]);

  return res;
}

module.exports = {
    decode
}