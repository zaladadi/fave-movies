import { userFavoritesRef, auth } from './firebase.js';
export function getUserMovieFavoriteRef(id){
    const userMovieRef = userFavoritesRef
        .child(auth.currentUser.uid)
        .child(id);
    return userMovieRef;
}
export function setFavorite(movie, makeFavorite) {
    const userMovieRef = getUserMovieFavoriteRef(movie.id);

    if(makeFavorite) {
        return userMovieRef.set({
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path
        });
    }
    else {
        return userMovieRef.remove();
    }
}