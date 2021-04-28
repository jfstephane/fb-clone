import { Avatar } from '@material-ui/core';
import React, {useState} from 'react';
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";


function MesssageSender() {


const [input, setInput] = useState("");
const [imageUrl, setImageUrl] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();


    setInput("");
    setImageUrl("");
}

    return (
        <div className="messageSender">

<div className="messageSender__top">

<Avatar/>
<form>

<input type="text" placeholder={"Say Ssamething"} className="messageSender__input" value={input} onChange={(e) => setInput(e.target.value)}/>

<input type="text" placeholder={"Image URL (optional)"} value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>

<button onClick={handleSubmit} type="submit">hidden submit</button>

</form>

</div>


<div className="messageSender__bottom">
    <div className="messageSender__option">
            <VideocamIcon style={{color: "red"}}/>
            <h3>Live Video</h3>
    </div>

    <div className="messageSender__option">
            <PhotoLibraryIcon style={{color: "green"}}/>
            <h3>Photos/Video</h3>
    </div>

    <div className="messageSender__option">
            <InsertEmoticonIcon style={{color: "orange"}}/>
            <h3>Feeling</h3>
    </div>

</div>

            
        </div>
    )
}

export default MesssageSender;
