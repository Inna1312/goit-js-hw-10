import axios from 'axios';

const API_KEY = 'live_zqqDDCu2mqHhx1IhRetN0pMw3AfY1jOo9j4aM5HkerJ1bBKBFXVa7G2GFINWn9xu';
axios.defaults.headers.common['x-api-key'] = API_KEY;
const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
    return axios.get(`${BASE_URL}/breeds`)
        .then(resp => resp)
        .catch(err => err);
}

export function fetchCatByBreed(breedId) {
    return axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
        .then(resp => resp)
        .catch(err => err);
}