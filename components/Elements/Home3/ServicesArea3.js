import React from 'react'
import Link from 'next/link'

export default function ServicesArea3() {
    return (
        <section className="services__area pt-120 pb-110 p-relative">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1">
                     <div className="section__title-wrapper section__title-wrapper-3 text-center section-padding-3 mb-80 wow fadeInUp" data-wow-delay=".3s">
                        <span className="section__pre-title-img"><img src="/img/icon/title/services.png" alt=""/></span>
                        <h2 className="section__title section__title-3">Outcomes that Accelerate Growth In a Mobile-first World</h2>
                        <p>The wireless tosser bloke chancer off his nut sloshed bite your arm off butty wellies.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                     <div className="services__item-3 white-bg transition-3 mb-30 text-center">
                        <div className="services__icon-3">
                           <img src="/img/icon/services/home-3/services-1.png" alt=""/>
                        </div>
                        <div className="services__content-3">
                           <h3 className="services__title-3"><Link href="/services-details"><a>Development</a></Link></h3>
                           <p>Lorem ipsum dolor sit amet, consectetur. </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                     <div className="services__item-3 white-bg transition-3 mb-30 text-center">
                        <div className="services__icon-3">
                           <img src="/img/icon/services/home-3/services-2.png" alt=""/>
                        </div>
                        <div className="services__content-3">
                           <h3 className="services__title-3"><Link href="/services-details"><a>Bdevs Services</a></Link></h3>
                           <p>Lorem ipsum dolor sit amet, consectetur. </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                     <div className="services__item-3 white-bg transition-3 mb-30 text-center">
                        <div className="services__icon-3">
                           <img src="/img/icon/services/home-3/services-3.png" alt=""/>
                        </div>
                        <div className="services__content-3">
                           <h3 className="services__title-3"><Link href="/services-details"><a>UI/UX Design</a></Link></h3>
                           <p>Lorem ipsum dolor sit amet, consectetur. </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-12 wow fadeInUp" data-wow-delay=".9s">
                     <div className="services__more text-center mt-30">
                        <Link href="/services"><a className="w-btn w-btn-purple w-btn-purple-2 w-btn-3 w-btn-6">View all service</a></Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
