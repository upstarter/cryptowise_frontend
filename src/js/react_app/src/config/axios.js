import axios from 'axios';
import AuthService from 'Services/auth/AuthService';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.common['Authorization'] = `Bearer ${cookies.get('_cw_acc')}`;
axios.defaults.headers.common['X-CSRF-TOKEN'] = cookies.get('_cw_csrf');
axios.defaults.headers.common['Origin'] = 'https://www.cryptowise.ai'
axios.defaults.headers.common['Allow-Control-Request-Headers'] = 'Content-Type, Accept'
axios.defaults.withCredentials = true;
// Also add/ configure interceptors && all the other cool stuff
//
// instance.interceptors.request...

const axiosInstance = axios.create({
  baseURL: "//api.cryptowise.ai",
  withCredentials: true
});

export default axiosInstance;
