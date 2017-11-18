import axios from 'axios'
const client = axios.create({
    baseURL: "https://hotel-serveree.herokuapp.com/"
})
export default client