import MovieItem from '../src/shared/MovieItem.js';

const test = QUnit.test;

QUnit.module('movie item component');

test('return movie item from props', assert => {
    //arrange
    const movie = {
        title: 'Fight Club',
        poster_path: '/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg'
    };
    const item = new MovieItem({ movie });
    const result = item.renderTemplate();
    
    //assert
    const expected = `
        <li class="movie-item">
            <h2 id="title">Fight Club</h2>
            <img id="poster" src="https://image.tmdb.org/t/p/w500/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg">
        </li>
    `;
    assert.htmlEqual(result, expected);
});