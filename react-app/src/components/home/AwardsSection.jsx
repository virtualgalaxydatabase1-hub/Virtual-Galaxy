import React from 'react';

function AwardsSection() {
  return (
    <div className="section-awards section-spacing">
      <div className="container">
        <div className="heading-section center mb-48">
          <div className="heading-sub fw-semibold style-1 mb-0 effectFade fadeUp">Awards</div>
        </div>
        <div className="d-grid gap-16">
          <div className="awards-item effectFade fadeUp">
            <div className="image">
              <img src="/assets/images/partner/partner-7.svg" alt="" />
            </div>
            <div className="title text-body-1 text-white">Innovation in AI</div>
            <div className="text text-body-1 text-white">Underwriting Risk Copilot (Fintech)</div>
            <div className="year text-body-1 text-neutral-400">/ 2025</div>
          </div>
          <div className="awards-item effectFade fadeUp" data-delay="0.1">
            <div className="image">
              <img src="/assets/images/partner/partner-8.svg" alt="" />
            </div>
            <div className="title text-body-1 text-white">Best AI Product Design</div>
            <div className="text text-body-1 text-white">Support Copilot (SaaS)</div>
            <div className="year text-body-1 text-neutral-400">/ 2025</div>
          </div>
          <div className="awards-item effectFade fadeUp" data-delay="0.2">
            <div className="image">
              <img src="/assets/images/partner/partner-9.svg" alt="" />
            </div>
            <div className="title text-body-1 text-white">Data & AI Excellence</div>
            <div className="text text-body-1 text-white">Clinical Note Summarizer (Healthcare)</div>
            <div className="year text-body-1 text-neutral-400">/ 2024</div>
          </div>
          <div className="awards-item effectFade fadeUp" data-delay="0.3">
            <div className="image">
              <img src="/assets/images/partner/partner-10.svg" alt="" />
            </div>
            <div className="title text-body-1 text-white">Innovation in AI</div>
            <div className="text text-body-1 text-white">Underwriting Risk Copilot (Fintech)</div>
            <div className="year text-body-1 text-neutral-400">/ 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwardsSection;
