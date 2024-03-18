import React from 'react';
import Profile from './components/Profile';
import './App.css'; 
import logo from './assets/logo.png'
import profileData from './data/ProfileData';

const App = () => {
  const profileImg = profileData.image;

  return (
    <div className="bordered-page">
      <header className="header">
        <div className='logo-container'>
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <button className="header-button">Courses</button>
      </header>
      <div className="background-image">
        {/* Only one image should be here */}
        <img src={profileImg} alt="Profile" className="profile-image" />
      </div>
      <div className="centered-container">
        <Profile />
      </div>
    </div>
  );
};

export default App;
