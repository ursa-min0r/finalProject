import axios from 'axios';
const KEY = 'AIzaSyDLblclxBmyrhXVPVa2Q5FIOdHu0PKTuJA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})