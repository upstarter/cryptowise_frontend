import axios from 'axios';
import AuthHelper from 'Services/auth/AuthService';

axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.common['Authorization'] = AuthService.getToken();

// axios.defaults.headers.common['X-CSRF-TOKEN'] = store.state.csrf;
//
// Also add/ configure interceptors && all the other cool stuff
//
// instance.interceptors.request...

const axiosInstance = axios.create({
  baseURL: "//api.cryptowise.ai"
});

export default axiosInstance;
