import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
  // npm install universal-cookie, or react-cookies
  // const cookies = new Cookies();
  // cookies.set('my_auth_token', token, {
  //     path: '/'
  // });
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
