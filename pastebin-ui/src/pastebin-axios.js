import axios from "axios"; 

const pastebinAxios = axios.create({
  baseURL : 'http://localhost:8080/'
});

export default pastebinAxios;