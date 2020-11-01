let p = new Promise((resolve, reject) => { // promise has resolve and reject parameters
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

p.then((message) => {
    console.log('This is a promise that is in the then ' + message)
})
.catch((message) => {
    console.log('This is a promise that is in the catch ' + message)
})


// using callbacks
const b = 1 + 2;
function callbackExample(callback, errorCallback) {
    if (b == 3) {
        callback({message: 'Success'})
    } else {
        errorCallback({message: 'Failed'})
    }
}

callbackExample((message) => {
    console.log('This is a callback ' + message)
}, (error) => {
    console.log('This is a callback ' + message)
})