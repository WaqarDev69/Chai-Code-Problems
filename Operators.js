//Add
function add(a, b) {
    return a + b;
}
console.log(add(2, 4));

//Sub
function sub(a, b) {
    return a - b;
}
console.log(sub(4, 2));

//Multiply
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 4));

//Divide
function divide(a, b) {
    return a / b;
}
console.log(divide(2, 4));

//Reminder
function reminder(a, b) {
    return a % b;
}
console.log("Reminder is ", reminder(10, 3));

//Assigment Operators
let addAssigment = 5;
addAssigment += 3;
console.log(addAssigment);

let subAssigment = 5;
subAssigment -= 3;
console.log(subAssigment);

//Comparison Operator
function compare(a, b) {
    if (a > b) {
        console.log(`${a} is greator then ${b}`);
    } else if (a < b) {
        console.log(`${a} is less then ${b}`);
    } else {
        console.log(`${a} is equal to ${b}`);
    }
}
compare(4, 3);

// Compare with equal
function equal(a, b) {
    if (a >= b) {
        console.log("a is equal or greator then b ");
    } else if (a <= b) {
        console.log(`a is equal or less then b`);
    }
}
equal(4, 4);

// Equal
function equals(a, b) {
    return a == b;
}
console.log(equals(2, 2));

function equals(a, b) {
    return a === b;
}
console.log(equals(2, "2"));

//logical Operators

let one = 1;
let two = 2;
console.log(one < two && two > one);
console.log(one < two || two == 3);
console.log(one != 2);

// ternary Operator
function ternary(a) {
    return a >= 0 ? "positive" : "negative"

}
console.log(ternary(0));


