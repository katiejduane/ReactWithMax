import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-c4d28.firebaseio.com/'
})

export default instance;