import { createMenu } from './menu.js';
// import { activitesDropdown } from './menu.js';
// import { challengesDropdown } from './menu.js';
import { eventListener } from './utilities.js';


createMenu();

//eventListener('activitesDropButton', 'click', activitesDropdown);
//eventListener('challengesDropButton', 'click', challengesDropdown);
eventListener('dropDown', 'click', dropDown);

