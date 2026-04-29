import React from 'react';
import { Link } from 'react-router-dom';

function MobileMenu() {
  return (
    <div className="offcanvas-menu">
      <div className="offcanvas-content">
        <div className="container h-100">
          <div className="offcanvas-content_wrapin">
            <div className="canvas_head">
              <Link to="/" className="logo-site">
                <i className="icon icon-davies-logo"></i>
              </Link>
              <div className="btn-mobile-menu close-mb-menu text-caption link">
                <i className="icon icon-close"></i>
                CLOSE
              </div>
            </div>
            <div className="canvas_center">
              <ul className="nav-ul-mb" id="mobile-menu">
                <li>
                  <div className="item">
                    <div className="has-sub-menu">
                      <a href="#dropdown-menu-index" className="mb-menu-link text-display-1 collapsed" data-bs-toggle="collapse"
                        aria-expanded="false" aria-controls="dropdown-menu-index">
                        <span className="text">Home</span>
                      </a>
                      <div id="dropdown-menu-index" className="collapse" data-bs-parent="#mobile-menu">
                        <ul className="sub-nav-menu">
                          <li><Link to="/" className="sub-nav-link text-white">Home Gradient</Link></li>
                          <li><Link to="/index-v2" className="sub-nav-link text-white">Home Animated</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <Link to="/about" className="mb-menu-link text-display-1">
                      <span className="text">About</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="has-sub-menu">
                      <a href="#dropdown-menu-1" className="mb-menu-link text-display-1 collapsed" data-bs-toggle="collapse"
                        aria-expanded="false" aria-controls="dropdown-menu-1">
                        <span className="text">Works</span>
                      </a>
                      <div id="dropdown-menu-1" className="collapse" data-bs-parent="#mobile-menu">
                        <ul className="sub-nav-menu">
                          <li><Link to="/works" className="sub-nav-link text-white">Works</Link></li>
                          <li><Link to="/work-single" className="sub-nav-link text-white">Works Single</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="has-sub-menu">
                      <a href="#dropdown-menu-2" className="mb-menu-link text-display-1 collapsed" data-bs-toggle="collapse"
                        aria-expanded="false" aria-controls="dropdown-menu-2">
                        <span className="text">Services</span>
                      </a>
                      <div id="dropdown-menu-2" className="collapse" data-bs-parent="#mobile-menu">
                        <ul className="sub-nav-menu">
                          <li><Link to="/services" className="sub-nav-link text-white">Services</Link></li>
                          <li><Link to="/service-single" className="sub-nav-link text-white">Services Single</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="has-sub-menu">
                      <a href="#dropdown-menu-3" className="mb-menu-link text-display-1 collapsed" data-bs-toggle="collapse"
                        aria-expanded="false" aria-controls="dropdown-menu-3">
                        <span className="text">Blog</span>
                      </a>
                      <div id="dropdown-menu-3" className="collapse" data-bs-parent="#mobile-menu">
                        <ul className="sub-nav-menu">
                          <li><Link to="/blog-standard" className="sub-nav-link text-white">Blog Standard</Link></li>
                          <li><Link to="/blog-two-columns" className="sub-nav-link text-white">Blog Grid 2</Link></li>
                          <li><Link to="/blog-three-columns" className="sub-nav-link text-white">Blog Grid 3</Link></li>
                          <li><Link to="/blog-single" className="sub-nav-link text-white">Blog Single</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <Link to="/contact" className="mb-menu-link text-display-1">
                      <span className="text">Contact</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="canvas_foot">
              <div className="left">
                <a href="mailto:aigocy@gmail.com" className="text-caption text-neutral-200">aigocy@gmail.com</a>
                <p className="text-caption text-neutral-200">
                  CUP <span className="clock"></span>
                </p>
              </div>
              <div className="right">
                <a href="#" className="tf-link-icon text-caption text-neutral-200">
                  <i className="icon icon-arrow-top-right"></i>
                  TWITTER (X)
                </a>
                <a href="#" className="tf-link-icon text-caption text-neutral-200">
                  <i className="icon icon-arrow-top-right"></i>
                  INSTAGRAM
                </a>
                <a href="#" className="tf-link-icon text-caption text-neutral-200">
                  <i className="icon icon-arrow-top-right"></i>
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
