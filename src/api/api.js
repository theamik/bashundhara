import axios from 'axios'
const  production = 'https://bashundhara-backend.onrender.com'
const local = 'http://localhost:5000'

const api = axios.create({
    baseURL: `${production}/api/v1`,
    withCredentials : true
})
export default api
