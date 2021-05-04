import axios from 'axios';
const api_url = 'http://localhost:3000/' //reemplazar por el puerto o direccion del api
var is_logged_in = false;

class ApiService {
    constructor() {
        is_logged_in = !!localStorage.getItem('api_token')
    }
    login(user) {
        return axios.post(`${api_url}user/login`, user)
            .then(res => res.data)
            .catch(err => {
                console.error(err)
            })
    }
    logout() {
        localStorage.removeItem('api_token')
        localStorage.removeItem('user')
        localStorage.removeItem('mail')
        return true
    }

    loggedIn() {
        return is_logged_in;
    }
} export default new ApiService();
