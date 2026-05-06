import vgLogo from '../../assets/home/ownwer-img/vg-logo-2.png';

function FeaturesSection() {
  return (
    <div className="section-features flat-spacing pt-0">
      <div className="container">
        <div className="heading-section center mb-64">
          <div className="heading-sub fw-semibold effectFade fadeUp">Features</div>
          <div className="heading-title text-gradient-3 effectFade fadeRotateX">All Features in One</div>
        </div>
      </div>
      <div className="position-relative">
        <div className="container z-5">
          <div className="row g-4 align-items-center">
            {/* Left Column */}
            <div className="col-lg-4 d-flex flex-column gap-4">
              {[
                { icon: 'robot-solid', title: 'Agent-Powered Workflows', desc: 'Turn repetitive tasks into autonomous flows—agents plan, execute, and report with guardrails.' },
                { icon: 'clipboard-check-solid', title: 'Eval-First Quality', desc: 'Measure accuracy, latency, safety, and cost from day one. Reliable and predictable.' },
                { icon: 'book-solid', title: 'Private Knowledge RAG', desc: 'Make your docs, tickets, and wikis instantly useful with retrieval augmented generation.' },
              ].map((item, i) => (
                <div key={i} className="features-item effectFade fadeUp">
                  <div className="product-icon-box">
                    <i className={`icon icon-${item.icon}`} style={{ fontSize: '24px' }}></i>
                  </div>
                  <h6 className="title fw-bold mb-3">{item.title}</h6>
                  <p className="text-secondary mb-0" style={{ fontSize: '14px' }}>{item.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Center Logo */}
            <div className="col-lg-4 d-flex justify-content-center px-lg-4 my-4 my-lg-0">
              <div className="center-logo-box effectFade fadeUp">
                <img src={vgLogo} alt="Virtual Galaxy Logo" style={{ maxWidth: '200px', width: '100%', height: 'auto' }} />
              </div>
            </div>
            
            {/* Right Column */}
            <div className="col-lg-4 d-flex flex-column gap-4">
              {[
                { icon: 'user-check-solid', title: 'Human-Centered AI UX', desc: 'Interfaces, prompts, and error states designed for trust and adoption—so the smart thing is obvious.' },
                { icon: 'shield-alt-solid', title: 'Secure by Design', desc: 'PII handling, SSO/SAML, secrets management, and compliance workflows—ship AI that’s safe.' },
                { icon: 'plug-solid', title: 'Seamless Integrations', desc: 'Plug into your stack (CRM, helpdesk, ERP, data warehouse) with webhooks and APIs.' },
              ].map((item, i) => (
                <div key={i} className="features-item effectFade fadeUp">
                  <div className="product-icon-box">
                    <i className={`icon icon-${item.icon}`} style={{ fontSize: '24px' }}></i>
                  </div>
                  <h6 className="title fw-bold mb-3">{item.title}</h6>
                  <p className="text-secondary mb-0" style={{ fontSize: '14px' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="side-line-main d-none d-lg-block wow fadeIn">
          <div className="container">
            <div className="row">
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
  );
}

export default FeaturesSection;
