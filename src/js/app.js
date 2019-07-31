// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
require('dotenv').config()

// if('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw.js')
//     .then(function() { console.log("Service Worker Registered"); })
//     .catch(function(err) {
//       //registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
// } else {
//   console.log('No service-worker on this browser');
// };

import './react_app/index'

// FB
// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1';
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));
