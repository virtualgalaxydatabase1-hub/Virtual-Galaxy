import React from 'react';

function TestimonialsSection() {
  return (
    <div className="section-testimonials flat-spacing pt-0">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="col-left">
              <div className="heading-section mb-48">
                <div className="heading-sub fw-semibold style-1 effectFade fadeUp">Testimonials</div>
                <div className="heading-title text-white effectFade fadeRotateX">What Our <br /> Clients Says</div>
              </div>
              <div className="swiper-testimonial_wrap effectFade fadeUp">
                <div dir="ltr" className="swiper tf-swiper swiper-testimonial">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div>
                        <div className="top-icon d-flex gap-4">
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                        </div>
                        <div className="text-body-1 text-white desc">
                          We shipped our first copilot in 7 weeks and cut support tickets by 31%. The eval dashboards made every decision obvious.
                        </div>
                        <div className="cite">
                          <img className="line-left" src="/assets/images/item/line-1.png" alt="" />
                          <div className="name text-body-3 text-neutral-400 fw-semibold">Elena Ruiz</div>
                          <div className="line"></div>
                          <div className="sub text-body-3 text-neutral-400">Cantos SaaS’s VP Product</div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <div className="top-icon">
                          <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9375 20V10.3597C12.9375 7.72182 13.824 5.51559 15.5969 3.74101C17.4177 1.91847 19.8854 0.671463 23 0V6.40288C21.8021 6.78657 21.0115 7.26619 20.6281 7.84173C20.2448 8.3693 20.0292 9.04077 19.9813 9.85612H23V20H12.9375ZM0 20V10.3597C0 7.72182 0.886459 5.51559 2.65938 3.74101C4.48021 1.91847 6.94792 0.671463 10.0625 0V6.40288C8.9125 6.78657 8.12187 7.26619 7.69062 7.84173C7.30729 8.3693 7.09167 9.04077 7.04375 9.85612H10.0625V20H0Z" fill="#FD3A25"/>
                          </svg>
                        </div>
                        <div className="text-body-1 text-white desc">
                          SSO/SAML and RBAC landed smoothly. Latency stayed &lt;300 ms on p95—huge win for our agents.
                        </div>
                        <div className="cite">
                          <img className="line-left" src="/assets/images/item/line-1.png" alt="" />
                          <div className="name text-body-3 text-neutral-400 fw-semibold">Marcus Tan</div>
                          <div className="line"></div>
                          <div className="sub text-body-3 text-neutral-400">VectorPay’s CTO</div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div>
                        <div className="top-icon">
                          <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9375 20V10.3597C12.9375 7.72182 13.824 5.51559 15.5969 3.74101C17.4177 1.91847 19.8854 0.671463 23 0V6.40288C21.8021 6.78657 21.0115 7.26619 20.6281 7.84173C20.2448 8.3693 20.0292 9.04077 19.9813 9.85612H23V20H12.9375ZM0 20V10.3597C0 7.72182 0.886459 5.51559 2.65938 3.74101C4.48021 1.91847 6.94792 0.671463 10.0625 0V6.40288C8.9125 6.78657 8.12187 7.26619 7.69062 7.84173C7.30729 8.3693 7.09167 9.04077 7.04375 9.85612H10.0625V20H0Z" fill="#FD3A25"/>
                          </svg>
                        </div>
                        <div className="text-body-1 text-white desc">
                          The best partner for agentic work. Multi-step planning, tool use, and audit trails—done right the first time.
                        </div>
                        <div className="cite">
                          <img className="line-left" src="/assets/images/item/line-1.png" alt="" />
                          <div className="name text-body-3 text-neutral-400 fw-semibold">David Kim</div>
                          <div className="line"></div>
                          <div className="sub text-body-3 text-neutral-400">Northway's Ecommerce Director</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-slider">
                  <div className="group-btn-slider">
                    <div className="btn-slider nav-prev-swiper testimonials-prev">
                      <i className="icon icon-angle-left-solid"></i>
                    </div>
                    <div className="btn-slider nav-next-swiper testimonials-next">
                      <i className="icon icon-angle-right-solid"></i>
                    </div>
                  </div>
                  <div className="testimonials-pagination"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div dir="ltr" className="swiper sw-main-image effectFade fadeUp">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-image">
                    <img src="/assets/images/section/tes-1.jpg" alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-image">
                    <img src="/assets/images/section/tes-2.jpg" alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-image">
                    <img src="/assets/images/section/tes-3.jpg" alt="" />
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

export default TestimonialsSection;
