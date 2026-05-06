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
                    <Link to="/" className="mb-menu-link text-display-1">
                      <span className="text">Home</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <Link to="/about" className="mb-menu-link text-display-1">
                      <span className="text">About Us</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="has-sub-menu">
                      <a href="#dropdown-menu-products" className="mb-menu-link text-display-1 collapsed" data-bs-toggle="collapse"
                        aria-expanded="false" aria-controls="dropdown-menu-products">
                        <span className="text">Products</span>
                      </a>
                      <div id="dropdown-menu-products" className="collapse" data-bs-parent="#mobile-menu">
                        <ul className="sub-nav-menu">
                          {[
                            { name: 'Core Banking Solution', link: '/products/core-banking-solution' },
                            { name: 'MIS Solution', link: '/products/mis-solution' },
                            { name: 'ERP Solution', link: '/products/erp-solution' },
                            { name: 'Digital Payments', link: '/products/digital-payments' },
                            { name: 'Agriculture Trading', link: '/products/agriculture-trading' },
                            { name: 'Post-Mortem Mgmt.', link: '/products/post-mortem-mgmt' },
                            { name: 'End-to-End Cyber Security', link: '/products/end-to-end-cyber-security' },
                            { name: 'Conversational Al Companion', link: '/products/conversational-al-companion' },
                            { name: 'Transact Core', link: '/products/transact-core' },
                            { name: 'Audit Flux', link: '/products/audit-flux' },
                            { name: 'Fin Flow', link: '/products/fin-flow' },
                          ].map((product, index) => (
                            <li key={index}><Link to={product.link} className="sub-nav-link text-white">{product.name}</Link></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="has-sub-menu">
                      <a href="#dropdown-menu-services" className="mb-menu-link text-display-1 collapsed" data-bs-toggle="collapse"
                        aria-expanded="false" aria-controls="dropdown-menu-services">
                        <span className="text">Services</span>
                      </a>
                      <div id="dropdown-menu-services" className="collapse" data-bs-parent="#mobile-menu">
                        <ul className="sub-nav-menu">
                          {[
                            { name: 'Application Development', link: '/application-development' },
                            { name: 'IT Infrastructure Development', link: '/it-infrastructure-development' },
                            { name: 'VGST', link: '/vgst' },
                            { name: 'Mobile Computing', link: '/mobile-computing' },
                            { name: 'DR & DC', link: '/dr-dc' },
                            { name: 'Digital Solutions', link: '/digital-solutions' },
                            { name: 'AI & ML', link: '/ai-ml' },
                          ].map((service, index) => (
                            <li key={index}><Link to={service.link} className="sub-nav-link text-white">{service.name}</Link></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="has-sub-menu">
                      <a href="#dropdown-menu-investors" className="mb-menu-link text-display-1 collapsed" data-bs-toggle="collapse"
                        aria-expanded="false" aria-controls="dropdown-menu-investors">
                        <span className="text">Investors Info</span>
                      </a>
                      <div id="dropdown-menu-investors" className="collapse" data-bs-parent="#mobile-menu">
                        <ul className="sub-nav-menu">
                          {[
                            { name: 'Board and Management', link: '/investor-info/board-and-management' },
                            { name: 'Group Companies', link: '/investor-info/group-companies' },
                            { name: 'Financial Information & Statutory Reports', link: '/investor-info/financial-information-and-statutory-reports' },
                            { name: 'Corporate Governance', link: '/investor-info/corporate-governance' },
                            { name: 'Investor Contacts/Grievances', link: '/investor-info/investor-contacts-grievances' },
                            { name: 'Material Creditors', link: '/investor-info/material-creditors' },
                            { name: 'Preferential Allotment of Warrants', link: '/investor-info/preferential-allotment-of-warrants' },
                            { name: 'Material Contracts', link: '/investor-info/material-contracts' },
                            { name: 'Material Documents', link: '/investor-info/material-documents' },
                            { name: 'Investor Analyst Meet', link: '/investor-info/investor-analyst-meet' },
                            { name: 'Annual Reports', link: '/investor-info/annual-reports' },
                            { name: 'Notice of Meetings', link: '/investor-info/notice-of-meetings' },
                            { name: 'Dividend', link: '/investor-info/dividend' },
                          ].map((investor, index) => (
                            <li key={index}><Link to={investor.link} className="sub-nav-link text-white">{investor.name}</Link></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <Link to="/ipo" className="mb-menu-link text-display-1">
                      <span className="text">IPO</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="has-sub-menu">
                      <a href="#dropdown-menu-resource" className="mb-menu-link text-display-1 collapsed" data-bs-toggle="collapse"
                        aria-expanded="false" aria-controls="dropdown-menu-resource">
                        <span className="text">Resource</span>
                      </a>
                      <div id="dropdown-menu-resource" className="collapse" data-bs-parent="#mobile-menu">
                        <ul className="sub-nav-menu">
                          {[
                            { name: 'Blog', link: '/resource/blog' },
                            { name: 'News', link: '/resource/news' },
                            { name: 'Press', link: '/resource/press' },
                            { name: 'Media', link: '/resource/media' },
                            { name: 'Video', link: '/resource/video' },
                          ].map((resource, index) => (
                            <li key={index}><Link to={resource.link} className="sub-nav-link text-white">{resource.name}</Link></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <Link to="#" className="mb-menu-link text-display-1">
                      <span className="text">Careers</span>
                    </Link>
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
            <div className="canvas_foot" style={{ marginTop: 'auto', padding: '30px 0', borderTop: '1px solid #f3f4f6' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <a href="mailto:info@virtualgalaxy.com" style={{ color: '#374151', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>info@virtualgalaxy.com</a>
                <div style={{ display: 'flex', gap: '15px' }}>
                  {['linkedin-in', 'instagram', 'twitter'].map((icon, i) => (
                    <a key={i} href="#" style={{ color: '#ff2d15', fontSize: '18px' }}>
                      <i className={`icon icon-${icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
