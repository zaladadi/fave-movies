import Component from '../Component.js';

class MovieDetail extends Component {

    renderTemplate() {
        const movie = this.props.movie;

        if(!movie) {
            return `<div></div>`;
        }
        
        let imgPath = 'https://image.tmdb.org/t/p/w500';
        return /*html*/`
            <section>
                <h2>${movie.title}</h2>
                <img src="${imgPath}${movie.poster_path}">
                <p>${movie.release_date}</p>
                <p>${movie.overview}
                </p>
            </section>
        `;
    }
}

export default MovieDetail;