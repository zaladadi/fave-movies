// import QUERY from '../QUERY.js';

const URL = 'https://api.themoviedb.org/3/movie/550';
const apiKey = 'api_key=eb6bb7c2bbf3c733ad68fc5e68499ee6';

//   /discover/movie?sort_by=popularity.desc
    
const movieApi = {

    getMovies() {

        const url = `${URL}?${apiKey}`;
        return fetch(url)
            .then(response => response.json());
    }
};

export default movieApi;