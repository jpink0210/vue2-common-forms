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

export default $https;