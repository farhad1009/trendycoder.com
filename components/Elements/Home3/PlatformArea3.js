import React from 'react'
import Link from 'next/link'

export default function PlatformArea3() {
    return (
        <section className="platform__area pt-30 pb-110 grey-bg-5">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-6 offset-xxl-3">
                     <div className="section__title-wrapper section__title-wrapper-3 text-center mb-45 wow fadeInUp" data-wow-delay=".3s">
                        <span className="section__pre-title-img"><img src="/img/icon/title/platform.png" alt=""/></span>
                        <h2 className="section__title section__title-3">App Download Platfrom</h2>
                        <p>Elizabeth Richard bleeder say do one gosh bite your arm off cuppa.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                     <div className="platform__item white-bg mb-30 text-center">
                        <h3 className="platform__title">Download <br/> from Play Store</h3>
                        <p>Standard  guvnor gosh cras brilliant.</p>

                        <div className="platform__name">
                           <Link href="#"><a className="app-store">
                              <div className="platform__name-wrapper d-flex align-items-center">
                                 <div className="platform__name-icon">
                                    <i className="fab fa-google-play"></i>
                                 </div>
                                 <div className="platform__name-content">
                                    <h5>Available on the</h5>
                                    <span> App Store</span>
                                 </div>
                              </div>
                           </a></Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                     <div className="platform__item white-bg mb-30 text-center">
                        <h3 className="platform__title">Download <br/> from Apple Store</h3>
                        <p>Standard  guvnor gosh cras brilliant.</p>

                        <div className="platform__name">
                           <Link href="#"><a className="apple-store">
                              <div className="platform__name-wrapper d-flex align-items-center">
                                 <div className="platform__name-icon">
                                    <i className="fab fa-apple"></i>
                                 </div>
                                 <div className="platform__name-content">
                                    <h5>Available on the</h5>
                                    <span>Apple Store</span>
                                 </div>
                              </div>
                           </a></Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                     <div className="platform__item white-bg mb-30 text-center">
                        <h3 className="platform__title">Download <br/> from Windows</h3>
                        <p>Standard  guvnor gosh cras brilliant.</p>

                        <div className="platform__name">
                           <Link href="#"><a className="windows">
                              <div className="platform__name-wrapper d-flex align-items-center">
                                 <div className="platform__name-icon">
                                    <i className="fab fa-windows"></i>
                                 </div>
                                 <div className="platform__name-content">
                                    <h5>Available on the</h5>
                                    <span>Windows</span>
                                 </div>
                              </div>
                           </a></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
