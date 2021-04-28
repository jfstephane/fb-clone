import React from 'react';
import "./Feed.css"
import MesssageSender from './MesssageSender';
import StoryReel from './StoryReel';

function Feed() {
    return (
        <div className="feed">

            <StoryReel/>
            <MesssageSender/>
            
        </div>
    )
}

export default Feed
