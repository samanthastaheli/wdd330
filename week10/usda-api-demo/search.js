/* when user types in input box (addEventListener keyup (means they are done typing)) 
    get what they typed (watch for key presses)
    make a call to search api with the query string
    When the results come back
        foreach result genertae html and add to out html list (ul)
*/

import { foodKey } from './keys.js'; 
const baseUrl = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=';
    function convertToJson(res) {
        if(res.ok){
            return res.json();
        } else {
            throw new Error(res.statusText);
        }
    }

async function getSearchResults(query) {
    const results = await fetch(baseUrl+foodKey+`query=${query}`).then(convertToJson); 
    return results; // first put 'return' so don't forget the function needs to return somthing then add other stuff above
}

function renderSearchResults(results) {
    const resultsListElement = document.getElementById('searchResults');
    resultsListElement.innerHTML.map((item) => `<li>${item.description}</li>`).join(''); // returns new array 
                                                            // join('') makes it so there will be not commas 
    // map is great to convert somthing
}

// results is local variable for function 
export async function search(ev) {
    const query = ev.target.value;
    console.log(query);
    if(query.length > 2) { // makes it so it will search when there are 3 characters typed 
        const results = await getSearchResults(query); // when need it to wait use await keyword 
        console.log(results);
        renderSearchResults(results.foods);
    }
}



