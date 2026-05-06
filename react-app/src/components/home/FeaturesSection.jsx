import React from 'react';

function FeaturesSection() {
  return (
    <div className="section-features section-spacing-grouped">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-5 col-lg-6">
            <div className="col-left">
              <div className="heading-section mb-64">
                <div className="heading-sub fw-semibold effectFade fadeUp">Features Capabilities</div>
                <div className="heading-title text-gradient-3 effectFade fadeRotateX">Unleash the full <br /> potential of AI</div>
              </div>
              <div className="features-list">
                <div className="list-item flex-wrap effectFade fadeUp">
                  <div className="d-flex gap-8 align-items-center">
                    <i className="icon icon-clipboard-list-check-solid fs-20"></i>
                    <h6 className="fw-semibold name">Audit & Evals</h6>
                  </div>
                  <p className="text fs-18 fw-semibold">Monitor outputs, catch drift, and trace reasoning in a single dashboard.</p>
                </div>
                <div className="list-item flex-wrap effectFade fadeUp">
                  <div className="d-flex gap-8 align-items-center">
                    <i className="icon icon-puzzle-piece-solid fs-20"></i>
                    <h6 className="fw-semibold name">Easy Integrations</h6>
                  </div>
                  <p className="text fs-18 fw-semibold">Native connectors for Slack, Zendesk, Salesforce, Postgres, and 40+ more.</p>
                </div>
                <div className="list-item flex-wrap effectFade fadeUp">
                  <div className="d-flex gap-8 align-items-center">
                    <i className="icon icon-users-solid fs-20"></i>
                    <h6 className="fw-semibold name">Access Controls</h6>
                  </div>
                  <p className="text fs-18 fw-semibold">Role-based permissions (RBAC) ensure users only see the data they're allowed to.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="col-right">
              <div className="image bg-features border-outline effectFade fadeRotateX">
                <img src="/assets/images/section/features-1.jpg" alt="" />
                <div className="card-box-1 border-outline effectFade fadeUp" data-delay="0.1">
                  <i className="icon icon-bolt-solid fs-20 text-brand"></i>
                  <h6 className="fw-semibold">10x Speed</h6>
                  <div className="text-body-3 fw-semibold">Automate workflows <br /> instantly.</div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="bg-features border-outline py-40 border-radius-24 mt-20 effectFade fadeUp">
                    <h3 className="heading fw-semibold">Integration</h3>
                    <p className="fs-18">Ready to sync with your tools.</p>
                    <div className="list-tech mt-20 d-flex gap-16 justify-content-center">
                      <div className="tech-item style-circle">
                        <img src="/assets/images/partner/partner-active-1.svg" alt="" />
                      </div>
                      <div className="tech-item style-circle">
                        <img src="/assets/images/partner/partner-active-2.svg" alt="" />
                      </div>
                      <div className="tech-item style-circle">
                        <img src="/assets/images/partner/partner-active-3.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="bg-features border-outline py-40 border-radius-24 mt-20 effectFade fadeUp" data-delay="0.1">
                    <h3 className="heading fw-semibold">Access</h3>
                    <p className="fs-18">Granular permissions built in.</p>
                    <div className="col-lg-4 mx-auto">
                      <div className="side-line-wrap">
                        <div className="link-break-line left">
                          <div className="link-break-line">
                            <span className="item top"></span>
                            <span className="item bottom"></span>
                          </div>
                        </div>
                        <div className="link-break-center">
                          <span className="simu-electric left"></span>
                          <span className="simu-electric right"></span>
                        </div>
                        <div className="link-break-line right">
                          <span className="item top"></span>
                          <span className="item bottom"></span>
                        </div>
                      </div>
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

export default FeaturesSection;
