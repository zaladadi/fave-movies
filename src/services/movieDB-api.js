import QUERY from '../QUERY.js';

const URL = 'https://api.themoviedb.org/3/';
const apiKey = 'api_key=eb6bb7c2bbf3c733ad68fc5e68499ee6';

//   /discover/movie?sort_by=popularity.desc
    
const movieApi = {

    getMovies(queryProps) {
        let query; 
        console.log(queryProps);
        if(!queryProps) {
            query = 'movie/popular';
        }
        else {
            query = 'search/movie?' + QUERY.stringify(queryProps);
        }
        console.log(query);
        const url = `${URL}${query}&${apiKey}`;
        console.log(url);
        return fetch(url)
            .then(response => response.json());
    }
};

export default movieApi;