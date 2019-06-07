import Component from '../Component.js';
import Profile from './Profile.js';
import { auth } from '../services/firebase.js';
import Search from '../home/Search.js';

class Header extends Component {
    render() {
        const dom = this.renderDOM();
        const section = dom.querySelector('section');
        const profile = new Profile();
        section.appendChild(profile.render());

        const title = this.props.title;
        const search = new Search({ title });
        section.appendChild(search.render());

        auth.onAuthStateChanged(user => {
            profile.update({ user });
        });
        
        return dom;
    }

    renderTemplate() {
        const title = this.props.title;

        let elementClass;
        if(this.props.title === 'Sign In') {
            elementClass = 'hidden';
        }

        return /*html*/`
            <header>
                <h1>${title}</h1>
                <a class="${elementClass}" href="/index.html">Home Page</a>
                <a class="${elementClass}" href="/favorites.html">View Favorties</a>
                <section class="header-section"></section>
            </header>
        `;
    }
}

export default Header;