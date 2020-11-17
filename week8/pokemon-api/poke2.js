const urlAll = "https://pokeapi.co/api/v2/type/3";

// function convertToJson(url) {
//     let object = fetch(url).then(response => response.json()) // response is object from url
//     .then(data => console.log(data));
// }
// convertToJson(urlAll);

function convertToJson(response) { // response is an argument 
    if(response.ok) {
        return response.json();
    } else {
        throw new Error(response.statusText); // statusText is property that contains info about what went wrong 
    }
}

function getPokemon(urlAll) {
    fetch(urlAll)
        .then(convertToJson)
        .then((data) => { // fetch returns promise use then to use promise
            pokemon = data.pokemon; 
    });  
}

async function getPokemonAsync(urlAll) {
    let pokemon = await fetch(urlAll).then(convertToJson);
    console.log(pokemon.pokemon);
    displayPokemon(pokemon.pokemon); // get pokemon from urlAll
    return pokemon.pokemon; 
}

function displayPokemon(list) { // list is urlAll's pokemon key 
    const listElement = document.getElementById('listElement');
    const newArray = list.map((item) => {
        return `<li data-url="${item.pokemon.url}">${item.pokemon.name}</li>` // data-url is attribute
        // when clicked displays Json
    }); 
    listElement.innerHTML = newArray.join(""); // putting empty quotes in join makes comma go away 
                                              // join makes the array of strings into one big string 
    console.log(newArray);
}

async function pokemonClicked() { // func needs to be called somewhere 
    console.log(event.target.dataset.url); // is li
    console.log(event.currentTarget); // is ul, thing listener is attached too
    const details = await fetch(event.target.dataset.url).then(convertToJson); // is getting url from line above not the url declared at to of doc
    console.log(details);
    getPokemonDetails(details);

    // document.querySelector(".name").innerHTML = pokemon.name; // was data.name and data.id
    // document.querySelector(".number").innerHTML = pokemon.id;
    // document.querySelector(".pokeimg").src = data.sprites.front_default;
}

async function displayDetails(event) {
    const list = document.querySelector(".listbox");
    const details = document.getElementById("detailsbox");
    getPokemonDetails(event.target.dataset.url);

    list.style.transform = "translateX(-100vw)";
    details.style.transform = "translateX(-100vw)";
}

async function hideDetails() {
    const list = document.querySelector(".listbox");
    const details = document.getElementById("detailsbox");

    list.style.transform = "translateX(0)";
    details.style.transform = "translateX(100vw)"; // detials is null right now 
}

function getPokemonDetails(url) {
    getPokemon(url).then(function(pokemon) { // getPokemon of converToJson // !! error cannot read property then of undifined 
        document.querySelector('.name').innerHTML = pokemon.name;
        document.querySelector('.species').innerHTML = pokemon.species;
        document.querySelector('.number').innerHTML = pokemon.number;
        document.querySelector('.stats').innerHTML = pokemon.stats;
        // get img 
    });
}

document.getElementById('listElement').addEventListener('click', pokemonClicked); // called here 
getPokemonAsync(urlAll); // pass in url 
document.getElementById('back').addEventListener('click', hideDetails);
