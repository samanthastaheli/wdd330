import Hikes from './hikes.js'; 
const myHikes = new Hikes('hikes');
window.addEventListener('load', () => {
    myHikes.showHikesList();
});

