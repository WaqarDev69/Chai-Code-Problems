let helloWorld = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Hello World");
        resolve(); // Promise is fulfilled
    }, 1000);
});
helloWorld.then(() => {
    console.log("Promise Resolved");
});


let isEven = new Promise((resolve, reject) => {
    let num = 3;
    if (num % 2 === 0) {
        console.log("Even Number");
        resolve()
    } else {
        console.log("Odd Number");
        reject()
    }
})

isEven
    .then(() => {
        console.log('resolve');
    })
    .catch(() => {
        console.log('reject');
    })


let numPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(0)
    }, 1000);
})

numPromise
    .then((number) => {
        return number + 1
    })
    .then((number) => {
        return number + 1
    })
    .then((number) => {
        return number + 1
    }).then((number) => {
        console.log(number);
    })


let apiCall = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: 'waqar', age: 19 })
    }, 2000);
})

apiCall.then((data) => {
    console.log("Data", data);
})

// Promise.ALL
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 Resolved')
    }, 2000);
})
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 Resolved')
    }, 3000);
})
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 Resolved')
    }, 4000);
})

Promise.all([promise1, promise2, promise3]).then((results) => {
    console.log('All Promise Resolved');
    console.log(results);
})




// Race Promises
let promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise One Win")
    }, 2000);
})
let promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Two Win")
    }, 1000);
})

Promise.race([promiseOne, promiseTwo]).then((result) => {
    console.log('Win : ', result);
})


//Failed API Call
let failedApi = new Promise((resolve, reject) => {
    setTimeout(() => {

        reject(console.log('Error:Not Found'))
    }, 2000);
})

failedApi.then(() => {
    console.log('Success');

}).catch(() => {
    console.log('Failed');

})