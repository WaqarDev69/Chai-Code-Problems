let fruits = ["mango", "litche", "apple", "banana"];
function extractFruits(fruits) {
    first = console.log(fruits[0]);
    last = console.log(fruits[fruits.length - 2]);
    return [first, last];
}
extractFruits(fruits);

// grapes replace banana in array
let index = fruits.indexOf("banana");
if (index !== -1) {
    fruits[index] = "grapes";
}
console.log(fruits);

// add fruits in the first and last of the array
fruits.push("Gavava");
fruits.unshift("papaya");
console.log(fruits);

// remove fruits in the first and last of the array
fruits.pop();
fruits.shift();
console.log(fruits);

// Array.length function
let arr = [1, 23, 4, 56, 7, 8, 90, 0, 0];
function arrayLength(arr) {
    return arr.length;
}
console.log(arrayLength(arr));

fruits.map((fruit) => {
    console.log(fruit);
});

function isPresent(fruit) {
    return fruit.includes("grapes");
}
console.log(isPresent(fruits));

// Filter even numbers only
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isEven(number) {
    return number.filter(num => num % 2 === 0)

}
let result = isEven(array)
console.log(result);


// Double each number using map method

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let double = num.map((val) => val * 2)
console.log(double);


// use reduce to sun the array 
let newArr = num.reduce((prev, res) => {
    return prev + res
})
console.log(newArr);

// Array of object 
let persons = [
    {
        name: 'waqar',
        age: 19,
    },
    {
        name: 'bassam',
        age: 18,
    },
    {
        name: 'shayan',
        age: 16,
    },
    {
        name: 'anas',
        age: 20,
    },
    {
        name: 'areeb',
        age: 23,
    },
    {
        name: 'basit',
        age: 27,
    },
    {
        name: 'shazil',
        age: 21,
    },
]

function getAdults(arr) {
    return arr.filter(val => val.age >= 18)
}

let res = getAdults(persons)
console.log(res);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort((a, b) => b - a);
console.log(numbers);

