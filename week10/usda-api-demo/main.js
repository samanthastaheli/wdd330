import { search } from './search.js';

const queryBox = document.getElementById('searchBox');

queryBox.addEventListener('keyup', search);