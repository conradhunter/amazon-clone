import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import prime from "../assets/stream_prime.jpg";

const NavBarTwo = () => {
  return (
    <div id="secondNav">
      <a href="">
        <div id="hamburgerMenu__container">
          <FontAwesomeIcon icon={faBars} />
          <h3>All</h3>
        </div>
      </a>
      <a className="nav__a" href="">
        Best Sellers
      </a>
      <a className="nav__a" href="">
        Customer Service
      </a>
      <a className="nav__a" href="">
        Today's Deals
      </a>
      <a className="nav__a" href="">
        Prime <FontAwesomeIcon icon={faAngleDown} />
      </a>
      <a className="nav__a" href="">
        Fashion
      </a>
      <a className="nav__a" href="">
        Music
      </a>
      <a className="nav__a" href="">
        Kindle Books
      </a>
      <a className="nav__a" href="">
        New Releases
      </a>
      <a className="nav__a" href="">
        Books
      </a>
      <a className="nav__a" href="">
        Electronics
      </a>
      <a className="nav__a" href="">
        Home
      </a>
      <img src={prime} alt="" />
    </div>
  );
};

export default NavBarTwo;
