// Helper Functions
// get JSON with helper function
export function getJSON(url) {
    return fetch(url).then(function (response) { // what gets passed through respose ???
        if (!response.ok) { // ! operator mean logical not, what does .ok mean ???
            throwError(response.statusText); 
        } else {
            return response.json(); // json() reads response 
                                   //returns promise
                                  //resolves with the parsed string of respose as JSON
        }
    })
    .catch(function (error) { // what passes through error 
        console.log(error)
    });
}

// get random number
export function getRandomNum(num) {
    return Math.floor(Math.random() * num);
}