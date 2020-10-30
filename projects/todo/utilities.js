// get list element
export function qs(selector){
    return document.querySelector(selector);
  } 
  
  // Retrieve todo's from data store
  export function getFromLS(key){
    return JSON.parse(localStorage.getItem(key)); // parse turn back to array
  }
  // Save todo's to data store
  export function saveToLS(key, data){
      localStorage.setItem(key, JSON.stringify(data)); // turn in to string 
  }
  //set a listener
  
// document.addEventListener('click', addButton);
