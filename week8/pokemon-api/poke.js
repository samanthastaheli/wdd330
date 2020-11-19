const url = "https://pokeapi.co/api/v2/type/3";
 
function convertToJson(response) { // response is an argument 
    if(response.ok) {
        return response.json();
    } else {
        throw new Error(response.statusText); // statusText is property that contains info about what went wrong 
    }
}

function getPokemon(url) {
    fetch(url)
        .then((response) => {
            console.log(response);
            //convertToJson(response);
        })
        .then((data) => { // fetch returns promise use then to use promise
            pokemon = data.pokemon;
    });  
}

// does same thing as getPokemon
// async function getPokemonAsync(url) {
   // let pokemon = await fetch(url).then(convertToJson);
        /* or do: 
            let response = await fetch(url);
            let pokemon = await fetch(url).then(response);
        */
// }

async function getPokemonAsync(urlAll) {
    let pokemon = await fetch(urlAll).then(convertToJson);
    console.log(pokemon.pokemon);
    displayPokemon(pokemon.pokemon); // get pok
}

function displayPokemon(list) {
    const listElement = document.getElementById('listElement');
    const newArray = list.map((item) => {
        return `<li data-url="${item.pokemon.url}">${item.pokemon.name}</li>` // data-url is attribute
        // return `<li><a href="${item.pokemon.url}">${item.pokemon.name}</a></li>` // when clicked displays Json
    }); // join makes the array of strings into one big string 
    listElement.innerHTML = newArray.join(""); // putting empty quotes in join makes comma go away 
    // console.log(newArray);
}

async function pokemonClicked() { // func needs to be called somewhere 
    console.log(event.target.dataset.url); // is li
    console.log(event.currentTarget); // is ul, thing listener is attached too
    await fetch(event.target.dataset.url).then((response)=> {
        let details = convertToJson(response);
        
        details.then((response) => { // .then resolved promise 
            getPokemonDetails(response);
        })
    }); // is getting url from line above not the url declared at to of doc

    // document.querySelector(".name").innerHTML = pokemon.name; // was data.name and data.id
    // document.querySelector(".number").innerHTML = pokemon.id;
    // document.querySelector(".pokeimg").src = data.sprites.front_default;
}

async function displayDetails() {
    document.getElementById("listbox").style.transform = "translateX(-1500px)";
    document.getElementById("detailsbox").style.transform = "translateX(-1500px)";
    //getPokemonDetails(event.target.dataset.url);

    //list.style.transform = "translateX(-100vw)";
    //details.style.transform = "translateX(-100vw)";
}

async function hideDetails() {
    const list = document.querySelector(".listbox");
    const details = document.getElementById("detailsbox");

    list.style.transform = "translateX(0)";
    details.style.transform = "translateX(100vw)";
}

function getPokemonDetails(pokemon) {
        document.querySelector('.name').innerHTML = pokemon.name;
        //document.querySelector('.species').innerHTML = pokemon.species;
        document.querySelector('.number').innerHTML = pokemon.id;
        //document.querySelector('.stats').innerHTML = pokemon.stats;
        // get img
        displayDetails();
}

document.getElementById('listElement').addEventListener('click', pokemonClicked); // called here 
getPokemonAsync(url); // pass in url 
document.getElementById('back').addEventListener('click', hideDetails);


// get the pokemon clicked api into json and objects
// display the pokemons detils on page (new page or same?) 
    // could display none the list and just display the detials
    // then when click back button display the 



/* function then(callback) { // this function is deep in browsers js
        callback(response); // then is used above in getPokemon function
} */                       // resposnse is within the function 