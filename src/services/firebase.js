const config = {
    apiKey: 'AIzaSyAXZiP197HoWU3aXvSYn-DbPiMwH-PI1eQ',
    authDomain: 'favorite-movies-3b1cf.firebaseapp.com',
    databaseURL: 'https://favorite-movies-3b1cf.firebaseio.com',
    projectId: 'favorite-movies-3b1cf',
    storageBucket: 'favorite-movies-3b1cf.appspot.com',
    messagingSenderId: '688529067835',
    appId: '1:688529067835:web:1920a3eb9252f602'
};

export const app = firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();
// set new reference on database #8
export const userFavoritesRef = db.ref('userFavorites');
window.db = db;