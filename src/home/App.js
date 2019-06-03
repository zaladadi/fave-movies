import Component from '../Component.js';
import Header from '../shared/Header.js';
import movieApi from '../services/movieDB-api.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

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