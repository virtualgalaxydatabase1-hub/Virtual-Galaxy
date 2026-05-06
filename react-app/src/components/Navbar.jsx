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
              <Link to="/about" className="item-link main-nav-link" style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap', transition: 'color 0.2s', textDecoration: 'none', position: 'relative', paddingBottom: '4px' }}>
                About Us
                <div className="hover-line" style={{ position: 'absolute', bottom: 0, left: 0, width: '0%', height: '2px', backgroundColor: '#ff2d15', transition: 'width 0.3s ease' }}></div>
              </Link>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="item-link main-nav-link" style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '5px', transition: 'color 0.2s', textDecoration: 'none', position: 'relative', paddingBottom: '4px' }}>
                Products
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div className="hover-line" style={{ position: 'absolute', bottom: 0, left: 0, width: '0%', height: '2px', backgroundColor: '#ff2d15', transition: 'width 0.3s ease' }}></div>
              </a>
              <ul className="sub-menu" style={{ 
                borderRadius: '16px', 
                padding: '20px', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)', 
                border: '1px solid #eee',
                backgroundColor: '#ffffff',
                width: '650px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
                left: '50%',
                transform: 'translateX(-50%)'
              }}>
                {[
                  { name: 'Core Banking Solution', link: '/products/core-banking-solution', icon: 'coins-solid' },
                  { name: 'MIS Solution', link: '/products/mis-solution', icon: 'chart-line-solid' },
                  { name: 'ERP Solution', link: '/products/erp-solution', icon: 'desktop-solid' },
                  { name: 'Digital Payments', link: '/products/digital-payments', icon: 'credit-card-solid' },
                  { name: 'Agriculture Trading', link: '/products/agriculture-trading', icon: 'leaf-solid' },
                  { name: 'Post-Mortem Mgmt.', link: '/products/post-mortem-mgmt', icon: 'clipboard-check-solid' },
                  { name: 'End-to-End Cyber Security', link: '/products/end-to-end-cyber-security', icon: 'shield-alt-solid' },
                  { name: 'Conversational Al Companion', link: '/products/conversational-al-companion', icon: 'robot-solid' },
                  { name: 'Transact Core', link: '/products/transact-core', icon: 'long-arrow-alt-right-solid' },
                  { name: 'Audit Flux', link: '/products/audit-flux', icon: 'check-solid' },
                  { name: 'Fin Flow', link: '/products/fin-flow', icon: 'bolt-solid' },
                ].map((product, index) => (
                  <li key={index} className="sub-menu-item" style={{ listStyle: 'none' }}>
                    <Link 
                      to={product.link} 
                      className="product-nav-link"
                      style={{ 
                        fontSize: '13px', 
                        padding: '12px', 
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        color: '#374151',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      <div className="product-icon-box" style={{ 
                        width: '32px', 
                        height: '32px', 
                        backgroundColor: '#f9fafb', 
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ff2d15',
                        fontSize: '14px',
                        border: '1px solid #f3f4f6',
                        transition: 'all 0.2s ease'
                      }}>
                        <i className={`icon icon-${product.icon}`}></i>
                      </div>
                      <span style={{ fontWeight: '500' }}>{product.name}</span>
                      <div className="hover-line" style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '0%',
                        height: '2px',
                        backgroundColor: '#ff2d15',
                        transition: 'width 0.3s ease'
                      }}></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="item-link main-nav-link" style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '5px', transition: 'color 0.2s', textDecoration: 'none', position: 'relative', paddingBottom: '4px' }}>
                Services
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div className="hover-line" style={{ position: 'absolute', bottom: 0, left: 0, width: '0%', height: '2px', backgroundColor: '#ff2d15', transition: 'width 0.3s ease' }}></div>
              </a>
              <ul className="sub-menu" style={{ 
                borderRadius: '16px', 
                padding: '20px', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)', 
                border: '1px solid #eee',
                backgroundColor: '#ffffff',
                width: '600px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
                left: '50%',
                transform: 'translateX(-50%)'
              }}>
                {[
                  { name: 'Application Development', link: '/application-development', icon: 'desktop-solid' },
                  { name: 'IT Infrastructure Development', link: '/it-infrastructure-development', icon: 'building' },
                  { name: 'VGST', link: '/vgst', icon: 'clipboard-check-solid' },
                  { name: 'Mobile Computing', link: '/mobile-computing', icon: 'mobile-alt-solid' },
                  { name: 'DR & DC', link: '/dr-dc', icon: 'tachometer-alt-solid' },
                  { name: 'Digital Solutions', link: '/digital-solutions', icon: 'bullseye-solid' },
                  { name: 'AI & ML', link: '/ai-ml', icon: 'robot-solid' },
                ].map((service, index) => (
                  <li key={index} className="sub-menu-item" style={{ listStyle: 'none' }}>
                    <Link 
                      to={service.link} 
                      className="product-nav-link"
                      style={{ 
                        fontSize: '13px', 
                        padding: '12px', 
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        color: '#374151',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      <div className="product-icon-box" style={{ 
                        width: '32px', 
                        height: '32px', 
                        backgroundColor: '#f9fafb', 
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ff2d15',
                        fontSize: '14px',
                        border: '1px solid #f3f4f6',
                        transition: 'all 0.2s ease'
                      }}>
                        <i className={`icon icon-${service.icon}`}></i>
                      </div>
                      <span style={{ fontWeight: '500' }}>{service.name}</span>
                      <div className="hover-line" style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '0%',
                        height: '2px',
                        backgroundColor: '#ff2d15',
                        transition: 'width 0.3s ease'
                      }}></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="item-link main-nav-link" style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '5px', transition: 'color 0.2s', textDecoration: 'none', position: 'relative', paddingBottom: '4px' }}>
                Investors Info
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div className="hover-line" style={{ position: 'absolute', bottom: 0, left: 0, width: '0%', height: '2px', backgroundColor: '#ff2d15', transition: 'width 0.3s ease' }}></div>
              </a>
              <ul className="sub-menu" style={{ 
                borderRadius: '16px', 
                padding: '20px', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)', 
                border: '1px solid #eee',
                backgroundColor: '#ffffff',
                width: '700px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
                left: '50%',
                transform: 'translateX(-50%)'
              }}>
                {[
                  { name: 'Board and Management', link: '/investor-info/board-and-management', icon: 'user-friends-solid' },
                  { name: 'Group Companies', link: '/investor-info/group-companies', icon: 'building' },
                  { name: 'Financial Information & Statutory Reports', link: '/investor-info/financial-information-and-statutory-reports', icon: 'chart-line-solid' },
                  { name: 'Corporate Governance', link: '/investor-info/corporate-governance', icon: 'shield-alt-solid' },
                  { name: 'Investor Contacts/Grievances', link: '/investor-info/investor-contacts-grievances', icon: 'headset-solid' },
                  { name: 'Material Creditors', link: '/investor-info/material-creditors', icon: 'coins-solid' },
                  { name: 'Preferential Allotment of Warrants', link: '/investor-info/preferential-allotment-of-warrants', icon: 'file-solid' },
                  { name: 'Material Contracts', link: '/investor-info/material-contracts', icon: 'book-solid' },
                  { name: 'Material Documents', link: '/investor-info/material-documents', icon: 'paperclip-solid' },
                  { name: 'Investor Analyst Meet', link: '/investor-info/investor-analyst-meet', icon: 'comments-solid' },
                  { name: 'Annual Reports', link: '/investor-info/annual-reports', icon: 'book-open-solid' },
                  { name: 'Notice of Meetings', link: '/investor-info/notice-of-meetings', icon: 'bell' },
                  { name: 'Dividend', link: '/investor-info/dividend', icon: 'coins-solid' },
                  { name: 'Announcement', link: '#', icon: 'bullseye-solid' },
                ].map((investor, index) => (
                  <li key={index} className="sub-menu-item" style={{ listStyle: 'none' }}>
                    <Link 
                      to={investor.link} 
                      className="product-nav-link"
                      style={{ 
                        fontSize: '13px', 
                        padding: '12px', 
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        color: '#374151',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      <div className="product-icon-box" style={{ 
                        width: '32px', 
                        height: '32px', 
                        backgroundColor: '#f9fafb', 
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ff2d15',
                        fontSize: '14px',
                        border: '1px solid #f3f4f6',
                        transition: 'all 0.2s ease'
                      }}>
                        <i className={`icon icon-${investor.icon}`}></i>
                      </div>
                      <span style={{ fontWeight: '500' }}>{investor.name}</span>
                      <div className="hover-line" style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '0%',
                        height: '2px',
                        backgroundColor: '#ff2d15',
                        transition: 'width 0.3s ease'
                      }}></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="menu-item">
              <Link to="/ipo" className="item-link main-nav-link" style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap', transition: 'color 0.2s', textDecoration: 'none', position: 'relative', paddingBottom: '4px' }}>
                IPO
                <div className="hover-line" style={{ position: 'absolute', bottom: 0, left: 0, width: '0%', height: '2px', backgroundColor: '#ff2d15', transition: 'width 0.3s ease' }}></div>
              </Link>
            </li>
            <li className="menu-item has-child">
              <a href="/resource" className="item-link main-nav-link" style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '5px', transition: 'color 0.2s', textDecoration: 'none', position: 'relative', paddingBottom: '4px' }}>
                Resource
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div className="hover-line" style={{ position: 'absolute', bottom: 0, left: 0, width: '0%', height: '2px', backgroundColor: '#ff2d15', transition: 'width 0.3s ease' }}></div>
              </a>
              <ul className="sub-menu" style={{ 
                borderRadius: '16px', 
                padding: '20px', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)', 
                border: '1px solid #eee',
                backgroundColor: '#ffffff',
                width: '300px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                left: '50%',
                transform: 'translateX(-50%)'
              }}>
                {[
                  { name: 'Blog', link: '/resource/blog', icon: 'book-open-solid' },
                  { name: 'News', link: '/resource/news', icon: 'paper-plane' },
                  { name: 'Press', link: '/resource/press', icon: 'comment-quote' },
                  { name: 'Media', link: '/resource/media', icon: 'video-solid' },
                  { name: 'Video', link: '/resource/video', icon: 'play-solid' },
                ].map((resource, index) => (
                  <li key={index} className="sub-menu-item" style={{ listStyle: 'none' }}>
                    <Link 
                      to={resource.link} 
                      className="product-nav-link"
                      style={{ 
                        fontSize: '13px', 
                        padding: '12px', 
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        color: '#374151',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      <div className="product-icon-box" style={{ 
                        width: '32px', 
                        height: '32px', 
                        backgroundColor: '#f9fafb', 
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ff2d15',
                        fontSize: '14px',
                        border: '1px solid #f3f4f6',
                        transition: 'all 0.2s ease'
                      }}>
                        <i className={`icon icon-${resource.icon}`}></i>
                      </div>
                      <span style={{ fontWeight: '500' }}>{resource.name}</span>
                      <div className="hover-line" style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '0%',
                        height: '2px',
                        backgroundColor: '#ff2d15',
                        transition: 'width 0.3s ease'
                      }}></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="menu-item">
              <Link to="#" className="item-link main-nav-link" style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap', transition: 'color 0.2s', textDecoration: 'none', position: 'relative', paddingBottom: '4px' }}>
                Careers
                <div className="hover-line" style={{ position: 'absolute', bottom: 0, left: 0, width: '0%', height: '2px', backgroundColor: '#ff2d15', transition: 'width 0.3s ease' }}></div>
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Contact Button + Social Icons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '15px' }}>
          
          {/* Contact Us Button - Hidden on Mobile */}
          <Link
            to="/contact"
            className="navbar-contact-btn d-none d-lg-flex"
            style={{
              backgroundColor: '#ff2d15',
              color: '#ffffff',
              borderRadius: '100px',
              padding: '10px 12px 10px 22px',
              fontSize: '14px',
              fontWeight: '700',
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

          {/* Social Icons - Hidden on Tablet/Mobile */}
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

          {/* Mobile Menu Toggle - Minimal Style */}
          <a href="#" className="open-mb-menu mobile-menu d-lg-none d-flex" style={{ color: '#1f2937', fontSize: '24px', textDecoration: 'none' }}>
            <i className="icon icon-grip-lines-solid"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
