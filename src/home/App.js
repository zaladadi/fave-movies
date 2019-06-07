import Component from '../Component.js';
import Header from '../shared/Header.js';
import movieApi from '../services/movieDB-api.js';
import MovieList from '../shared/MovieList.js';
import hashStorage from '../utils/hash-storage.js';

class App extends Component {   

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header({ title: 'Current Popular Movies' });
        dom.insertBefore(header.render(), main);

        // Rendered movieList in app - #2
        const movieList = new MovieList({ movieData: [] });
        main.appendChild(movieList.render());

    // #4 got movie data and passed to list
        function loadMovies() {
            let queryProps = hashStorage.get();

            movieApi.getMovies(queryProps)
                .then(response => {
                    const movieData = response.results;
                    movieList.update({ movieData });
                });
        }

        loadMovies();

        window.addEventListener('hashchange', () => {
            loadMovies();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;