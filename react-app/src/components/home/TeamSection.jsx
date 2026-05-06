import React from 'react';
import { Link } from 'react-router-dom';

// Import local images
import team1Image from '../../assets/home/ownwer-img/avinash-shende-clear-bg.png';
import team2Image from '../../assets/home/ownwer-img/sachin-pande-clear-bg.png';
import logoImage from '../../assets/home/ownwer-img/vg-logo.png';

function TeamSection() {
  return (
    <div className="section-team section-spacing">
      <div className="container">
        <div className="heading-section center mb-64">
          <div className="heading-sub fw-semibold style-1 effectFade fadeUp">Our Founder</div>
          <div className="heading-title text-white effectFade fadeRotateX">
            The Minds Behind <br /> Virtual-Galaxy
          </div>
        </div>

        {/* Precise layout with fixed widths for boxes and gap */}
        <div className="row g-4 align-items-center justify-content-center">
          {/* Left Team Member */}
          <div className="col-lg-5 col-md-6 col-12">
            <div className="team-item effectFade fadeUp">
              <div className="image mb-4">
                <img src={team1Image} alt="Avinash Shende" className="img-fluid" />
              </div>
              <h4 className="name h5 fw-bold mb-2">Mr. Avinash Shende</h4>
              <p className="sub text-secondary mb-4" style={{ fontSize: '15px' }}>Promoter, Chairman, Executive Director & Chief Financial Officer</p>
              <div className="tf-social">
                {['linkedin-in', 'twitter', 'github'].map((icon, i) => (
                  <a key={i} href="#" className="social-item">
                    <i className={`icon icon-${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Center Logo */}
          <div className="col-lg-2 col-12 d-flex justify-content-center my-4 my-lg-0 effectFade fadeUp">
            <div className="center-logo-wrap">
              <img src={logoImage} alt="Logo" className="img-fluid" style={{ maxWidth: '140px' }} />
            </div>
          </div>

          {/* Right Team Member */}
          <div className="col-lg-5 col-md-6 col-12">
            <div className="team-item effectFade fadeUp">
              <div className="image mb-4">
                <img src={team2Image} alt="Sachin Pande" className="img-fluid" />
              </div>
              <h4 className="name h5 fw-bold mb-2">Mr. Sachin Pande</h4>
              <p className="sub text-secondary mb-4" style={{ fontSize: '15px' }}>Promoter, Managing Director & Chief Technology Officer</p>
              <div className="tf-social">
                {['linkedin-in', 'twitter', 'github'].map((icon, i) => (
                  <a key={i} href="#" className="social-item">
                    <i className={`icon icon-${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;