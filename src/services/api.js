import axios from 'axios'

const api = axios.create({
    baseURL: `${process.env.URL}:3333`
})

export default api