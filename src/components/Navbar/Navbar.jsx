import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="icons">
          <img
            className="icon"
            src="https://img.icons8.com/ios/24/6F7378/settings--v1.png"
          />
          <img src="https://img.icons8.com/ios/24/6F7378/appointment-reminders--v1.png" />
        </div>
        <div className="heading">
          <div className="heading-content timeline">Timeline</div>
          <div className="heading-content">Albums</div>
          <div className="heading-content">Events</div>
          <div className="heading-content">Favorites</div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">
            Timeline
            <img
              className="timeline-icon"
              src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/12/B7BEC7/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-4.png"
            />
          </button>
          <div className="dropdown-content">
            <a href="#">Albums</a>
            <a href="#">Events</a>
            <a href="#">Favorites</a>
          </div>
        </div>

        <div className="upload">
          <img
            className="upload-icon"
            src="https://img.icons8.com/ios/20/ffffff/plus--v1.png"
          />
          <span className="upload-content">Upload photos</span>
        </div>
      </div>
      <div className="navbar-below">
        <div className="lib">Library</div>
        <div className="search">
          <input type="search" name="Search" placeholder="Search all photos" />
          <img src="https://img.icons8.com/ios/22/6F7378/search--v1.png" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
