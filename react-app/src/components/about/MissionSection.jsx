import React from 'react';

function MissionSection() {
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
                <a href="/contact" className="tf-btn">
                  Start a Project
                </a>
              </div>
              <img className="effectFade fadeRotateX" src="/assets/images/item/earth.png" alt="" />
            </div>
          </div>
          <div className="col-xxl-5 col-lg-6">
            <div className="mission-box mb-24">
              <h4 className="title fw-semibold effectFade fadeUp">Our Mission</h4>
              <div className="line"></div>
              <p className="text effectFade fadeUp">
                Based in Montréal, Canada, we build human-centered AI for production. Our mission is to create intelligent systems that empower people and organizations. By uniting research, design, and engineering, we deliver scalable and reliable AI solutions—technology that’s practical, trustworthy, and designed to make a meaningful impact in the real world.
              </p>
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

export default MissionSection;
