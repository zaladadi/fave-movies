import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieList from '../shared/MovieList.js';
import { auth, userFavoritesRef } from '../services/firebase.js';

class FavoritesApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header({ title: 'Your Favorite Movies' });
        dom.insertBefore(header.render(), main);

        const movieList = new MovieList({ movieData: [] });
        main.appendChild(movieList.render());

        userFavoritesRef
            .child(auth.currentUser.uid)
            .on('value', snapshot => {
                const value = snapshot.val();
                const movieData = value ? Object.values(value) : [];
                movieList.update({ movieData });
            });

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

export default FavoritesApp;