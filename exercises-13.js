
function xo(str) {
    var jml_x = str.split('x');
    var jml_o = str.split('o');

    if(jml_x.length == jml_o.length) {
        return 'true';
    }
    else {
        return'false';
    }
}

console.log(xo('xoxoxo'));  //true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true