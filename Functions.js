function sum(a, b) {
    return a + b
}
console.log(sum(2, 3));


function isEven(num) {
    return num % 2 === 0
}
console.log(isEven(3));



function toUpperCase(str) {
    console.log(typeof (str));
    return str.toString().toUpperCase()
}
console.log(toUpperCase('hello world'));


function greet(name) {
    return `hello ${name.toUpperCase()}`

}
console.log(greet("waqar"));


function max(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}
console.log(max(6, 4))

function factorial(num) {
    if (num === 0) return 1;
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // Output: 120


function countVowels(str) {
    let vowels = 'aeiouAEIOU'
    let counter = 0
    for (const char of str) {
        if (vowels.includes(char)) {
            counter++
        }
    }
    return counter
}
console.log(countVowels('aeiou'))

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function reverse(arr) {
    return arr.reverse()
}
console.log(reverse(array));


