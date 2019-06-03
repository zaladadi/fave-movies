import App from './App.js';
import '../utils/check-auth.js';

const root = document.getElementById('app');
const app = new App();
root.appendChild(app.render());