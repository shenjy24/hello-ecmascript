const { default: axios } = require("axios");

const instance = axios.create({
    baseURL: 'http://localhost:8081/',
    timeout: 5000,
    params: {
      userId: '1'
    }
  });

instance.post('/user/getUser')
    .then(response => console.log(response.data))   
    .catch(error => console.log(error))   