import React from "react";
import logo from '../assets/Amazon_logo.svg.png';

const Footer = () => {
  
    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
  
  
    return (
    <footer>
      <div id="scrollToTopBtn__container">
        <button onClick={scrollToTop} id="btn">Back To Top</button>
      </div>
      <div id="links__lists--container">
        <div className="link__list">
          <h3>Get to Know Us</h3>
          <ul className="list">
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Corporate Information</a>
            </li>
            <li>
              <a href="">Press Releases</a>
            </li>
            <li>
              <a href="">Amazon Science</a>
            </li>
          </ul>
        </div>
        <div className="link__list">
          <h3>Make Money with Us</h3>
          <ul className="list">
            <li>
              <a href="">Independently Publish with Us</a>
            </li>
            <li>
              <a href="">Sell on Amazon</a>
            </li>
            <li>
              <a href="">Drive with Amazon Flex</a>
            </li>
            <li>
              <a href="">Advertise Your Products</a>
            </li>
            <li>
              <a href="">Associates Program</a>
            </li>
            <li>
              <a href="">Host an Amazon Hub</a>
            </li>
          </ul>
        </div>
        <div className="link__list">
          <h3>Let Us Help You</h3>
          <ul className="list">
            <li>
              <a href="">COVID-19 and Amazon</a>
            </li>
            <li>
              <a href="">Your Account</a>
            </li>
            <li>
              <a href="">Your Orders</a>
            </li>
            <li>
              <a href="">Delivery Rates & Policies</a>
            </li>
            <li>
              <a href="">Returns & Replacements</a>
            </li>
            <li>
              <a href="">Manage Your Content and Devices</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="storeSelect__container">
        <figure>
            <img src={logo} id='footer__logo' alt="" />
        </figure>
        <div id="stores__list">
            <ul id="stores">
                <li>
                    <a href="">Brazil</a>
                </li>
                <li>
                    <a href="">Canada</a>
                </li>
                <li>
                    <a href="">China</a>
                </li>
                <li>
                    <a href="">France</a>
                </li>
                <li>
                    <a href="">Germany</a>
                </li>
                <li>
                    <a href="">India</a>
                </li>
                <li>
                    <a href="">Italy</a>
                </li>
                <li>
                    <a href="">Japan</a>
                </li>
                <li>
                    <a href="">Mexico</a>
                </li>
                <li>
                    <a href="">Netherlands</a>
                </li>
                <li>
                    <a href="">Poland</a>
                </li>
                <li>
                    <a href="">Singapore</a>
                </li>
                <li>
                    <a href="">Spain</a>
                </li>
                <li>
                    <a href="">Turkey</a>
                </li>
                <li>
                    <a href="">United Arab Emirates</a>
                </li>
                <li>
                    <a href="">United Kingdom</a>
                </li>
                <li>
                    <a href="">United States</a>
                </li>
            </ul>
        </div>
        <div id="services__links">
            <h6>And don't forget:</h6>
            <ul>
                <li>
                    <a href="">Amazon Advertising</a>
                </li>
                <li>
                    <a href="">Amazon Web Services</a>
                </li>
                <li>
                    <a href="">Goodreads</a>
                </li>
                <li>
                    <a href="">Shopbop</a>
                </li>
            </ul>
        </div>
      </div>
      <div id="conditions__container">
        <ul>
            <li>
                <a href="">Conditions of Use & Sale</a>
            </li>
            <li>
                <a href="">Privacy Policy</a>
            </li>
            <li>
                <a href="">Interest-Based Ads Notice</a>
            </li>
            <li>
                <a href="" id="no__underline">&copy; 1996-2022, Amazon.com, Inc. or its affiliates</a>
            </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
