import React from 'react'
import Link from 'next/link'

export default function AboutArea3() {
    return (
        <section className="about__area pt-80 pb-30 grey-bg-5">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-10 order-last order-lg-first">
                     <div className="about__wrapper-3">
                        <div className="section__title-wrapper section__title-wrapper-3 mb-25 wow fadeInUp" data-wow-delay=".3s">
                           <span className="section__pre-title-img"><img src="/img/icon/title/about.png" alt=""/></span>
                           <h2 className="section__title section__title-3">Get the Perfect Solution for Your Web.</h2>
                           <p>Starkers pardon you knees up is Elizabeth geeza Why, quain standard  guvnor gosh cras brilliant.</p>
                        </div>
                        <div className="about__content-4">
                           <ul>
                              <li>Instantly Create Your Crowdfunding Platform</li>
                              <li>Intergate With Popular Softwares item</li>
                           </ul>

                           <Link href="/contact"><a className="w-btn w-btn-purple w-btn-6 w-btn-9 w-btn-1-3">Get Started</a></Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-6 offset-xxl-1 col-xl-6 col-lg-6 col-md-8 col-sm-10">
                     <div className="about__thumb-4 p-relative text-end">
                        <img className="mr-95 about-phone wow fadeInRight" data-wow-delay=".7s" src="/img/about/home-3/about-phone.png" alt=""/>
                        <img className="about-4-circle" src="/img/about/home-3/about-circle.png" alt=""/>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
