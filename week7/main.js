const url ='https://pokeapi.co/api/v2/pokemon/';

function convertToJson(res) { // res short for response
    console.log(res);
    if(res.ok) { // if response is true 
        return res.json(); // json returns promise 
    }
    else { // send message to user 
        // throw an error
        throw new Error('error:', res);
    }
}

function doStuff(data) {
    console.log('first', data); // first console log
}


// other way: response.then() instead of function doStuff

function getPokemon() {
    const pokemonName = document.getElementById('whichOne').value;
    const response = fetch(url + pokemonName) // fetch returns promise 
        .then(convertToJson)
        .then(doStuff)
        .catch(() => { 
            console.log('error: ', error) 
        }); 
    // then tells what to do                                            // error will display in console if there is an error
    // parse a promise 
}

document.getElementById('submitButton').addEventListener('touchend', getPokemon);

// console.log('second', response); // second console log

// data json example
function getFoods() {
    fetch("data.json") // can do that because main.js and data.json are in same folder
        .then(convertToJson)
        .then((data) => { 
            console.log(data);
        });
}

