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
        const title = this.props.title;
        return /*html*/`
            <header>
                <h1>${title}</h1>
                <a href="/index.html">Home Page</a>
                <a href="/favorites.html">View Favorties</a>
            </header>
        `;
    }
}

export default Header;