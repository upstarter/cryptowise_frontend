import decode from 'jwt-decode';
import { url } from 'Utils/consts';
import setAuthToken from 'Services/auth/setAuthToken'
import axios from "axios";
import Cookies from 'universal-cookie';

export default class AuthService {
    // Initializing important variables
    constructor(domain) {
        this.domain = url || '//localhost:4000' // API server domain
        this.fetch = this.fetch.bind(this) // React binding stuff
        this.signin = this.signin.bind(this)
        this.signOut = this.signOut.bind(this)
        this.getProfile = this.getProfile.bind(this)
    }

    signin(username, password) {
        // Get a token from api server using the fetch api
        data = {
          session: {
              username,
              password
          }
        }
        return axios.post(`${url}/v1/auth/sign_in`, data)
          .then(res => {
              this.setToken(res.token)
              //this.setUser(res.user) // set current user from res.user OR DECODE FROM TOKEN
              setAuthToken(res.token) // set token in requests
              return Promise.resolve(res);
          })
    }

    signedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }

    setToken(token) {
      const cookies = new Cookies();
      cookies.set('_cw_acc', token)
    }

    getToken() {
        const cookies = new Cookies();
        return cookies.get('_cw_acc')
    }

    signOut() {
      console.log('signout')
        const data = {
          withCredentials: true,
          credentials: 'include'
        };
        return axios.post(`${url}/v1/auth/sign_out`, data)
          .then(res => {
            console.log(res.data)
            // Clear user access token and profile data from session
            const cookies = new Cookies();
            const sessionToken = cookies.remove('_cw_skey')
            const accessToken = cookies.remove('_cw_acc')
            return Promise.resolve(res);
          })
    }

    getProfile() {
        // Using jwt-decode npm package to decode the token
        return decode(this.getToken());
    }


    fetch(url, options) {
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        // Setting Authorization header
        // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
        if (this.signedIn()) {
            headers['Authorization'] = 'Bearer ' + this.getToken()
        }

        return fetch(url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json())
    }

    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}
