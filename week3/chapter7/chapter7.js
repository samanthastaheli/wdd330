// Events

// like a notification
// blocking approach: the function/statement/loop/etc. is blocking the other code from running
// non-blocking approach: use event listeners

// inline event listeners
// best not to use
<p onclick="console.log('You Clicked Me!')">Click Me</p>

// old event handlers
document.onclick = function (){ console.log('You clicked on the page!'); }
// only allows 1 function

// event listerners:
// create event
document.body.addEvenListener();
// 1st parameter = type of event in ''
// 2nd parameter = callback function
// 3rd parameter = ?
// click will run when user clicks on, press enter, or taps screen


// remove event
removeEventListener(); 


// prevent an event 
// use method: 
preventDefault();

    // check if event is cancelable 
    // use property:
    cancellble 

    // chekc if prevent worked
    // use property:
    defaultPrevented


// event target
// returns html code that was clicked on 
// returns reference of node clicked on 


// event cordinates
// properties: 
screenX, screenY
// shows no. of pixels from left and top of the sccreen to where event took place 

clientX, clientY
/* shows no. of pixels from left and top of the client 
to what event is being used (usually the browser window) */

pageXOffset, pageY 
/* shows no. of pixels from left and top based on where event took place on document 
    takes into account if page has been scrolled */
// example:
function findCordinates(event){
    console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
}
addEventListener('click', findCordinates);


// event types
// mouse events
    // click
        /* mouse down and mouseup 
            occur before click event exucutes */
    // dbclick

    // mouseover

    // mouse out 
        // when mouse moves away from it 
    // mousemove
        // when mouse moves over the element applied to 

// keyboard events
    // keydown
        // when key is pressed and held down
    // keypress
        // ocures inbetween keydown and keyup 
        // when character is typed
    // keyup
        // when key is released 

// modifier key
altKey
shiftKey
ctrlKey
metaKey // is the command key on mac
// to combine modifer key with a letter
event.key === 'c' && event.ctrlKey

// touch events
/* click event includes touch 
    but has delay of 300ms */
touchstart // when first touch it
touchend // when touch ends
touchmove // when touched and held down and can move the touch
touchenter // when user already touching but moves/slides the touch over to the element with touchenter
touchleave // when user still touching surface but leaves the element with the touchleave event enabled 
touchcancel /* when touch is inturupted by...
                finger moves outside document window 
                too many fingers at once
                pop-up dialog */ 

// touches property
    // for when many touches occur on screen
    // list with lenght property
    // access using index notation

/* touch object
    // its properties:
        touch.screenX and touch.screenY
        touch.radiusX and touch.radiusY
            finds radius of covered by touch
        touch.force
            returns the forvce of the touch in a value 0-1     
        touch.identifer
            unique ID
*/


// event propagation
    // is order events are exucted on each element 
    // two forms:
        // bubbling: when even exucutes on 