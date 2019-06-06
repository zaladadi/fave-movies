import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieDetail from './MovieDetail.js';

class MovieApp extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header({ title: 'Movie Details' });
        dom.insertBefore(header.render(), main);

        const movieDetail = new MovieDetail();
        main.appendChild(movieDetail.render());


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