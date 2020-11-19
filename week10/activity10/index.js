import { getJSON, getLocation } from './utilities.js';
import Quake from './quake.js';
import QuakesController from './quakeController.js';
import QuakesView from './quakeView.js';
// impport QuakesController; 

const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
console.log(baseUrl);

console.log(Quake);
// getQuakeById('nc73139036')

let quakeC = new QuakesController('quakeList'); 
quakeC.init();

let quakeV = new QuakesView(); 