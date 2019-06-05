import App from './App.js';
import '../utils/check-auth.js';
import { auth } from '../services/firebase.js';
const root = document.getElementById('app');

auth.onAuthStateChanged(() => {
    const app = new App();
    root.appendChild(app.render());
});