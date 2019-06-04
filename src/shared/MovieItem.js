import Component from '../Component.js';


//Created base movieitem component with static data - #3
class MovieItem extends Component {

    renderTemplate() {
        // Base URL for movie image
        const imgPath = 'https://image.tmdb.org/t/p/w500';
        
        //Brought in movie prop from list and rendered - #7
        const movie = this.props.movie;

        return /*html*/`
            <li class="movie-item">
                <h2 id="title">${movie.title}</h2>
                <img id="poster" src="${imgPath}${movie.poster_path}">
            </li>
        `;
    }
}

export default MovieItem;