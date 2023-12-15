import axios from "axios";

axios.defaults.baseURL = 'https://drfapinew-d3d8cbc7f33b.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;