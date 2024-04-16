import {odd, even} from './var'
import checkNumber from './func'

function checkStringOddOrEven(str) {
    if (str.length % 2) {
        return odd
    }
    return even
}

console.log(checkNumber(10))
console.log(checkStringOddOrEven('Hello'))

var add = function(a, b) {
    return a + b;
}

var add = (a, b) => {
    return a + b;
}

var add = (a, b) => a + b;

var tell = message => message;





var fun = function() {
    return 'aaa'
}

var fun = () => 'aaa'