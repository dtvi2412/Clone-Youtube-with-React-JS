import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

import './Header.css';
import { Link } from 'react-router-dom';
function Header({ handleSidebar }) {
  const [inputSearch, setInputSearch] = useState('');
  return (
    <div className="header">
      <div className="header__menuIcon">
        <MenuIcon onClick={() => handleSidebar()} />
        <Link to="/">
          {' '}
          <img
            src=" https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="logo"
          />
        </Link>
      </div>

      <div className="header__input">
        <input
          type="text"
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search..."
        />
        <div className="header__input__icon">
          <Link to={`/search/${inputSearch}`}>
            <SearchIcon />
          </Link>
        </div>
      </div>
      <div className="header__icons">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar src="https://i.imgur.com/Ry4P9Wx.png" alt="avatar"></Avatar>
      </div>
    </div>
  );
}

export default Header;
