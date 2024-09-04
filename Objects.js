let person = {
    name: "Waqar",
    age: 19,
    gender: 'Male',
    city: 'Karachi',
    greet: function () {
        console.log('hey', person.name);
    }
}
// console.log(`person Name is ${person.name} , and live in ${person.city}`);
person.age = 200
// console.log(person.age)
person.hobby = 'playing Football'
// console.log(person);
delete person.gender
// console.log(person);

let hasGender = 'gender' in person;

console.log(hasGender);// Output: false

let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2022,
    color: 'Blue'
};
for (const key in car) {
    // console.log(`${key}: ${car[key]}`);
}

let company = {
    CEO: {
        name: 'Alice Johnson',
        age: 50
    },
    address: {
        street: '123 Main St',
        city: 'San Francisco',
        country: 'USA'
    }
};

// console.log(company.CEO.name);
for (let key in company.address) {
    // console.log(`${key}: ${company.address[key]}`);
}


person.greet('khan');


// Original company object
let Company = {
    CEO: {
        name: 'Alice Johnson',
        age: 50
    },
    address: {
        street: '123 Main St',
        city: 'San Francisco',
        country: 'USA'
    }
};

// Creating a deep clone of the Company object
let clonedCompany = JSON.parse(JSON.stringify(Company));

// Modifying a nested property in the cloned object
clonedCompany.address.city = 'Los Angeles';

// Logging both objects to verify the original remains unchanged
console.log('Original Company:', Company);

console.log('Cloned Company:', clonedCompany);







