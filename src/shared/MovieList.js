import Component from '../Component.js';
import MovieItem from './MovieItem.js';

class MovieList extends Component {

    render() {
        const list = this.renderDOM();

        //Bring in movies prop from app - #6
        const movies = this.props.movieData;

        movies.forEach(movie => {
            const movieItem = new MovieItem({ movie });
            list.appendChild(movieItem.render());
        });

        return list;
    }

    renderTemplate() {
        //Statically design list component - #1
        return /*html*/`
            <ul class="movie-list">
            </ul>
        `;
    }
}

export default MovieList;