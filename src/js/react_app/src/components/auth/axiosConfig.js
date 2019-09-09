// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
const instance = axios.create({
// .. where we make our configurations
    baseURL: 'https://api.cryptowise.ai'
});

// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
// axios.defaults.headers.common['X-CSRF-TOKEN'] = store.state.csrf;

// Also add/ configure interceptors && all the other cool stuff

// instance.interceptors.request...

export default instance;
