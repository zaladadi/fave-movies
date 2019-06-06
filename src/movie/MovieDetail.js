import Component from '../Component.js';
import Favorite from '../shared/Favorite.js';
import { setFavorite, getUserMovieFavoriteRef } from '../services/actions.js';

class MovieDetail extends Component {

    render() {
        const dom = this.renderDOM();
        const movie = this.props.movie;

        if(movie) {
            const userMovieRef = getUserMovieFavoriteRef(movie.id);
            const favorite = new Favorite({
                isFavorite: false,
                onClick: (makeFavorite) => {
                    setFavorite(movie, makeFavorite);
                }
            });

            userMovieRef.on('value', snapshot => {
                const isFavorite = Boolean(snapshot.val());
                favorite.update({ isFavorite });
            });

            dom.appendChild(favorite.render());
        }

        return dom;
    }

    renderTemplate() {
        const movie = this.props.movie;

        if(!movie) {
            return `<div></div>`;
        }
        
        let imgPath = 'https://image.tmdb.org/t/p/w500';
        if(!movie.poster_path) {
            imgPath = '../../assets/default-movie.png';
        }
        return /*html*/`
            <section class="movie-detail">
                <img src="${imgPath}${movie.poster_path}">
                <section class="text">
                    <h2>${movie.title}</h2>
                    <p class="release-date">${movie.release_date}</p>
                    <p>${movie.overview}</p>
                </section>
                <div class="favorite-container"></div>
            </section>
        `;
    }
}

export default MovieDetail;