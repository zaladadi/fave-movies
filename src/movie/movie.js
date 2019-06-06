import MovieApp from './MovieApp.js';

const root = document.getElementById('app');

const movieApp = new MovieApp();
root.appendChild(movieApp.render());