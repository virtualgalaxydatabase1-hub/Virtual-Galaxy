import React from 'react';
import { Link } from 'react-router-dom';

function ServicesSection() {
  return (
    <div id="services" className="section-services flat-spacing pb-0" style={{ paddingBottom: '20px' }}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xxl-4 col-lg-6">
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="col-left">
                <div className="heading-section mb-48">
                  <div className="heading-sub fw-semibold effectFade fadeUp">Services</div>
                  <div className="heading-title text-gradient-3 effectFade fadeRotateX">End-to-End <br /> AI Services</div>
                </div>
                <p className="effectFade fadeUp">We turn ambiguous AI ideas into production features your users trust—combining strategy, design, engineering, and rigorous evaluation.</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-6">
            <div className="accordion-faq_list" id="accordion-services">
              <div className="accordion-faq_item effectFade fadeUp" role="presentation">
                <div className="accordion-action services-image-btn active-img" data-img="/assets/images/section/service-1.jpg" data-bs-target="#faq-1" role="button"
                  data-bs-toggle="collapse" aria-controls="faq-1" aria-expanded="true">
                  <div className="accordion-title">
                    AI Strategy <br /> & Mapping
                    <div className="text-body-1 num">(01)</div>
                  </div>
                </div>
                <div id="faq-1" className="collapse show" data-bs-parent="#accordion-services">
                  <div className="accordion-content">
                    <div className="text-body-3 text-neutral-300 text">Identify high-ROI use cases and define a realistic, measurable AI roadmap.</div>
                    <div className="list-tags">
                      <a href="#" className="tags-item fw-semibold">Stakeholder discovery</a>
                      <a href="#" className="tags-item fw-semibold">Value model & KPI definition</a>
                      <a href="#" className="tags-item fw-semibold">Data readiness assessment</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-faq_item effectFade fadeUp" role="presentation">
                <div className="accordion-action services-image-btn collapsed" data-img="/assets/images/section/service-2.jpg" data-bs-target="#faq-2" role="button"
                  data-bs-toggle="collapse" aria-controls="faq-2" aria-expanded="false">
                  <div className="accordion-title">
                    AI UX <br /> & Product Design
                    <div className="text-body-1 num">(02)</div>
                  </div>
                </div>
                <div id="faq-2" className="collapse" data-bs-parent="#accordion-services">
                  <div className="accordion-content">
                    <div className="text-body-3 text-neutral-300 text">Human-centered flows, prompts, and interfaces that build trust and adoption.</div>
                    <div className="list-tags">
                      <a href="#" className="tags-item fw-semibold">Prototype flows</a>
                      <a href="#" className="tags-item fw-semibold">Prompt UX patterns</a>
                      <a href="#" className="tags-item fw-semibold">Usability testing with real users</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-faq_item effectFade fadeUp" role="presentation">
                <div className="accordion-action services-image-btn collapsed" data-img="/assets/images/section/service-3.jpg" data-bs-target="#faq-3" role="button"
                  data-bs-toggle="collapse" aria-controls="faq-3" aria-expanded="false">
                  <div className="accordion-title">
                    LLM / Agent <br /> Development
                    <div className="text-body-1 num">(03)</div>
                  </div>
                </div>
                <div id="faq-3" className="collapse" data-bs-parent="#accordion-services">
                  <div className="accordion-content">
                    <div className="text-body-3 text-neutral-300 text">Domain-specific copilots and agents that plan, execute, and report.</div>
                    <div className="list-tags">
                      <a href="#" className="tags-item fw-semibold">Multi-step planning</a>
                      <a href="#" className="tags-item fw-semibold">Function calling & toolchains</a>
                      <a href="#" className="tags-item fw-semibold">Guardrails and audit trails</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-faq_item effectFade fadeUp" role="presentation">
                <div className="accordion-action services-image-btn collapsed" data-img="/assets/images/section/service-4.jpg" data-bs-target="#faq-4" role="button"
                  data-bs-toggle="collapse" aria-controls="faq-4" aria-expanded="false">
                  <div className="accordion-title">
                    Data Engineering <br /> & Pipelines
                    <div className="text-body-1 num">(04)</div>
                  </div>
                </div>
                <div id="faq-4" className="collapse" data-bs-parent="#accordion-services">
                  <div className="accordion-content">
                    <div className="text-body-3 text-neutral-300 text">Reliable data flows from ingestion to features, built for scale and cost control.</div>
                    <div className="list-tags">
                      <a href="#" className="tags-item fw-semibold">Data cleaning & chunking</a>
                      <a href="#" className="tags-item fw-semibold">Hybrid search</a>
                      <a href="#" className="tags-item fw-semibold">Freshness, citations, and re-ranking</a>
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
