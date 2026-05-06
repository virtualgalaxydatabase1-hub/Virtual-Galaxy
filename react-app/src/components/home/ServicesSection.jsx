import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ServicesSection() {
  const [activeImage, setActiveImage] = useState("/assets/images/section/service-1.jpg");
  const [isFading, setIsFading] = useState(false);

  // Preload images
  useEffect(() => {
    const images = [
      "/assets/images/section/service-1.jpg",
      "/assets/images/section/service-2.jpg",
      "/assets/images/section/service-3.jpg",
      "/assets/images/section/service-4.jpg"
    ];
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleMouseEnter = (e) => {
    const actionBtn = e.currentTarget.querySelector('[data-img]');
    if (actionBtn) {
      const newImg = actionBtn.getAttribute('data-img');
      if (newImg && newImg !== activeImage && !isFading) {
        setIsFading(true);
        setTimeout(() => {
          setActiveImage(newImg);
          setIsFading(false);
        }, 200); // Wait for fade out
      }
    }
  };

  return (
    <div id="services" className="section-services section-spacing-grouped">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xxl-4 col-lg-6">
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="col-left">
                <div className="heading-section mb-48">
                  <div className="heading-sub fw-semibold effectFade fadeUp">Why choose us?</div>
                  <div className="heading-title text-gradient-3 effectFade fadeRotateX">End-to-End <br /> AI Services</div>
                </div>
                <p className="effectFade fadeUp mb-48">Serving Clients With Apt
                  Solutions Since 1997.</p>
                
                {/* Dynamic Image Container */}
                <div className="dynamic-image-container effectFade fadeUp">
                  <img 
                    src={activeImage} 
                    alt="Active Service" 
                    style={{ 
                      width: '100%', 
                      height: 'auto',
                      opacity: isFading ? 0 : 1, 
                      transform: isFading ? 'scale(0.98)' : 'scale(1)',
                      transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
                      objectFit: 'cover',
                      borderRadius: '24px'
                    }} 
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-6">
            <div className="accordion-faq_list" id="accordion-services">
              <div className="accordion-faq_item effectFade fadeUp" role="presentation" onMouseEnter={handleMouseEnter}>
                <div className="accordion-action services-image-btn active-img" data-img="/assets/images/section/service-1.jpg" data-bs-target="#faq-1" role="button"
                  aria-controls="faq-1" aria-expanded="true">
                  <div className="accordion-title">
                    Domain Expertise <br />
                    <div className="text-body-1 num">(01)</div>
                  </div>
                </div>
                <div id="faq-1" className="collapse show" data-bs-parent="#accordion-services">
                  <div className="accordion-content">
                    <div className="text-body-3 text-neutral-300 text">VGIL has been a pioneer in the ever-evolving technology space in the verticals of Banking & Finance, eGovernance, ERP & DC / DR Solutions.</div>
                    <div className="list-tags">
                      <a href="#" className="tags-item fw-semibold">Pioneers in Technology Innovation</a>
                      <a href="#" className="tags-item fw-semibold">Reliable & Scalable Systems</a>
                      <a href="#" className="tags-item fw-semibold">Expertise Across Key Verticals </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-faq_item effectFade fadeUp" role="presentation" onMouseEnter={handleMouseEnter}>
                <div className="accordion-action services-image-btn collapsed" data-img="/assets/images/section/service-2.jpg" data-bs-target="#faq-2" role="button"
                  aria-controls="faq-2" aria-expanded="false">
                  <div className="accordion-title">
                    Supporting 150+ Firms <br />
                    <div className="text-body-1 num">(02)</div>
                  </div>
                </div>
                <div id="faq-2" className="collapse" data-bs-parent="#accordion-services">
                  <div className="accordion-content">
                    <div className="text-body-3 text-neutral-300 text">Support multiple types of organizations, including Bank Branches, Manufacturing Setups, and Business Houses..</div>
                    <div className="list-tags">
                      <a href="#" className="tags-item fw-semibold">Banking Solutions</a>
                      <a href="#" className="tags-item fw-semibold">Manufacturing Support</a>
                      <a href="#" className="tags-item fw-semibold">Business-Focused Solutionss</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-faq_item effectFade fadeUp" role="presentation" onMouseEnter={handleMouseEnter}>
                <div className="accordion-action services-image-btn collapsed" data-img="/assets/images/section/service-3.jpg" data-bs-target="#faq-3" role="button"
                  aria-controls="faq-3" aria-expanded="false">
                  <div className="accordion-title">
                    350+ Strong Team <br />
                    <div className="text-body-1 num">(03)</div>
                  </div>
                </div>
                <div id="faq-3" className="collapse" data-bs-parent="#accordion-services">
                  <div className="accordion-content">
                    <div className="text-body-3 text-neutral-300 text">Our core strength - our team of dynamic professionals keeps itself constantly upgraded to maintain our edge.</div>
                    <div className="list-tags">
                      <a href="#" className="tags-item fw-semibold">Dynamic & Skilled Team</a>
                      <a href="#" className="tags-item fw-semibold">Maintaining a Competitive Edge</a>
                      <a href="#" className="tags-item fw-semibold">Continuously Upgraded Knowledge</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-faq_item effectFade fadeUp" role="presentation" onMouseEnter={handleMouseEnter}>
                <div className="accordion-action services-image-btn collapsed" data-img="/assets/images/section/service-4.jpg" data-bs-target="#faq-4" role="button"
                  aria-controls="faq-4" aria-expanded="false">
                  <div className="accordion-title">
                    Our Expertise <br />
                    <div className="text-body-1 num">(04)</div>
                  </div>
                </div>
                <div id="faq-4" className="collapse" data-bs-parent="#accordion-services">
                  <div className="accordion-content">
                    <div className="text-body-3 text-neutral-300 text">We build cutting edge technologies for Transaction Automation, Customer Service Delivery, Compliance & Decision Support.</div>
                    <div className="list-tags">
                      <a href="#" className="tags-item fw-semibold">Automate Transactions Seamlessly</a>
                      <a href="#" className="tags-item fw-semibold">Intelligent Insights</a>
                      <a href="#" className="tags-item fw-semibold">Deliver Exceptional Customer Experience</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
