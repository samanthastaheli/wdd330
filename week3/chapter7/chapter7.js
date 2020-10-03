// Events

// like a notification
// blocking approach: the function/statement/loop/etc. is blocking the other code from running
// non-blocking approach: use event listeners

// inline event listeners
// best not to use
// <p onclick="console.log('You Clicked Me!')">Click Me</p>

// old event handlers
// document.onclick = function (){ console.log('You clicked on the page!'); }
// only allows 1 function

// event listerners:
// create event
document.body.addEvenListener();
// 1st parameter = type of event
// 2nd parameter = callback function
// 3rd parameter = ?
// click will run when user clicks on, press enter, or taps screen
