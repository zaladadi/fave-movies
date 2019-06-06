export function setFavorite(makeFavorite, movie, userMovieRef) {
    
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