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
        const movieList = new MovieList();
        main.appendChild(movieList.render());

        movieApi.getMovies()
            .then(console.log);
        

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