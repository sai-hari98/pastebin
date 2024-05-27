import axios from "axios"; 

const pastebinAxios = axios.create({
  baseURL : 'http://localhost:8080/',
  headers : {'Content-Type':'application/json'}
});

export default pastebinAxios;