import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar({ likes, messages, shares }) {

    const [liked, setLiked] = useState(false)

    function handdleLike(){
        setLiked(!liked)

    }

  return (
    <div className="VideoSidebar">
      <div className="videoSidebar__options"
        onClick={handdleLike}
        >
            { liked ? <FavoriteIcon fontSize="medium"/> : <FavoriteBorderIcon fontSize="medium"/>}
        
        <p>{liked ? likes + 1 : likes }</p>
      </div>
      <div className="videoSidebar__options">
        <CommentIcon fontSize="medium"/>
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__options">
        <ShareIcon fontSize="medium"/>
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
