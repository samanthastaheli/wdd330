import { createMenu, dropWeeks, dropActivities, dropChallenges } from './menu.js';
import { eventListener } from './utilities.js';

createMenu();

eventListener('weeksDropButton', 'click', dropWeeks);
eventListener('activitesDropButton', 'click', dropActivities);
eventListener('challengesDropButton', 'click', dropChallenges);

