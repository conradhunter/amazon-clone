import {
  faAngleDown,
  faCartPlus,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../assets/Amazon_logo.svg.png";
import "./components.css";
import flag from "../assets/aus_flag.png";

const NavBarOne = () => {
  return (
    <nav>
      <div id="logo__container">
        <img id="amazon__logo" src={logo} alt="" />
      </div>
      <div id="addressFinder__container">
        <FontAwesomeIcon id="location__icon" icon={faLocationDot} />
        <div id="heading__container">
          <h5 id="heading__one">Hello</h5>
          <h5 id="heading__two">Select your address</h5>
        </div>
      </div>
      <div id="search__container">
        <select name="All" className="search__specs" id="searchSelect">
          <option value="">All</option>
          <option value="">Alexa Skill</option>
          <option value="">Amazon Devices</option>
          <option value="">Amazon Global Store</option>
          <option value="">Amazon Warehouse</option>
          <option value="">Apps & Games</option>
          <option value="">Audible Audiobooks</option>
          <option value="">Automotive</option>
          <option value="">Baby</option>
          <option value="">Beauty</option>
          <option value="">Books</option>
          <option value="">CDs & Vinyl</option>
          <option value="">Clothing, Shoes & Accessories</option>
          <option value="">Computer & Accessories</option>
          <option value="">Electronics</option>
          <option value="">Garden</option>
          <option value="">Gift Cards</option>
          <option value="">Health, Household & Personal Care</option>
          <option value="">Home</option>
          <option value="">Home Improvement</option>
          <option value="">Kindle Store</option>
          <option value="">Kitchen & Dining</option>
          <option value="">Luggage & Travel Gear</option>
          <option value="">Movies & TV</option>
          <option value="">Musical Instruments</option>
          <option value="">Pantry Food & Drinks</option>
          <option value="">Pet Supplies</option>
          <option value="">Premium Beauty</option>
          <option value="">Prime Video</option>
          <option value="">Software</option>
          <option value="">Sports, Fitness & Outdoors</option>
          <option value="">Stationery & Office Products</option>
          <option value="">Subscribe & Save</option>
          <option value="">Toys & Games</option>
          <option value="">Video Games</option>
          <option value="">Wine, Beer & Spirits</option>
        </select>
        <input type="text" className="search__specs" id="search__bar" />
        <a href="">
          <FontAwesomeIcon id="search__icon" icon={faMagnifyingGlass} />
        </a>
      </div>
      <div id="countySelect__container">
        <img id="australian__flag" src={flag} alt="" />
        <FontAwesomeIcon id="angleDown__icon" icon={faAngleDown} />
      </div>
      <div id="signIn__container">
        <h5 id="heading__one">Hello, Sign in</h5>
        <h5 id="heading__two">
          Account & Lists
          <FontAwesomeIcon icon={faAngleDown} />
        </h5>
      </div>
      <div id="returnsOrders__container">
        <h5 id="heading__one">Returns</h5>
        <h5 id="heading__two">& Orders</h5>
      </div>
      <div id="cart__container">
        <FontAwesomeIcon id="cart__icon" icon={faCartPlus} />
      </div>
    </nav>
  );
};

export default NavBarOne;
