import Component from '../Component.js';


//Created base movieitem component with static data - #3
class MovieItem extends Component {

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
            </li>
        `;
    }
}

export default MovieItem;