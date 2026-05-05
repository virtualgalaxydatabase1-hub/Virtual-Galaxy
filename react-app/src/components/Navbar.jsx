import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`tf-header header2 ${scrolled ? 'is-fixed is-small' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        display: 'flex',
        justifyContent: 'center',
        padding: scrolled ? '12px 20px' : '20px 20px',
        transition: 'padding 0.3s ease',
        background: 'transparent',
      }}
    >
      <div
        className="header-inner"
        style={{
          width: '100%',
          maxWidth: '1350px',
          margin: '0 auto',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
          borderRadius: '100px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          border: '1px solid #f1f1f1',
          transition: 'all 0.3s ease'
        }}
      >

        {/* Left Section: Logo Only */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <Link to="/" className="logo-site" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/assets/images/logo/vgil-logo.png" alt="Virtual Galaxy" style={{ height: '42px', width: 'auto', objectFit: 'contain' }} />
          </Link>
        </div>

        {/* Center Section: Navigation Menu */}
        <div className="box-navigation d-none d-lg-flex" style={{ display: 'flex', justifyContent: 'center', padding: '0 10px' }}>
          <ul className="nav-menu-main" style={{ display: 'flex', gap: '28px', margin: 0, padding: 0, alignItems: 'center' }}>
            <li className="menu-item">
              <Link to="/about" className="item-link" style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap', transition: 'color 0.2s', textDecoration: 'none' }}>About Us</Link>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="item-link" style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '5px', transition: 'color 0.2s', textDecoration: 'none' }}>
                Products
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <ul className="sub-menu" style={{ borderRadius: '12px', padding: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid #f3f4f6' }}>
                <li className="sub-menu-item"><Link to="#" style={{ fontSize: '13px', padding: '8px 12px', borderRadius: '6px' }}>Product List</Link></li>
              </ul>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="item-link" style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '5px', transition: 'color 0.2s', textDecoration: 'none' }}>
                Services
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <ul className="sub-menu" style={{ borderRadius: '12px', padding: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid #f3f4f6' }}>
                <li className="sub-menu-item"><Link to="/services" style={{ fontSize: '13px', padding: '8px 12px', borderRadius: '6px' }}>Services</Link></li>
              </ul>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="item-link" style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '5px', transition: 'color 0.2s', textDecoration: 'none' }}>
                Investors Info
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <ul className="sub-menu" style={{ borderRadius: '12px', padding: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid #f3f4f6' }}>
                <li className="sub-menu-item"><Link to="#" style={{ fontSize: '13px', padding: '8px 12px', borderRadius: '6px' }}>Information</Link></li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="#" className="item-link" style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap', transition: 'color 0.2s', textDecoration: 'none' }}>IPO</Link>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="item-link" style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '5px', transition: 'color 0.2s', textDecoration: 'none' }}>
                Resource
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <ul className="sub-menu" style={{ borderRadius: '12px', padding: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid #f3f4f6' }}>
                <li className="sub-menu-item"><Link to="#" style={{ fontSize: '13px', padding: '8px 12px', borderRadius: '6px' }}>Resources</Link></li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="#" className="item-link" style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap', transition: 'color 0.2s', textDecoration: 'none' }}>Careers</Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Contact Button + Social Icons */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '20px' }}>
          
          {/* Contact Us Button */}
          <Link
            to="/contact"
            style={{
              backgroundColor: '#ff2d15',
              color: '#ffffff',
              borderRadius: '100px',
              padding: '10px 12px 10px 22px',
              fontSize: '14px',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.3s ease',
              border: 'none',
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(255, 45, 21, 0.2)'
            }}
          >
            Contact Us
            <div style={{ backgroundColor: '#ffffff', borderRadius: '50%', width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className="icon icon-long-arrow-alt-up-solid" style={{ color: '#ff2d15', fontSize: '11px', transform: 'rotate(45deg)', fontWeight: '900' }} />
            </div>
          </Link>

          {/* Social Icons */}
          <div className="d-none d-xl-flex align-items-center" style={{ gap: '10px' }}>
            {[
              { icon: 'linkedin-in', link: '#' },
              { icon: 'instagram', link: '#' },
              { icon: 'envelope', link: '#' },
              { icon: 'facebook-f', link: '#' },
              { icon: 'youtube', link: '#' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '34px',
                  height: '34px',
                  backgroundColor: '#ff2d15',
                  color: '#ffffff',
                  borderRadius: '50%',
                  fontSize: '15px',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(255, 45, 21, 0.15)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 45, 21, 0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(255, 45, 21, 0.15)'; }}
              >
                <i className={`icon icon-${social.icon}`}></i>
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <a href="#" className="open-mb-menu mobile-menu d-lg-none d-flex" style={{ color: '#1f2937', fontSize: '26px', padding: '0 5px', textDecoration: 'none' }}>
            <i className="icon icon-grip-lines-solid"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
