import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from '../ChannelRow/ChannelRow';
import VideoRow from '../VideoRow/VideoRow';
function SearchPage({ sidebar }) {
  return (
    <div className={`${sidebar ? 'searchPage' : 'searchPageFalse'}`}>
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://i.imgur.com/Ry4P9Wx.png"
        channel="Vỉ Đặng"
        verified
        subs="156K"
        noOfVideos={152}
        description="I hope you enjoy with it."
      />
      <VideoRow
        view="1.4M"
        subs="156K"
        description="Yupp, I hope you enjoy with react !"
        timestamp="4 days ago"
        channel="Vỉ Đặng"
        title="Let's Build a Instagram Clone with REACT JS for Beginners 🤓🤓🤓"
        image="https://i.imgur.com/TauCmag.png"
      />
      <VideoRow
        view="2.2M"
        subs="156K"
        description="Yupp, I hope you enjoy with react !"
        timestamp="12 days ago"
        channel="Vỉ Đặng"
        title="Let's Build a Shop Book with REACT JS for Beginners🚀🚀🚀"
        image="https://i.imgur.com/MBoTyCD.png"
      />
      <VideoRow
        view="120K"
        subs="156K"
        description="Yupp, I hope you enjoy with react !"
        timestamp="10 days ago"
        channel="Vỉ Đặng"
        title="Build a Portfolio Template with ReactJS & Styled Components (Demo)🤘🤘🤘"
        image="https://i.imgur.com/HKgvaT4.png"
      />
      <VideoRow
        view="10.8M"
        subs="156K"
        description="Yupp, I hope you enjoy with react !"
        timestamp="1 days ago"
        channel="Vỉ Đặng"
        title="Build a Youtube Clone with ReactJS🤘🤘🤘"
        image="https://i.imgur.com/Y8Q3Jjk.png"
      />
      <VideoRow
        view="4.4M"
        subs="156K"
        description="Yupp, I hope you enjoy with react !"
        timestamp="8 days ago"
        channel="Vỉ Đặng"
        title="Let's Build a Netflix Clone with REACT JS for Beginners🚀🚀🚀"
        image="https://i.imgur.com/YH9mIbD.png"
      />
      <VideoRow
        view="9.4M"
        subs="156K"
        description="Yupp, I hope you enjoy with react !"
        timestamp="28 days ago"
        channel="Vỉ Đặng"
        title="Let's Build a Tinder Clone with REACT JS for Beginners🤓🤓🤓"
        image="https://i.imgur.com/bmaxNcT.png"
      />
      <VideoRow
        view="1.2M"
        subs="156K"
        description="Yupp, I hope you enjoy with react !"
        timestamp="1 months ago"
        channel="Vỉ Đặng"
        title="Let's Build a Todo List with REACT JS for Beginners🚀🚀🚀"
        image="https://i.imgur.com/otQR7j3.png"
      />
      <VideoRow
        view="9.2M"
        subs="156K"
        description="Yupp, I hope you enjoy with react !"
        timestamp="4 months ago"
        channel="Vỉ Đặng"
        title="Let's Build a Quiz App with REACT JS for Beginners🤘🤘🤘"
        image="https://i.imgur.com/BOLQPLY.png"
      />
      <VideoRow
        view="9.2M"
        subs="156K"
        description="Yupp, I hope you enjoy with react !"
        timestamp="4 months ago"
        channel="Vỉ Đặng"
        title="Let's Build a Website Mercedes with SASS for Beginners🚀🚀🚀"
        image="https://i.imgur.com/QwKGtmC.png"
      />
      <VideoRow
        view="800K"
        subs="156K"
        description="Yupp, I hope you enjoy with react !"
        timestamp="4 months ago"
        channel="Vỉ Đặng"
        title="Let's Build a Tix Cinema with REACT JS for Beginners🤓🤓🤓"
        image="https://i.imgur.com/EZvOp6C.png"
      />

      <VideoRow
        view="1.8M"
        subs="156K"
        description="Yupp, I hope you enjoy with react !"
        timestamp="4 months ago"
        channel="Vỉ Đặng"
        title="Build Cinema App with Reactjs🚀🚀🚀"
        image="https://i.imgur.com/bvwHkQd.png"
      />
    </div>
  );
}

export default SearchPage;
