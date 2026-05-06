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
        <div className="d-flex justify-content-center align-items-center flex-nowrap" style={{ maxWidth: '1000px', margin: '0 auto', gap: '20px' }}>

          {/* Left Box - Avinash Shende */}
          <div style={{ flex: '0 0 380px' }}>
            <div className="team-item h-100 effectFade fadeUp">
              <div className="image" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '24px', overflow: 'hidden' }}>
                <img src={team1Image} alt="Avinash Shende" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <a href="#" className="name h6 fw-semibold">Mr. Avinash Shende</a>
              <div className="sub text-body-1">Promoter, Chairman, Executive Director & Chief Financial Officer</div>
              <div className="tf-social justify-content-center">
                <a href="#" className="social-item">
                  <i className="icon icon-twitter-x"></i>
                </a>
                <a href="#" className="social-item">
                  <i className="icon icon-linkedin-in"></i>
                </a>
                <a href="#" className="social-item">
                  <i className="icon icon-github"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Center Logo - Precise Gap */}
          <div style={{ flex: '0 0 140px' }} className="d-flex justify-content-center effectFade fadeUp">
            <div className="center-logo-wrap">
              <img src={logoImage} alt="Logo" className="img-fluid" style={{ maxWidth: '200px' }} />
            </div>
          </div>

          {/* Right Box - Sachin Pande */}
          <div style={{ flex: '0 0 380px' }}>
            <div className="team-item h-100 effectFade fadeUp">
              <div className="image" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '24px', overflow: 'hidden' }}>
                <img src={team2Image} alt="Sachin Pande" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <a href="#" className="name h6 fw-semibold">Mr. Sachin Pande</a>
              <div className="sub text-body-1">Promoter, Managing Director & Chief Technology Officer</div>
              <div className="tf-social justify-content-center">
                <a href="#" className="social-item">
                  <i className="icon icon-twitter-x"></i>
                </a>
                <a href="#" className="social-item">
                  <i className="icon icon-linkedin-in"></i>
                </a>
                <a href="#" className="social-item">
                  <i className="icon icon-github"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TeamSection;