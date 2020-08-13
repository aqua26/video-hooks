import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';
const KEY ='AIzaSyCNiPSqojxzgDVzm5k1mqbjxofxw1k0mWw';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] =useState([]);

    useEffect (()=>{
        search(defaultSearchTerm);
    },[defaultSearchTerm] );

    const search = async term => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 15,
                type: 'video',
                key: KEY
            }
        });

        setVideos(response.data.items);
    };

    return [videos, search];
};

export default useVideos;