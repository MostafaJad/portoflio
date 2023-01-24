import React from "react";
import "./home.style.css";
import MyImage from "../images/jad.png";

const Home = () => {
  return (
    <div className="home-container">
      <img src={MyImage} alt="My Image" className="my-image" />
      <div className="vertical-line"></div>

      <div className="greeting-container">
        <h1 className="greeting">Welcome to my website</h1>
        <p className="subtitle">
          a passionate web developer with a focus on creating beautiful and
          functional websites
        </p>
      </div>
    </div>
  );
};

export default Home;
