import axios from 'axios';
const KEY = 'AIzaSyAWDixAc9_3v5ougdPY2-JkyXA6HjEO5KU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})