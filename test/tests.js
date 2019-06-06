import './html-equal.js';
import './MovieItem.test.js';
import './Profile.test.js';
import './MovieDetail.test.js';
import { app } from '../src/services/firebase.js'; 

QUnit.done(() => {
    app.delete();
}); 