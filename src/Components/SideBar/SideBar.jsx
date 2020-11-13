import React, { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import './SideBar.css';
function SideBar({ sidebar }) {
  return (
    <div
      className={`${sidebar ? 'sidebar' : 'sidebarFalse'}`}
      // className="sidebar"
    >
      {sidebar ? (
        <React.Fragment>
          <div className="sidebar__list selected">
            <HomeIcon />
            <h2>Trang chủ</h2>
          </div>
          <div className="sidebar__list">
            <WhatshotIcon />
            <h2>Thịnh hành</h2>
          </div>
          <div className="sidebar__list">
            <SubscriptionsIcon />
            <h2>Đăng ký</h2>
          </div>
          <hr />
          <div className="sidebar__list">
            <VideoLibraryIcon />
            <h2>Thư viện</h2>
          </div>
          <div className="sidebar__list">
            <HistoryIcon />
            <h2>Lịch sử</h2>
          </div>

          <div className="sidebar__list">
            <VideoLabelIcon />
            <h2>Video của bạn</h2>
          </div>

          <div className="sidebar__list">
            <WatchLaterIcon />
            <h2>Xem sau</h2>
          </div>
          <div className="sidebar__list">
            <ThumbUpAltIcon />
            <h2>Video đã thích</h2>
          </div>
          <div className="sidebar__list">
            <KeyboardArrowDownIcon />
            <h2>Xem thêm</h2>
          </div>
          <hr />
        </React.Fragment>
      ) : (
        ''
      )}
    </div>
  );
}

export default SideBar;
