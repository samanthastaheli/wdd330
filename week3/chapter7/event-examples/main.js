// function doSomething() {
//     console.log('Something Happened');
// }

// addEventListener('click', doSomething);

// info about event passes on with callback
// function doSomething(event){
//     console.log(event.type);
// }
// // event is parameter var name can change to anything 
// addEventListener('click', doSomething);

// function doSomething(event){
//     console.log(event.target);
// }
// addEventListener('click', doSomething);

function doSomething(event){
    console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
}
addEventListener('click', doSomething);

addEventListener('keydown', highlight);

