import React from 'react'
import Link from 'next/link'

export default function HeroArea3() {
    return (
        <section className="hero__area hero__height-3 hero__bg p-relative d-flex align-items-center" style={{"backgroundImage":"url(/img/hero/home-3/hero-bg.jpg)"}}>
            <div className="hero__shape-3">
               <img className="hero-3-circle-2" src="/img/icon/hero/home-3/hero-circle.png" alt=""/>
               <img className="hero-3-dot" src="/img/icon/hero/home-3/hero-dot.png" alt=""/>
               <img className="hero-3-dot-3" src="/img/icon/hero/home-3/hero-dot-3.png" alt=""/>
               <img className="hero-3-dot-4" src="/img/icon/hero/home-3/hero-dot-4.png" alt=""/>
               <img className="hero-3-triangle" src="/img/icon/hero/home-3/hero-triangle.png" alt=""/>
            </div>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                     <div className="hero__thumb-3 ">
                        <img className="hero-phone wow fadeInLeft" data-wow-delay=".3s" src="/img/hero/home-3/hero-phone.png" alt=""/>
                        <img className="hero-3-gradient" src="/img/icon/hero/home-3/hero-gradient-circle.png" alt=""/>
                        <img className="hero-3-dot-2" src="/img/icon/hero/home-3/hero-dot-2.png" alt=""/>
                     </div>
                  </div>
                  <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
                     <div className="hero__content-3 mb-100 pl-70">
                        <h3 className="hero__title-3 wow fadeInUp" data-wow-delay=".3s">Get the App for Your Device.</h3>
                        <p className="wow fadeInUp" data-wow-delay=".5s">Unify your team’s video creation process under one repository to create, collaborat scale.</p>

                        <div className="hero__app wow fadeInUp" data-wow-delay=".7s">
                           <ul>
                              <li>
                                 <Link href="#"><a className="d-flex align-items-center active">
                                    <div className="hero__app-icon">
                                       <i className="fab fa-google-play"></i>
                                    </div>
                                    <div className="hero__app-content">
                                       <h5>Available on the</h5>
                                       <span> App Store</span>
                                    </div>
                                 </a></Link>
                              </li>
                              <li>
                                 <Link href="#"><a className="d-flex align-items-center">
                                    <div className="hero__app-icon">
                                       <i className="fab fa-apple"></i>
                                    </div>
                                    <div className="hero__app-content">
                                       <h5>Available on the</h5>
                                       <span>Apple Store</span>
                                    </div>
                                 </a></Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
