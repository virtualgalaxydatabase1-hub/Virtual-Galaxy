import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="tf-header header2" style={{ display: 'flex', alignItems: 'center', padding: '10px 40px' }}>
      <div style={{ flex: 1 }}>
        <Link to="/" className="logo-site">
          <img src="/assets/images/logo/logo.svg" alt="Aigocy" />
        </Link>
      </div>

      <div className="header-inner" style={{ 
        maxWidth: 'max-content', 
        paddingRight: '12px', 
        paddingLeft: '24px', 
        paddingTop: '8px',
        paddingBottom: '8px',
        display: 'flex', 
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: '100px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
        border: '1px solid rgba(0, 0, 0, 0.04)'
      }}>
        <div className="box-navigation">
          <ul className="nav-menu-main">
            <li className="menu-item">
              <Link to="/" className="item-link link1 active" style={{ whiteSpace: 'nowrap' }}>Home</Link>
            </li>
            <li className="menu-item">
              <Link to="/about" className="item-link link1" style={{ whiteSpace: 'nowrap' }}>About Us</Link>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="item-link link1" style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '4px' }}>
                Products
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link to="#" className="item-link link1" style={{ whiteSpace: 'nowrap' }}>Product List</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="item-link link1" style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '4px' }}>
                Services
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link to="/services" className="item-link link1" style={{ whiteSpace: 'nowrap' }}>Services</Link>
                </li>
                <li className="sub-menu-item">
                  <Link to="/service-single" className="item-link link1" style={{ whiteSpace: 'nowrap' }}>Services single</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="item-link link1" style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '4px' }}>
                Investors Info
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link to="#" className="item-link link1" style={{ whiteSpace: 'nowrap' }}>Information</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="#" className="item-link link1" style={{ whiteSpace: 'nowrap' }}>IPO</Link>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="item-link link1" style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '4px' }}>
                Resource
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link to="#" className="item-link link1" style={{ whiteSpace: 'nowrap' }}>Resources</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="#" className="item-link link1" style={{ whiteSpace: 'nowrap' }}>Careers</Link>
            </li>
          </ul>
        </div>
        <div className="d-lg-flex d-none align-items-center gap-16" style={{ marginLeft: '16px' }}>
          <Link to="/contact" className="tf-btn" style={{ backgroundColor: '#ff2d15', color: '#fff', borderRadius: '30px', padding: '10px 24px', display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
            Contact Us <i className="icon icon-long-arrow-alt-up-solid" style={{ transform: 'rotate(45deg)', backgroundColor: '#fff', color: '#ff2d15', borderRadius: '50%', padding: '4px', fontSize: '12px' }}></i>
          </Link>
          <div className="d-flex gap-8">
            <a href="#" className="social-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', backgroundColor: '#ff2d15', color: '#fff', borderRadius: '50%', fontSize: '14px', textDecoration: 'none' }}><i className="icon icon-linkedin-in"></i></a>
            <a href="#" className="social-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', backgroundColor: '#ff2d15', color: '#fff', borderRadius: '50%', fontSize: '14px', textDecoration: 'none' }}><i className="icon icon-instagram"></i></a>
            <a href="#" className="social-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', backgroundColor: '#ff2d15', color: '#fff', borderRadius: '50%', fontSize: '14px', textDecoration: 'none' }}><i className="icon icon-envelope"></i></a>
            <a href="#" className="social-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', backgroundColor: '#ff2d15', color: '#fff', borderRadius: '50%', fontSize: '14px', textDecoration: 'none' }}><i className="icon icon-facebook-f"></i></a>
            <a href="#" className="social-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', backgroundColor: '#ff2d15', color: '#fff', borderRadius: '50%', fontSize: '14px', textDecoration: 'none' }}><i className="icon icon-youtube"></i></a>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <a href="#" className="tf-btn open-mb-menu mobile-menu d-lg-none d-flex">
          <i className="icon icon-grip-lines-solid"></i>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
