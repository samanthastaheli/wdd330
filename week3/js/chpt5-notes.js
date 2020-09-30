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
