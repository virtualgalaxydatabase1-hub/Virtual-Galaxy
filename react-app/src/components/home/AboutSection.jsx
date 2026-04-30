import React from 'react';
import { Link } from 'react-router-dom';
import earthImg from '../../assets/earth.png';

function AboutSection() {
  return (
    <div className="section-about-us flat-spacing" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <div className="heading-sub fw-semibold effectFade fadeUp">About Us</div>
              <div className="heading-title text-gradient-2 effectFade fadeRotateX">Human-Centered AI, <br /> Built for Production</div>
            </div>
          </div>
          <div className="col-xxl-7 col-lg-6 lg-mb-24">
            <div className="col-left">
              <div className="position-relative z-5">
                <div className="sub text-white">
                  <span className="dot"></span>
                  Available for worldwide project
                </div>
                <h5 className="title fw-semibold text-white">Based in <span className="text-brand">Montréal, Canada</span></h5>
                <Link to="/contact" className="tf-btn">
                  Start a Project
                </Link>
              </div>
              <img className="effectFade fadeRotateX" src={earthImg} alt="Earth" />
            </div>
          </div>
          <div className="col-xxl-5 col-lg-6">
            <div className="review-box mb-24">
              <div className="desc fw-semibold text-body-1">Trusted by 120+ clients across 4 industries - <br /> shipping AI from idea to production in 8–10 weeks</div>
              <div className="d-flex justify-content-between flex-wrap align-items-end gap-12">
                <div>
                  <div className="d-flex gap-4 text mb-10">
                    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6792 18.3019L18.1887 16.9057L20.4906 24L12.6792 18.3019ZM25.3585 9.13208H15.6604L12.6792 0L9.69811 9.13208H0L7.84906 14.7925L4.86792 23.9245L12.717 18.2641L17.5472 14.7925L25.3585 9.13208Z" fill="#219653"/>
                    </svg>
                    Trustpilot
                  </div>
                  <div className="d-flex gap-2">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <svg key={item} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" fill="#3F3F46"/>
                        <path d="M11.9996 16.4114L15.6496 15.4341L17.1746 20.4001L11.9996 16.4114ZM20.3996 9.99255H13.9746L11.9996 3.6001L10.0246 9.99255H3.59961L8.79961 13.9548L6.82461 20.3473L12.0246 16.385L15.2246 13.9548L20.3996 9.99255Z" fill="white"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="counter text-neutral-200">
                  <span className="number" data-speed="1500" data-to="120" data-inviewport="yes">10</span><span>+</span>
                </div>
              </div>
            </div>
            <div className="box-quotes effectFade fadeRotateX">
              <div className="image ">
                <img src="/assets/images/section/quotes-1.jpg" alt="" />
              </div>
              <div className="content">
                <div className="icon mb-8">
                  <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9375 20V10.3597C12.9375 7.72182 13.824 5.51559 15.5969 3.74101C17.4177 1.91847 19.8854 0.671463 23 0V6.40288C21.8021 6.78657 21.0115 7.26619 20.6281 7.84173C20.2448 8.3693 20.0292 9.04077 19.9813 9.85612H23V20H12.9375ZM0 20V10.3597C0 7.72182 0.886459 5.51559 2.65938 3.74101C4.48021 1.91847 6.94792 0.671463 10.0625 0V6.40288C8.9125 6.78657 8.12187 7.26619 7.69062 7.84173C7.30729 8.3693 7.09167 9.04077 7.04375 9.85612H10.0625V20H0Z" fill="#E4E4E7"/>
                  </svg>
                </div>
                <div className="text-body-1 fw-semibold desc">Good AI feels obvious—because the hard work is hidden.</div>
                <div className="cite">
                  <div className="name text-body-3 fw-semibold">Ava Collins</div>
                  <div className="line"></div>
                  <div className="sub text-body-3">Aigocy’s Design Lead</div>
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
