import axios from 'axios';
const KEY = 'AIzaSyC_hz-vRQ321FHkESvkEtbsLZ3xPNaE1MU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})