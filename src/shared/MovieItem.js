import Component from '../Component.js';
import Favorite from './Favorite.js';
import { setFavorite, getUserMovieFavoriteRef } from '../services/actions.js';

//Created base movieitem component with static data - #3
class MovieItem extends Component {
    render() {
        const dom = this.renderDOM();
        const movie = this.props.movie;

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

        return dom;
    }

    renderTemplate() {
        //Brought in movie prop from list and rendered - #7
        const movie = this.props.movie;

        // Base URL for movie image
        let imgPath = 'https://image.tmdb.org/t/p/w500/' + movie.poster_path;
        
        if(!movie.poster_path) {
            imgPath = '../../assets/default-movie.png';
        }
        
         
        return /*html*/`
            <li class="movie-item">
                <a href="./movie.html?id=${movie.id}"><h2 id="title">${movie.title}</h2></a>
                <img id="poster" src="${imgPath}">
            </li>
        `;
    }
}

export default MovieItem;