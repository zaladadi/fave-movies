import Component from '../Component.js';

class MovieList extends Component {

    renderTemplate() {

        //Statically design list component - #1
        return /*html*/`
            <ul class="movie-list">
                <li class="movie-item">
                    <h2 id="title">Fight Club</h2>
                    <p>Mischief. Mayhem. Soap.</p>
                </li>
                <li class="movie-item">
                    <h2 id="title">Fight Club</h2>
                    <p>Mischief. Mayhem. Soap.</p>
                </li>
                <li class="movie-item">
                    <h2 id="title">Fight Club</h2>
                    <p>Mischief. Mayhem. Soap.</p>
                </li>
            </ul>
        `;
    }
}

export default MovieList;