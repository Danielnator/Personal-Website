import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-dark bg-dark static-top">
          <Link to="/">
            <p id="nav-bar-title">Daniel Ruminski</p>
          </Link>
          <div>
            <Link to="/">
              <p className="nav-item nav-link active">Home</p>
            </Link>
            <Link to="/resume">
              <p className="nav-item nav-link active">Resume</p>
            </Link>
            <Link to="/projects">
              <p className="nav-item nav-link active">Projects</p>
            </Link>
            <Link to="/contact">
              <p className="nav-item nav-link active">Contact</p>
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
