import '../utils/check-auth.js';
import Component from '../Component.js';
import Header from '../shared/Header.js';
import MovieList from '../shared/MovieList.js';
import QUERY from '../QUERY.js';
import { auth, userFavoritesRef, usersRef } from '../services/firebase.js';

class FavoritesApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header({ title: 'Your Favorite Movies' });
        dom.insertBefore(header.render(), main);

        const movieList = new MovieList({ movieData: [] });
        main.appendChild(movieList.render());

        const query = QUERY.parse(window.location.search);
        const uid = query.uid ? query.uid : auth.currentUser.uid;

        userFavoritesRef
            .child(uid)
            .on('value', snapshot => {
                const value = snapshot.val();
                const movieData = value ? Object.values(value) : [];
                movieList.update({ movieData });
            });
        
        if(uid === auth.currentUser.uid) {
            header.update({ title: 'Your Favorites' });
        }
        else {
            usersRef.child(uid)
                .on('value', snapshot => {
                    const user = snapshot.val();
                    header.update({
                        title: `${user.displayName}'s Favorites`
                    });
                });
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

export default FavoritesApp;