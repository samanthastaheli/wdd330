import { makeRequest } from './authHelpers.js';
import { Auth } from './auth.js';

let auth = new Auth();
document.getElementById('btn').addEventListener('click', () => {
    auth.login();
});


// put in auth.js 
// makeRequest('login', 'POST', {
//     password: 'user1',
//     email: 'user1@email.com'
//     });
