//Lexical Scoping
function outer() {
    let userName = 'waqar'
    function inner() {
        console.log('inner', userName);
    }
    inner()

}

outer()
// console.log('outer', userName);


// closures

function createCounter() {
    let num = 0
    function increase() {
        return num++
    }
    return increase
}
let counter = createCounter()
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());



function createPerson(name) {
    let age = 10
    return {
        getName: function () {
            return name;
        },
        getAge: function () {
            return age;
        },
    }

}
let person = createPerson('waqar')
console.log(person.getName());
console.log(person.getAge());


function add(a) {
    return function another(b) {
        return a + b
    }
}
let sum = add(3)
console.log(sum(4));


