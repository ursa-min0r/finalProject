import React from 'react';
import './video.css';

const VideoItem = ({video}) => {
    if (!video) {
        return <div><img alt=""></img></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div>
            <div className='ui embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
            </div>
        </div>

    )
}
export default VideoItem;