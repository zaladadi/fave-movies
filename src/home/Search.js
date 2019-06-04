import Component from '../Component.js';
import hashStorage from '../utils/hash-storage.js';

class Search extends Component {
    render() {
        const form = this.renderDOM();
        const input = form.querySelector('input');

        form.addEventListener('submit', event => {
            event.preventDefault();
            const movieSearch = input.value;
            hashStorage.set({ 'query': movieSearch });
        });

        function setInputFromHash() {
            const queryProps = hashStorage.get();
            input.value = queryProps.search || '';
        }

        if(input.value) {
            setInputFromHash();
        }

        window.addEventListener('hashchange', () => {
            setInputFromHash();
        });



        return form;
    }
    renderTemplate() {
        return /*html*/`
            <form class="search">
                <input>
                <button>🔍</button>
            </form>
        `;
    }
}

export default Search;