// Chapter 5 Objects

// quotes properties

'real name' = 'Clark Kent';

//creating objects

// 1
const ironman = {};

// 2 
const spiderman = new Object();

// 3 short hand
//property key same as variable name
const name = 'Iron Man';
const realName = 'Tony Stark';

//long way
const ironman = {name: name, realName: realName};

//short way
const ironman = {name, realName};


// Properites
//access properties
// 1
spiderman.name 

// 2 
spiderman['name']


//calling methods
//dot
spiderman.web()

//braket notaion
spiderman['web']()
//methods need () after


//add properties
spiderman.city = 'New York City';

//change properties
spiderman['real name'] = 'Tony Stark';

//remove properties
delete spiderman.fly

//Checking for properties/methods
//check to see if object superman has property city
// in operator
'city' in superman;

//check if not undefined
superman.city !== undefined; 

//method
superman.hasOwnProperty('city');


//find all properties in object 
//for in loop
for(const key in superman) {
    console.log(key + ':' + superman[key]);
};
//key is like i

//add check if object has property
for(const key in superman) {
    if(superman.hasOwnProperty(key)) {
        console.log(key + ':' + superman[key]);
    }
};

// Object.keys() creates array of keys of object
for(const key of Object.keys(superman)) {
    console.log(key);
}

// Object.values() creates array of values of object
for(const value of Object.values(superman)) {
    console.log(value);
}

// Object.enteries() creates array of keys value pairs of object
for(const [key, value] of Object.entries(superman)) {
    console.log(`${key}: ${value}`);
}

// Objects as parameters for functions
function student(name, major, school) {
    return `Hi my name is ${name} and my major is ${major} at ${school}.`;
}

//Naming
// put things inside object to prevent name over lap and complicated naming
const names = {
    x: 1,
    y: 2,
    mathProb() {
        answer = x + y;
        return answer;
    }
};


//JSON
// parce() method takes JSON string and converts it to an object in JS
JSON.parce(name);

// stringify() method takes JS object and covnerts it to JSON string
JSON.stringify(name);

// add something between each key-value pair
JSON.stringify(name, " ", null);


// date object 
// create
const today = new Date(); // no date specified 
                         // result is todays date and time
// use
today.toString();

// date parameters
new Date(year,month,day,hour,minutes,seconds,milliseconds);

// Epoch = 1st Janumary 1970
new Date(1508367600000); // 1508367600000 is the no. of seconds since the Epoch date
// date is Wed Jun 21 2017 00:00:00 GMT+0100 (BST)

// getter methods
// date object cannot be changed directly so use getter methods
// 2 versions
    // local time
getDay(); // returns day 0-6 
         // 0 = Sunday 6 = Saturday 
getDate(); // returns day of month

getMonth(); // returns monnth 0-11

getYear(); // doesn't work for years < 2000

getFullYear(); // works for all years

getHours();

getMinutes();

getSeconds();

getMilliseconds();

// UCT universal coordinated time
getUTDay(); 
getUTDate(); 
getUTMonth(); 
getUTYear(); 
getUTFullYear(); 
getUTHours();
getUTMinutes();
getUTSeconds();
getUTMilliseconds();

// setter methods
setDay();

setDate(); 

setMonth(); 

setFullYear(); 

setHours();

setMinutes();

setSeconds();

setMilliseconds();


// regular expressions aka RegExp 
// create
const practice = /[a-zA-z]+'ing'$/; // looks for words ending in ing
// or
const practice = new RegExp('[a-zA-Z]+ing');

// use
practice.test(); // return boolean
// or
practice.exec(); // returns null if false and 1st array with match found

// basic regular expression
const string = /StringofCharacters/;

// charcter group
const group = /[samantha]/;
// a-z = all smallcase letters
// A-Z = all uppercase letters
// 0-9 = digits 0 through 9
// ^ = unidentify   ex: /[^A_Z]/ = any character that is not uppercase

// RegExp properties
// global
// ignoreCase
// multiline

// RegExp special charcters
// .
// \w
// \W
// \d
// \D
// \s
// \S

// RegExp modifiers
// place after token


// string methods
// .split();
// .match();
// .search();
// .replace();
