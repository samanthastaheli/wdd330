// get list element
export function qs(selector){
    return document.querySelector(selector)
  
  }
  
  // Retrieve todo's from data store
  export function getFromLS(key){
  
  }
  // Save todo's to data store
  export function saveToLS(Key, data){
      localStorage.setItem(key, JSON.stringify(data));
  }
  //set a listener
  
  