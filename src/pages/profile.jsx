import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoCameraOutline } from "react-icons/io5";
import "../styles/profile.css";
import { FaCog } from "react-icons/fa";

function Profile() {
  const location = useLocation();

  const user = location.state;

  const [profileImage, setProfileImage] = useState(
    "https://i.pravatar.cc/150?img=12"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h2 className="profile-heading"><FaCog />Account Settings</h2>

        <div className="profile-section">
          <div className="profile-image-container">
            <img
              src={profileImage}
              alt="profile"
              className="profile-image"
            />

            <label className="camera-icon">
              <IoCameraOutline />

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className="profile-info">
            <h3>{user?.name}</h3>
            <p>{user?.email}</p>
          </div>
        </div>

        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>

        <hr className="profile-line" />
      </div>
    </div>
  );
}

export default Profile;