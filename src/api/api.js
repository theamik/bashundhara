import axios from 'axios'
const local = 'https://bashundhara-backend.onrender.com'
// const local = 'http://localhost:5000'
const production = ''
const api = axios.create({
    baseURL: `${local}/api/v1`,
    withCredentials : true
})
export default api
