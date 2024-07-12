import React from 'react';
//import './ProjectStyle.css';

const Nav = () => (
  <nav>
    <div className="nav__logo">MY FLIGHT</div>
    <ul className="nav__links">
      <li className="link"><a href="#">Home</a></li>
      <li className="link"><a href="#">About</a></li>
      <li className="link"><a href="#">Seats</a></li>
      <li className="link"><a href="#">Destinations</a></li>
    </ul>
    <button className="btn">Contact</button>
  </nav>
);

export default Nav;
