for (let i = 0; i <= 10; i++) {
    // console.log(i);
}

//calculate sum of all numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
//console.log(sum);


//print even numbers
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        // console.log(i);
    }
}

let arr = ['waqar', true, 33]
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}


// Reversed the array using for loop 
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let reverseArray = []
for (let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);

}
// console.log(reverseArray);



let str = "example sentence";
let charToCount = 'e';
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === charToCount) {
        count++; // Increment counter
    }
}

console.log(count);


