import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="nav">
      <div className="leftside">
        <Link to="/">
          <img alt="logo" src="https://i.ibb.co/X2RGpSB/Taste-Of-Paris-1.png" />
        </Link>
      </div>
      <div className="rightside">
        <div className="links">
          <Link to="about">About</Link>
          <Link to="events">Events</Link>
          <Link to="menu">Menu</Link>
          <Link to="contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
