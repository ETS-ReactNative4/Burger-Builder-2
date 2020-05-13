import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-9120c.firebaseio.com/'
});

export default instance;