/* eslint-disable jsx-a11y/anchor-is-valid */
import "./navbar.style.css";
import { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const sections = [
    "Home",
    "About",
    "Projects",
    "Skills",
    "Let's Go for Coffee",
  ];

  const handleHover = () => {
    setActive(!active);
  };
  return (
    <div className="container">
      <div className="logo">
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          className="text"
        >
          {active ? "MJ" : "Mostafa Jad"}
        </div>
        <span className="tagLine">Web Developer</span>
      </div>

      {sections.map((section) => (
        <div className="item">
          <h1 className="menuText">{section}</h1>
        </div>
      ))}
      <div className="item">
        <a href="#">
          <FacebookIcon />
        </a>
        <a href="#">
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
