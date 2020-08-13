import React from 'react';
import './VideoItem.css';
import VideoList from './VideoList';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url}></img>
        <div className="content">
            <div className="header">
                {video.snippet.title}
            </div>
        </div>
    </div>
    );
};

export default VideoItem;
