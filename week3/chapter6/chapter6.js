// Document Object Model

// nodes
// like an array but not
// can use index notation

/* code      type
    1       element
    2       atrribute
    3       text
    8       comment
    9       body            */

// find type
const body = document.body;
console.log(body.nodeType);

const images = document.images;
console.log(images.nodeType);

const links = document.links;
console.log(links.nodeType);

const anchors = document.anchors;
console.log(anchors.nodeType);

const forms = document.forms;
console.log(forms.nodeType);

// find name
console.log(body.nodeName);

// turn node into array
const imageArray = Array.from(document.images);
console.log(imageArray);

// find value
const week = document.getElementById('week');
console.log(week.nodeValue);
//or
console.log(week.textContent);

// set elements attribute using DOM

// !!!!!!!!! NOT WORKING !!!!!!!!!!
const practice = document.getElementsByClassName('practice');

// set a class
// const practiceSetAttribute = document.setAttribute('id', 'practice-chpt6');
                                                //arrtibute  //name or what is inside it
// className property
console.log(practice.className);
console.log(practice.getAttribute);


// class list


// how to create elements in DOM
// step 1: create the element
const p = document.createElement('p');

// step 2: create a test node
const pText = document.createTextNode('This is a paragraph created from JavaScript.');
// or use .textContent then don't need to append
p.textContent('This is a paragraph created from JavaScript.');
// step 3: append the node
const pTextAppended = p.appendChild(pText);

// create elements using a function
function createElement(tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
}
const paragraph = createElement('p', 'This is a paragraph created from JavaScript.')


// replace and remove elements
// use .replaceChild()
// use .removeChild()


// update CSS
// use style property
document.getElementsByTagName('p').innerHTML.style.color = "red";
// css propertys must be written in CamelCase
// instead of background-color it is backgroundColor

// check style properties
// use .getComputedStyle()
