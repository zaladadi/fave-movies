import MovieDetail from '../src/movie/MovieDetail.js';


const test = QUnit.test;

QUnit.module('MovieDetail component');

test('Returns movie details from movie', assert => {
    //arrange
    const movie = {
        title: 'Avatar',
        poster_path: '/kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg',
        overview: 'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
        release_date: '2009-12-10'
    };
    let imgPath = 'https://image.tmdb.org/t/p/w500';
    const expected = /*html*/`
            <section class="movie-detail">
                <img class="movie-image" src="${imgPath}/kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg">
                <section class="text">
                    <h2>Avatar</h2>
                    <p class="release-date">2009-12-10</p>
                    <p>In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.</p>
                </section>
                <div class="favorite-container"></div>
            </section>
    `;
    //act
    const movieDetail = new MovieDetail({ movie });
    const result = movieDetail.renderTemplate();

    //assert
    assert.htmlEqual(result, expected);
});

test('Returns movie details from movie', assert => {
    //arrange
    const movie = null;
    const expected = /*html*/`<div></div>`;
    //act
    const movieDetail = new MovieDetail({ movie });
    const result = movieDetail.renderTemplate();

    //assert
    assert.htmlEqual(result, expected);
});