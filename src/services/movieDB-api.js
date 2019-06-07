import QUERY from '../QUERY.js';

const URL = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=eb6bb7c2bbf3c733ad68fc5e68499ee6';


const movieApi = {

    getMovies(queryProps) {
        let query;
        if(queryProps.query) {
            query = 'search/movie?' + QUERY.stringify(queryProps);
        }
        else {
            query = 'movie/popular?';
        }
        const url = `${URL}/${query}&${apiKey}`;
        return fetch(url)
            .then(response => response.json());
    },

    getMovieById(id) {
        const detailUrl = `${URL}/movie/${id}?${apiKey}`;
        return fetch(detailUrl)
            .then(response => response.json());
    }
};

export default movieApi;