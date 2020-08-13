import React, { useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import usevideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideos, setSelectedVideos] = useState(null);
    const [videos, search] = usevideos('buildings');

    useEffect(() => {
        setSelectedVideos(videos[0]);
    }, [videos]);

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search}/>
            <div className="ui grid">
                <div className=" ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideos} />
                    </div>
                    <div className="five wide column">
                    <VideoList 
                        onVideoSelect={setSelectedVideos} 
                        videos={videos}
                    />
                    </div>
                </div>
            </div>
        </div>
        );
    };

export default App;