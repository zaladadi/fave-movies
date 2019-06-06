import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieDetail from './MovieDetail.js';
import QUERY from '../QUERY.js';
import movieAPI from '../services/movieDB-api.js';

class MovieApp extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header({ title: 'Movie Details' });
        dom.insertBefore(header.render(), main);

        const movieDetail = new MovieDetail();
        main.appendChild(movieDetail.render());

        const search = window.location.search.slice(1);
        const query = QUERY.parse(search);
        const id = query.id;
        movieApi.get
        
        if(!id) {
            window.location = '/index.html';
        }


        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main></main>
            </div>
        `;
    }
}

export default MovieApp;