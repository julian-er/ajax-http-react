import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// I change this for an instance, another form to do the same thing
// now, i've to replace import axios for import intance
// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'


axios.interceptors.request.use(request => {
    console.log(request);
    return request;
}, error =>{
    console.log(error);
    return Promise.reject(error);
})


axios.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error =>{
    console.log(error);
    return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
