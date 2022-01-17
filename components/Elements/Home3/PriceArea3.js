import React from 'react'
import Link from 'next/link'

export default function PriceArea3() {
    return (
        <section className="price__area pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
                     <div className="section__title-wrapper section__title-wrapper-3 section-padding-p-0 text-center mb-65 wow fadeInUp" data-wow-delay=".3s">
                        <span className="section__pre-title-img"><img src="/img/icon/title/price.png" alt=""/></span>
                        <h2 className="section__title section__title-3">Why Choose Us Our Premium Features on Pricing  Plan?</h2>
                        <p>Say chap skive off the little rotter gosh he erised it matie.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                     <div className="price__item-3 white-bg mb-30 text-center fix">
                        <div className="price__heading free">
                           <h4>Free</h4>
                        </div>
                        <div className="price__body">
                           <div className="price__icon mb-15">
                              <img src="/img/icon/pricing/home-3/pricing-1.png" alt=""/>
                           </div>
                           <div className="price__tag-3">
                              <h3>$00 <span>monthly</span></h3>
                           </div>
                           <div className="price__features-2">
                              <ul>
                                 <li>1GB Cloud Storage</li>
                                 <li>Share on Cloud</li>
                                 <li>Private & Team Folders</li>
                                 <li>30GB Cloud Storage</li>
                              </ul>
                           </div>
                           <div className="price__btn">
                              <Link href="/contact"><a className="w-btn w-btn-10">buy package</a></Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                     <div className="price__item-3 white-bg mb-30 text-center fix">
                        <div className="price__heading basic">
                           <h4>Basic</h4>
                        </div>
                        <div className="price__body">
                           <div className="price__icon mb-15">
                              <img src="/img/icon/pricing/home-3/pricing-2.png" alt=""/>
                           </div>
                           <div className="price__tag-3">
                              <h3>$430 <span>monthly</span></h3>
                           </div>
                           <div className="price__features-2">
                              <ul>
                                 <li>1GB Cloud Storage</li>
                                 <li>Share on Cloud</li>
                                 <li>Private & Team Folders</li>
                                 <li>30GB Cloud Storage</li>
                              </ul>
                           </div>
                           <div className="price__btn">
                              <Link href="/contact"><a className="w-btn w-btn-10">buy package</a></Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                     <div className="price__item-3 white-bg mb-30 text-center fix">
                        <div className="price__heading premium">
                           <h4>Premium</h4>
                        </div>
                        <div className="price__body">
                           <div className="price__icon mb-15">
                              <img src="/img/icon/pricing/home-3/pricing-3.png" alt=""/>
                           </div>
                           <div className="price__tag-3">
                              <h3>$780 <span>yearly</span></h3>
                           </div>
                           <div className="price__features-2">
                              <ul>
                                 <li>1GB Cloud Storage</li>
                                 <li>Share on Cloud</li>
                                 <li>Private & Team Folders</li>
                                 <li>30GB Cloud Storage</li>
                              </ul>
                           </div>
                           <div className="price__btn">
                              <Link href="/contact"><a className="w-btn w-btn-10">buy package</a></Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
