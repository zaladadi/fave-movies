import Component from '../Component.js';
import { userFavoritesRef } from '../services/firebase.js';


//Created base movieitem component with static data - #3
class MovieItem extends Component {
    render() {
        const dom = this.renderDOM();
        const button = dom.querySelector('button');
        button.addEventListener('click', () => {
            userFavoritesRef.set('test');
        });
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
                <h2 id="title">${movie.title}</h2>
                <img id="poster" src="${imgPath}">
                <button></button>
            </li>
        `;
    }
}

export default MovieItem;