import axios from 'axios'
const local = 'https://bashundhara-backend.onrender.com'
const production = ''
const api = axios.create({
    baseURL: `${local}/api/v1`,
    withCredentials : true
})
export default api
