import axios from 'axios';
import Cookies from 'universal-cookie';

const setAuthToken = (token) => {
  console.log('setAuthToken')
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
}

// export const getAuthToken = () => {
//     const cookies = new Cookies();
//     return cookies.get('my_auth_token');
// };
// const removeAuthToken = () => {
//     const cookies = new Cookies();
//     cookies.remove('my_auth_token', {
//         path: '/',
//     });

export default setAuthToken
