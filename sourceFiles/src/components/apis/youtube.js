import axios from 'axios';
const KEY = 'AIzaSyC4YcUM6jKgsb20bjdwfqIIsrSCQTFyUgc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})