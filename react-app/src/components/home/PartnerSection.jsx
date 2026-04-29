import React from 'react';

function PartnerSection() {
  return (
    <div className="section-partner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="partner-wrap">
              <p className="text-secondary text fw-semibold">Trusted by 100+ <br /> top-tier brands</p>
              <div className="infiniteSlide_tech_main d-grid">
                <div className="infiniteSlide infiniteSlide_partner" data-clone="5">
                  <img src="/assets/images/partner/partner-1.svg" alt="" />
                  <img src="/assets/images/partner/partner-2.svg" alt="" />
                  <img src="/assets/images/partner/partner-3.svg" alt="" />
                  <img src="/assets/images/partner/partner-4.svg" alt="" />
                  <img src="/assets/images/partner/partner-5.svg" alt="" />
                  <img src="/assets/images/partner/partner-6.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerSection;
