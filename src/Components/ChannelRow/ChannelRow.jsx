import React from 'react';
import { Avatar } from '@material-ui/core';
import './ChannelRow.css';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
function ChannelRow({
  image,
  channel,
  subs,
  verified,
  noOfVideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleOutlineIcon />}
        </h4>
        <p>
          {subs} đăng ký * {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
