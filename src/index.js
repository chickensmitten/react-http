import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// functions to define globally for every requests leaving and coming in. 
// can be used for common headers like authorization header, responses, logging errors globally.
axios.interceptors.request.use(request => {
  // Edit the request config
  console.log(request);
  // need to always return the request to prevent blocking
  return request
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  // Edit the request config
  console.log(response);
  // need to always return the request to prevent blocking
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
