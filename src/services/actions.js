import { userFavoritesRef, auth, favoritesByUserRef } from './firebase.js';

export function getUserMovieFavoriteRef(id){
    const userMovieRef = userFavoritesRef
        .child(auth.currentUser.uid)
        .child(id);
    return userMovieRef;
}

export function getFavoritesByUserRef(id){
    const userFavoritesByMovie = favoritesByUserRef
        .child(id)
        .child(auth.currentUser.uid);
    return userFavoritesByMovie;
}

export function setFavorite(movie, makeFavorite) {
    const userMovieRef = getUserMovieFavoriteRef(movie.id);
    const userFavoritesByMovie = getFavoritesByUserRef(movie.id);
    if(makeFavorite) {
        userMovieRef.set({
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path
        });

        userFavoritesByMovie.set({
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
            photoURL: auth.currentUser.photoURL
        });
        
    }
    else {
        userMovieRef.remove();
        userFavoritesByMovie.remove();
    }
}