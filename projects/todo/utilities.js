// get list element
export function qs(selector){
    return document.querySelector(selector);
  } 
  
  // Retrieve todo's from data store
  export function getFromLS(key){

  }
  // Save todo's to data store
  export function saveToLS(key, data){
      localStorage.setItem(key, JSON.stringify(data));
  }
  export function saveTodos(key){
    saveToLS(key, todos);
}
  //set a listener
  
document.addEventListener('click', addButton);
