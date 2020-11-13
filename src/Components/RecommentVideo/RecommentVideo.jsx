import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import './RecommentVideo.css';
function RecommentVideo({ sidebar }) {
  return (
    <div className={`${sidebar ? 'recommentVideos' : 'recommentVideosFalse'}`}>
      <h2 className="recommentVideos__text">Recommended</h2>
      <div className="recommentVideos__videos">
        <VideoCard
          title="Build a Instagram Clone with REACT JS & FIREBASE(demo)"
          view="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://i.imgur.com/Ry4P9Wx.png"
          channel="Vỉ Đặng"
          image="https://i.imgur.com/TauCmag.png"
        />

        <VideoCard
          title="[Vietsub]Canh Cánh Trong Lòng | 耿耿于怀| WITH YOU ost"
          view="1.3M Views"
          timestamp="23 days ago"
          channelImage="https://i-ione.vnecdn.net/2020/08/12/4deda15fly1ghn2bxqgnxj22bc1jk1-7389-7585-1597206106_m_460x0.jpg"
          channel="
          Fan Wu"
          image="https://static.ybox.vn/2017/7/6/acf0ee58-6202-11e7-a8c6-cac091044fd5.jpg"
        />
        <VideoCard
          title="Elon Musk says Teslas are too expensive!"
          view="7.6 Views"
          timestamp="13 days ago"
          channelImage="https://www.rnz.co.nz/assets/news_crops/60937/eight_col_000_SW9PV.jpg?1531262707"
          channel="Sonny Sangha"
          image="https://i.ytimg.com/vi/ZMsDib3wfuY/maxresdefault.jpg"
        />
        <VideoCard
          title="Build a Tinder Clone with REACT JS & FIREBASE(demo)"
          view="5.3M Views"
          timestamp="13 days ago"
          channelImage="https://i.imgur.com/Ry4P9Wx.png"
          channel="Vỉ Đặng"
          image="https://i.imgur.com/bmaxNcT.png"
        />
        <VideoCard
          title="Hẹn Em Nơi Ấy _Quán Cà Phê Hẻm Số 6 _ At Cafe 6 2016

          "
          view="30N Views"
          timestamp="13 days ago"
          channelImage="data:image/jpeg;base64,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"
          channel="Nguyễn Tiến Dũng"
          image="https://i.ytimg.com/vi/lL6sI1fY3T0/maxresdefault.jpg"
        />

        <VideoCard
          title=" Cô Gái Năm Ấy Chúng Ta Cùng Theo Đuổi - You Are The Apple Of My Eye

          "
          view="230N Views"
          timestamp="16 days ago"
          channelImage="https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg"
          channel="Nam Bụi mù"
          image="https://i.ytimg.com/vi/uLH_jFdF6cc/hqdefault.jpg"
        />

        <VideoCard
          title="Phim hay: Gửi thời thanh xuân rồi sẽ Qua Của Chúng Ta-So Young 2013 HD Vietsub.

          "
          view="930N Views"
          timestamp="10 thg 7, 2017"
          channelImage="https://i.pinimg.com/originals/72/eb/b6/72ebb6e15a76ac319e7275d8cb2d6626.jpg"
          channel="
          PhimhayGTV"
          image="https://i.ytimg.com/vi/7OwfqK7km4U/maxresdefault.jpg"
        />

        <VideoCard
          title="LẤY DANH NGHĨA NGƯỜI NHÀ - Tập 23 ( Vietsub) | Phim Thanh Xuân Ngọt Ngào Siêu Hay Hè 2020

          "
          view="3M Views"
          timestamp="10 thg 7, 2020"
          channelImage="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVEBUSGBkVFRcXFRcWGBURFxUXGBYWGBgYHTQgGRolHBgWITEhJyorMC4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lHyUvLTItKy0tLS0vLystLS0tLi0tNi0tLS0tLS0tLTUtLS0tLS0tLS0tLS0tLS0tLSstLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAf/EAE0QAAICAQEEBgQJCAYIBwAAAAECAAMRBAUSITEGE0FRYXEiMlKBFCNCYnKCkaGxFjNTY3ODksEHNEOTorIVVHSUs7TR8CREwsPS0+H/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFAgEG/8QALREAAgICAAQEBgEFAAAAAAAAAAECAwQREiExQSIyUXEFEzNhgfCRFEJTYqH/2gAMAwEAAhEDEQA/AO4xEQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAETV2htGqhd+2xa15AscZPcBzY+A4ytarpg7HGnoOP0lxKA+K1j0z5NuTuEJTeorZzKSj1Zb5oVbVTrLKnHVNXgjeIAeojhYp7VzlT2gjjzGaUuo12qc1pc7kY39w/B6a88QC6g2bxB9UMT34yJ81vQK5hvZosccVJ6zfB/aOW3vIjBnrr4XqT5ninvmkXG7pFpF9bVUL53J/1mL8q9D/rdH96v/Wc9r1L1MatRQ1Tpz3EyCOxt1cnB7xvDxzwG9RqA4ypJHLirL9zCWoYcZran/wAIJ5EovTiXynb2lf1NTQ3lahP3GSCsDxHETmllSt6yhvMA/jMNehrXjWDSeeamao586yJ1L4fLszlZi7o6lE57p9q6uv1NR1g9m5Q4x4MuH95LSY0XTJc41NRo/WKesq95ADJ71wO+VrMayHVE8LoS6MtUTHRerqGRldW4hlIII7wRzmSQEoiIgCIiAIiIAiIgCIiAIiIAiIgCImDW6tKkayxgiIMsTyA/77IBmdgASTgDiSeQ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"
          channel="
          iDrama · Huace TV "
          image="https://i.ytimg.com/vi/ybI4xVUOJT4/maxresdefault.jpg"
        />
        <VideoCard
          title="Java Tutorial for Beginners

          "
          view="930N Views"
          timestamp="10 thg 7, 2017"
          channelImage="https://www.anonyhome.com/wp-content/uploads/2019/04/B%C3%A0i-t%E1%BA%ADp-Java.png"
          channel="
         Java"
          image="https://i.ytimg.com/vi/U8wrZRYAnmI/hqdefault.jpg"
        />

        <VideoCard
          title="Build a Portfolio Template with ReactJS & Styled Components (Demo)🤘🤘🤘

          "
          view="5M Views"
          timestamp="10 thg 7, 2020"
          channelImage="https://i.imgur.com/Ry4P9Wx.png"
          channel="
         Vỉ Đặng  "
          image="https://i.imgur.com/HKgvaT4.png"
        />
      </div>
    </div>
  );
}

export default RecommentVideo;
