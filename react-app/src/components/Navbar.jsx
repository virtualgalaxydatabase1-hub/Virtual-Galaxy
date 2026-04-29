import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="tf-header header2">
      <div className="header-inner">
        <Link to="/" className="logo-site">
          <img src="/assets/images/logo/logo.svg" alt="" />
        </Link>
        <div className="box-navigation">
          <ul className="nav-menu-main">
            <li className="menu-item has-child">
              <a href="#" className="item-link link1 active">Home</a>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link to="/" className="item-link link1">Home Gradient</Link>
                </li>
                <li className="sub-menu-item">
                  <Link to="/index-v2" className="item-link link1">Home Animated</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="/about" className="item-link link1">About</Link>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="item-link link1">Services</a>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link to="/services" className="item-link link1">Services</Link>
                </li>
                <li className="sub-menu-item">
                  <Link to="/service-single" className="item-link link1">Services single</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="item-link link1">Works</a>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link to="/works" className="item-link link1">Works</Link>
                </li>
                <li className="sub-menu-item">
                  <Link to="/work-single" className="item-link link1">Works single</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="item-link link1">Blog</a>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link to="/blog-standard" className="item-link link1">Blog standard</Link>
                </li>
                <li className="sub-menu-item">
                  <Link to="/blog-two-columns" className="item-link link1">Blog grid 2</Link>
                </li>
                <li className="sub-menu-item">
                  <Link to="/blog-three-columns" className="item-link link1">Blog grid 3</Link>
                </li>
                <li className="sub-menu-item">
                  <Link to="/blog-single" className="item-link link1">Blog single</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="/contact" className="item-link link1">Contact</Link>
            </li>
          </ul>
        </div>
        <Link to="/contact" className="tf-btn d-lg-flex d-none">
          Start a Project
        </Link>
        <a href="#" className="tf-btn open-mb-menu mobile-menu d-lg-none d-flex">
          <i className="icon icon-grip-lines-solid"></i>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
