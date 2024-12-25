import React from 'react';
import './HomePage.css'; // Importing the CSS file for custom styles

function HomePage() {
  return (
    <div className="home-page">
      <header className="home-header">
        {/* Logo */}
        <img
          src="https://yt3.googleusercontent.com/tWUTBOpTe8UUNx-6Ky1ZwOZPAqrJWDXpTOeXJSC8cp08AluYozDhLxDesPmXtF0sdGcyjQW0WTw=s900-c-k-c0x00ffffff-no-rj" // Path to your logo image in the public folder
          alt="Study Hub Logo"
          className="logo"
        />
      </header>

      <div className="home-content">
        {/* Heading */}
        <h1>Welcome to Study Hub</h1>
        <p>Collaborate with friends and improve your study habits.</p>

        {/* Image of students studying online */}
        <div className="image-container">
          <img
            src="https://media.istockphoto.com/id/1300822108/photo/group-of-unrecognisable-international-students-having-online-meeting.jpg?s=612x612&w=0&k=20&c=-X6IUTSdDMfJrFdQFhrDuwhnMrM1BLjfrLzydpibCTA="
            alt="Students studying online"
            className="home-image"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

