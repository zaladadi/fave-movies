import Component from '../Component.js';
import Profile from './Profile.js';
import { auth } from '../services/firebase.js';
import Search from '../home/Search.js';

class Header extends Component {
    render() {
        const dom = this.renderDOM();
        const profile = new Profile();
        dom.appendChild(profile.render());

        const search = new Search();
        dom.appendChild(search.render());

        auth.onAuthStateChanged(user => {
            profile.update({ user });
        });
        
        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <header>
                <h1>Favorite Movies</h1>
            </header>
        `;
    }
}

export default Header;