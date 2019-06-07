import FavoritesApp from '../favorites/FavoritesApp.js';
import { auth } from '../services/firebase.js';

const root = document.getElementById('app');

auth.onAuthStateChanged(() => {
    const app = new FavoritesApp();
    root.appendChild(app.render());
});
