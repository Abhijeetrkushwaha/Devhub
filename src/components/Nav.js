import React, { useState } from "react";
import { Link } from "react-router-dom";
import Chat from "../images/chat-logo2.png";
import Abhijeet from "../images/abhijeet.jpg";
import { auth } from "../firebase";

function Nav({ user }) {
  // console.log(user);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const navItems = user ? (
    <ul className={`nav-list right purple ${isOpen && "active"}`}>
      <div className="menu-icon close" onClick={handleCloseClick}>
        <i className="fas fa-times"></i>
      </div>
      <li className="hide-on-large-only">
        <div className="social-media">
          <div className="developer-img">
            <img src={Abhijeet} alt="" />
          </div>
          <h5>
            Develop with{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>{" "}
            by
          </h5>
          <h4>
            <a href="https://abhijeetkwh.me/" className="white-text">
              Abhijeet Kushwaha
            </a>
          </h4>
          <ul className="social-icon">
            <li>
              <a href="https://github.com/Abhijeetrkushwaha">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Abhijeetkwh">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/abhijeet.kushwaha.1800">
                <i className="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/abhijeetkwh/">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/abhijeet-kushwaha-1882a41a5/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <Link to="/create" onClick={() => setIsOpen(false)}>
          Create Project
        </Link>
      </li>
      <li>
        <Link to="/profile" onClick={() => setIsOpen(false)}>
          Profile
        </Link>
      </li>
      <li className="hide-on-large-only">
        <Link to="/notifications" onClick={() => setIsOpen(false)}>
          Notifications
        </Link>
      </li>
      <li>
        <Link
          to="/"
          onClick={() => {
            auth.signOut();
            setIsOpen(false);
          }}
        >
          logout
        </Link>
      </li>
      <li>
        <Link to="/chat">
          <div className="img msg-bg">
            <img src={Chat} alt="" />
          </div>
        </Link>
      </li>
    </ul>
  ) : (
    <ul className={`nav-list right purple ${isOpen && "active"}`}>
      <div className="menu-icon close" onClick={handleCloseClick}>
        <i className="fas fa-times"></i>
      </div>
      <li className="hide-on-large-only">
        <div className="social-media">
          <div className="developer-img">
            <img src={Abhijeet} alt="" />
          </div>
          <h5>
            Develop with{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>{" "}
            by
          </h5>
          <h4>
            <a href="https://abhijeetkwh.me/" className="white-text">
              Abhijeet Kushwaha
            </a>
          </h4>
          <ul className="social-icon">
            <li>
              <a href="https://github.com/Abhijeetrkushwaha">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Abhijeetkwh">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/abhijeet.kushwaha.1800">
                <i className="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/abhijeetkwh/">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/abhijeet-kushwaha-1882a41a5/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <Link to="/login" onClick={() => setIsOpen(false)}>
          Login
        </Link>
      </li>
      <li>
        <Link to="/signup" onClick={() => setIsOpen(false)}>
          Signup
        </Link>
      </li>
    </ul>
  );

  const chatRoomAtSmall = user ? (
    <Link to="/chat">
      <div className="img right msg-sm">
        <img src={Chat} alt="" />
      </div>
    </Link>
  ) : null;

  return (
    <header>
      <nav className="nav-wrapper purple">
        <div className="container">
          <Link
            to="/"
            className="brand-logo devhub-logo hide-on-med-and-down left white-text"
          >
            Devhub
          </Link>
          <Link
            to="/"
            className="brand-logo devhub-logo hide-on-large-only center white-text"
          >
            Devhub
          </Link>
          <div className="menu-icon open left" onClick={handleOpenClick}>
            <i className="fas fa-align-left"></i>
          </div>
          {chatRoomAtSmall}
          {navItems}
        </div>
      </nav>
    </header>
  );
}

export default Nav;
