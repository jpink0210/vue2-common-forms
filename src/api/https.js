// axios.js
import axios from "axios";

// Base config
const config = {
withCredentials: false,
responseType: "json"
// headers: { "Global-Header": "test" }
};

// Create instance
const $https = axios.create(config);
// const $http = axios;


// Add a request interceptors
$https.interceptors.request.use(
  error => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
$https.interceptors.response.use(
  response => {
    // Do something with response data
    return response;
  },
  error => {
    // Do something with response error
    console.log(`https responese error`);
    console.log(error);

    return Promise.reject(error);
  }
);

export default $https;