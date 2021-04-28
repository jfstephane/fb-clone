import React from 'react';
import "./Feed.css";
import MesssageSender from './MesssageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
    return (
        <div className="feed">

            <StoryReel/>
            <MesssageSender/>
            <Post
            profilePic="https://upload.wikimedia.org/wikipedia/commons/3/35/Pisitif_logo_2018_%28French_film_magazine%29.png"
            message='yooooo'
            timestamp='yeeeeee'
            username="test"
            image="https://upload.wikimedia.org/wikipedia/commons/3/35/Pisitif_logo_2018_%28French_film_magazine%29.png"
            />

            <Post
            profilePic="https://upload.wikimedia.org/wikipedia/commons/3/35/Pisitif_logo_2018_%28French_film_magazine%29.png"
            message='yooooo'
            timestamp='yeeeeee'
            username="test" 
            />

<Post
            profilePic="https://upload.wikimedia.org/wikipedia/commons/3/35/Pisitif_logo_2018_%28French_film_magazine%29.png"
            message='yooooo'
            timestamp='yeeeeee'
            username="test"
            image="https://c8.alamy.com/comp/PMC6F7/abstraction-orange-bokeh-on-a-blue-background-defocused-free-space-for-text-PMC6F7.jpg"
            />
            
        </div>
    )
}

export default Feed;
