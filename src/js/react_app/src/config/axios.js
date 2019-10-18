import axios from 'axios';
import AuthHelper from 'Services/auth/AuthService';

axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.common['Authorization'] = `Bearer ${AuthService.getToken()}`;
axios.defaults.headers.common['X-CSRF-TOKEN'] = localStorage.getItem('csrf');
axios.defaults.withCredentials = true;
// Also add/ configure interceptors && all the other cool stuff
//
// instance.interceptors.request...

const axiosInstance = axios.create({
  baseURL: "//api.cryptowise.ai",
  withCredentials: true
});

export default axiosInstance;
