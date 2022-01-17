import React from 'react'
import Link from 'next/link'

export default function WhyArea3() {
    return (
        <section className="why__area grey-bg-5 pt-135 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-7 col-xl-8 col-lg-8">
                     <div className="why__wrapper">
                        <div className="section__title-wrapper section__title-wrapper-3 mb-45 wow fadeInUp" data-wow-delay=".3s">
                           <span className="section__pre-title-img"><img src="/img/icon/title/why.png" alt=""/></span>
                           <h2 className="section__title section__title-3">Why Choose Us Custom Mobile App Development.</h2>
                           <p>Smashing blimey wellies excuse my French cor blimey guvnor do one brolly down the pub bobby cuppa, get stuffed mate cup.</p>
                        </div>
                        <div className="why__counter">
                           <div className="row">
                              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay=".3s">
                                 <div className="why__item text-center white-bg mb-30">
                                    <div className="why__icon mb-15">
                                       <i className="icon_star"></i>
                                    </div>
                                    <div className="why__content">
                                       <h3 className="why__title"> <span className="counter">4.8</span> Stars</h3>
                                       <p>Average Rating</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay=".5s">
                                 <div className="why__item text-center white-bg mb-30">
                                    <div className="why__icon mb-15">
                                       <i className="icon_ribbon"></i>
                                    </div>
                                    <div className="why__content">
                                       <h3 className="why__title"> <span className="counter">438</span>K</h3>
                                       <p>Project</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay=".7s">
                                 <div className="why__item text-center white-bg mb-30">
                                    <div className="why__icon mb-15">
                                       <i className="icon_star"></i>
                                    </div>
                                    <div className="why__content">
                                       <h3 className="why__title"> <span className="counter">357</span> M</h3>
                                       <p>Download</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 offset-xxl-1 col-xl-4 col-lg-4 col-md-6">
                     <div className="why__features white-bg wow fadeInUp" data-wow-delay=".9s">
                        <ul>
                           <li>Our Experience 14+ Years</li>
                           <li>Our Team Members 100+</li>
                           <li>Free Support 2 years</li>
                           <li>Agile Development</li>
                           <li>Transparent Process</li>
                        </ul>
                        <Link href="/contact"><a className="w-btn w-btn-purple w-100"> contact us</a></Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
