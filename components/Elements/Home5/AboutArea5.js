import React from 'react'
import Link from 'next/link'

export default function AboutArea5() {
    return (
        <section className="about__area pt-140 pb-110">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                     <div className="about__thumb-wrapper-5">
                        <img className="ml-100 about-thumb-5-big wow bounceInLeft" data-wow-delay=".3s" src="/img/about/home-5/about-big.jpg" alt=""/>
                        <img className="about-5-sm wow bounceInLeft" data-wow-delay=".5s" src="/img/about/home-5/about-sm.jpg" alt=""/>
                     </div>
                  </div>
                  <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 col-md-8">
                     <div className="about__content-5 pt-35">
                        <div className="section__title-wrapper section__title-wrapper-5 mb-30 wow fadeInUp" data-wow-delay=".3s">
                           <h2 className="section__title-5 mb-20 wow fadeInUp" data-wow-delay=".3s">We help clients invent their future.</h2>
                           <p className=" wow fadeInUp" data-wow-delay=".5s">Starkers pardon you knees up is Elizabeth geeza Why, quain gosh standard  guvnor cras brilliant.</p>
                        </div>
                        <div className="about__list mb-40 wow fadeInUp" data-wow-delay=".7s">
                           <ul>
                              <li>Intergate With Popular Softwares item</li>
                              <li>Instantly Create Your Crowdfunding</li>
                           </ul>
                        </div>
                        <div className="about__counter mb-30">
                           <ul>
                              <li>
                                 <div className="about__counter-item wow fadeInUp" data-wow-delay=".9s">
                                    <h4><span className="counter">250</span>+</h4>
                                    <p>Project</p>
                                 </div>
                              </li>
                              <li>
                                 <div className="about__counter-item wow fadeInUp" data-wow-delay="1.2s">
                                    <h4><span className="counter">580 </span>+</h4>
                                    <p>Clients</p>
                                 </div>
                              </li>
                              <li>
                                 <div className="about__counter-item wow fadeInUp" data-wow-delay="1.5s">
                                    <h4><span className="counter">50 </span>+</h4>
                                    <p>Employe</p>
                                 </div>
                              </li>
                           </ul>
                        </div>
                        <Link href="/about"><a className="w-btn w-btn-blue-5 w-btn-6 w-btn-14 w-btn-1-5 wow fadeInUp" data-wow-delay="1.5s">More Details</a></Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
