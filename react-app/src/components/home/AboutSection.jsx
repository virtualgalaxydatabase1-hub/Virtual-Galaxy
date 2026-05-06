import React from 'react';
import { Link } from 'react-router-dom';
import earthImg from '../../assets/earth.png';

function AboutSection() {
  return (
    <div className="section-about-us section-spacing-lg" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <div className="heading-sub fw-semibold effectFade fadeUp">What we do?</div>
              <div className="heading-title text-gradient-2 effectFade fadeRotateX">Innovations and <br /> Digital
                Solutions</div>
            </div>
          </div>
          <div className="col-xxl-7 col-lg-6 lg-mb-24">
            <div className="col-left">
              <div className="position-relative z-5">
                <div className="sub text-white">
                  <span className="dot"></span>
                  Available for worldwide project
                </div>
                <h5 className="title fw-semibold text-white">Based in <span className="text-brand">Nagpur & Pune , Maharashtra</span></h5>
                <Link to="/contact" className="tf-btn">
                  Start a Project
                </Link>
              </div>
              <img className="effectFade fadeRotateX" src={earthImg} alt="Earth" />
            </div>
          </div>
          <div className="col-xxl-5 col-lg-6">
            <div className="team-item mb-24" style={{ textAlign: 'left', padding: '30px' }}>
              <div className="desc fw-semibold text-body-1 mb-4">We've provided advanced technology to 5000+ bank branches, manufacturing firms, and businesses for - <br /> transaction automation, customer service, compliance, and decision support.</div>
              <div className="d-flex justify-content-between flex-wrap align-items-center gap-12 pt-4 border-top" style={{ borderColor: '#f3f4f6' }}>
                <div className="review-stats">
                  <div className="d-flex gap-2 mb-2">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <svg key={item} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#ff2d15" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-caption fw-bold">Trusted Globally</div>
                </div>
                <div className="stats-item">
                  <div className="desc fw-semibold text-body-2 mb-0">Employees</div>
                  <div className="counter text-brand h4 fw-bold mb-0">
                    <span className="number" data-speed="1500" data-to="400" data-inviewport="yes">400</span><span>+</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="team-item d-flex flex-column justify-content-center gap-4" style={{ textAlign: 'left', padding: '30px' }}>
              <div className="d-flex justify-content-between align-items-center border-bottom pb-4" style={{ borderColor: '#f3f4f6' }}>
                <div className="desc fw-semibold text-body-1 mb-0">Happy Clients</div>
                <div className="counter text-brand h4 fw-bold mb-0">
                  <span className="number" data-speed="1500" data-to="180" data-inviewport="yes">180</span><span>+</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="desc fw-semibold text-body-1 mb-0">Years in Business</div>
                <div className="counter text-brand h4 fw-bold mb-0">
                  <span className="number" data-speed="1500" data-to="28" data-inviewport="yes">28</span><span>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default AboutSection;
