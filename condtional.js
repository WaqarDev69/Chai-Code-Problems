


// if else statements
let num = 0;
if (num > 0) {
    console.log("positive");
}
if (num < 0) {
    console.log("negative");
} else if (num == 0) {
    console.log("Zero");
}

// Eligible to vote
let age = 10;
if (age <= 0) {
    console.log("Enter your Real age");
} else if (age >= 18) {
    console.log("You are eligible to vote");
} else if (age < 18) {
    console.log("You are Under 18");
}

// Compare 3 numbers using nested if else 
let num1 = 10;
let num2 = 25
let num3 = 105

if (num1 >= num2) {
    if (num1 >= num3) {
        console.log("NUmber One is Greator");
    } else {
        console.log("Number three is greator");

    }

} else if (num2 >= num3) {
    console.log("number 2 is greator");
} else {
    console.log("number three is greator");

}

// Conditional ternary operators 
let number = 3;

let res = (number % 2 === 0 ? "Even" : "Odd")
console.log(res);


//Switch Cases
let day = 7;
switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;

    default:
        console.log("invalid day");

}

let score = 70;
switch (true) {
    case (score < 33):
        console.log("You are fail");
        break;
    case (score >= 33 && score <= 69):
        console.log("You got B grade");
        break;
    default:
        console.log("You got A grade");
}



