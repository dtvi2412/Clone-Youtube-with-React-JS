import { Avatar } from '@material-ui/core';
import React from 'react';

import './VideoCard.css';

function VideoCard({ title, view, timestamp, channelImage, channel, image }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumnail" src={image} alt="" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__text">
          <h4>{title.length > 35 ? `${title.substring(0, 35)}...` : title}</h4>
          <p>{channel}</p>
          <p>
            {view} * {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
