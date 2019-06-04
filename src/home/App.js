import Component from '../Component.js';
import Header from '../shared/Header.js';
import movieApi from '../services/movieDB-api.js';
import MovieList from '../shared/MovieList.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        // Rendered movieList in app - #2
        const movieList = new MovieList({ movieData: [] });
        main.appendChild(movieList.render());

    // #4 got movie data and passed to list
        movieApi.getMovies()
            .then(response => {
                console.log(response.results[0]);
                const movieData = response.results;
                movieList.update({ movieData });
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