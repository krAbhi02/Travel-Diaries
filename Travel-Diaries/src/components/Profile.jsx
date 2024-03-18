import './Profile.css'
import React from 'react';
import profileData from '../data/ProfileData'; // Hardcoded profile data

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-details">
        <h1>{profileData.name}</h1>
        <p>{profileData.bio}</p>
        <div className="profile-stats">
          <div className="stat">
            <span>{profileData.posts}</span>
            <span>Posts</span>
          </div>
          <div className="stat">
            <span>{profileData.followers}</span>
            <span>Followers</span>
          </div>
          <div className="stat">
            <span>{profileData.following}</span>
            <span>Following</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
