import Component from '../Component.js';


//Created base movieitem component with static data - #3
class MovieItem extends Component {

    renderTemplate() {
        return /*html*/`
            <li class="movie-item">
                <h2 id="title">Fight Club</h2>
                <p>Mischief. Mayhem. Soap.</p>
            </li>
        `;
    }
}

export default MovieItem;