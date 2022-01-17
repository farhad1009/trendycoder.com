import React from 'react'
import Link from 'next/link'
export default function HeroArea4() {
    return (
        <section className="hero__area hero__height-4 grey-bg-9 p-relative d-flex align-items-center">
            <div className="hero__shape-4">
               <img className="smile" src="/img/icon/hero/home-4/smile.png" alt=""/>
               <img className="smile-2" src="/img/icon/hero/home-4/smile-2.png" alt=""/>
               <img className="cross-1" src="/img/icon/hero/home-4/cross-1.png" alt=""/>
               <img className="cross-2" src="/img/icon/hero/home-4/cross-2.png" alt=""/>
               <img className="cross-3" src="/img/icon/hero/home-4/cross-3.png" alt=""/>
               <img className="dot-1" src="/img/icon/hero/home-4/dot-1.png" alt=""/>
               <img className="dot-2" src="/img/icon/hero/home-4/dot-2.png" alt=""/>
               <img className="dot-3" src="/img/icon/hero/home-4/dot-3.png" alt=""/>
            </div>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xxl-7 col-xl-7 col-lg-6">
                     <div className="hero__content-4 pr-70">
                        <h3 className="hero__title-4 wow fadeInUp" data-wow-delay=".3s"> <span>Chat</span> Connect with Customers.</h3>
                        <p className="wow fadeInUp" data-wow-delay=".5s">Next time your customer faces an issue, they will contact you instead competitor  It has an auto-message feature.</p>

                        <div className="hero__features d-sm-flex mb-25 wow fadeInUp" data-wow-delay=".7s">
                           <div className="hero__features-item ">
                              <ul>
                                 <li>Connect Customer</li>
                                 <li>Product support</li>
                              </ul>
                           </div>
                           <div className="hero__features-item">
                              <ul>
                                 <li>Free trial</li>
                                 <li>Website chat</li>
                              </ul>
                           </div>
                        </div>

                        <div className="hero__btn-4">
                           {/* <Link href="/contact"><a className="w-btn-round mr-25 wow fadeInUp" data-wow-delay=".9s">Start Free Trial</a></Link>
                           <Link href="/contact"><a className="w-btn-round w-btn-round-2 wow fadeInUp" data-wow-delay="1.2s">Demo Request</a></Link> */}
                        </div>

                     </div>
                  </div>
                  <div className="col-xxl-5 col-xl-5 col-lg-6">
                     <div className="hero__thumb-4-wrapper">
                        <div className="hero__thumb-4 p-relative">
                           <img className="girl" src="/img/hero/home-4/girl.png" alt=""/>
                           <img className="flower" src="/img/hero/home-4/flower.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
