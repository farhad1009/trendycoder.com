import React from 'react'
import Link from 'next/link'

export default function PricingArea() {
    return (
        <section className="price__area grey-bg pt-105 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-7 col-xl-7 col-lg-8">
                     <div className="section__title-wrapper mb-65 wow fadeInUp" data-wow-delay=".3s">
                        <h2 className="section__title">Software is Easy Prototyping about on the web.</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="price__item white-bg mb-30 transition-3 fix wow fadeInUp" data-wow-delay=".3s">
                        <div className="price__offer mb-15">
                           <span>Free</span>
                        </div>
                        <div className="price__tag mb-15">
                           <h3>$00</h3>
                        </div>
                        <div className="price__text mb-25">
                           <p>Start for free pick a plan later,You can cancel any time.</p>
                        </div>
                        <div className="price__features mb-40">
                           <ul>
                              <li>1GB Cloud Storage</li>
                              <li>Share on Cloud</li>
                              <li>Private & Team Folders</li>
                           </ul>
                        </div>
                        <Link href="/contact"><a className="w-btn w-btn-4 w-100 price__btn">Try for free</a></Link>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="price__item hover__active active white-bg mb-30 transition-3 fix wow fadeInUp" data-wow-delay=".5s">
                        <div className="price__offer mb-15">
                           <span>Basic</span>
                        </div>
                        <div className="price__tag mb-15">
                           <h3>$495<span>Monthly</span></h3>
                        </div>
                        <div className="price__text mb-25">
                           <p>Start for free pick a plan later,You can cancel any time.</p>
                        </div>
                        <div className="price__features mb-40">
                           <ul>
                              <li>Private & Team Folders</li>
                              <li>Comments</li>
                              <li>Embed Share Link</li>
                              <li>Print to PDF</li>
                           </ul>
                        </div>
                        <Link href="/contact"><a className="w-btn w-btn-4 w-100 price__btn">Try for free</a></Link>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="price__item white-bg mb-30 transition-3 fix wow fadeInUp" data-wow-delay=".6s">
                        <div className="price__offer mb-15">
                           <span>Enterprise</span>
                        </div>
                        <div className="price__tag mb-15">
                           <h3>$837<span>Yearly</span></h3>
                        </div>
                        <div className="price__text mb-25">
                           <p>Start for free pick a plan later,You can cancel any time.</p>
                        </div>
                        <div className="price__features mb-40">
                           <ul>
                              <li>Private & Team Folders</li>
                              <li>Comments</li>
                              <li>Embed Share Link</li>
                              <li>Print to PDF</li>
                              <li>Export to PNG</li>
                           </ul>
                        </div>
                        <Link href="/contact"><a className="w-btn w-btn-4 w-100 price__btn">Try for free</a></Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
