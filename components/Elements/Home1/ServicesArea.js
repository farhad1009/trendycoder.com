import React, {useState} from 'react'
import Link from 'next/link'

export default function ServicesArea() {
   const [open, setOpen] = useState("a2");
    return (
        <section className="services__area p-relative pt-150 pb-130">
            <div className="services__shape">
               <img className="services-circle-1" src="/img/icon/services/home-1/circle-1.png" alt=""/>
               <img className="services-circle-2" src="/img/icon/services/home-1/circle-2.png" alt=""/>
               <img className="services-dot" src="/img/icon/services/home-1/dot.png" alt=""/>
               <img className="services-triangle" src="/img/icon/services/home-1/triangle.png" alt=""/>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-6 col-md-10 offset-md-1 p-0">
                     <div className="section__title-wrapper text-center mb-75 wow fadeInUp" data-wow-delay=".3s">
                        <h2 className="section__title">Get Answers, Insights Result in Simple Steps.</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <div className={`services__inner hover__active mb-30 wow fadeInUp ${open==="a1"?"active":""}`} onMouseOver={() => setOpen("a1")} data-wow-delay=".3s">
                        <div className="services__item white-bg text-center transition-3 ">
                           <div className="services__icon mb-25 d-flex align-items-end justify-content-center">
                              <img src="/img/icon/services/home-1/services-1.png" alt=""/>
                           </div>
                           <div className="services__content">
                              <h3 className="services__title"><Link href="/services-details"><a>Development</a></Link></h3>
                              <p>Absolutely bladdered he  blimey guvnor.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <div className={`services__inner hover__active mb-30 wow fadeInUp ${open==="a2" ? "active":""}`} onMouseOver={() => setOpen("a2")} data-wow-delay=".5s">
                        <div className="services__item white-bg mb-30 text-center transition-3" >
                           <div className="services__icon mb-25 d-flex align-items-end justify-content-center">
                              <img src="/img/icon/services/home-1/services-2.png" alt=""/>
                           </div>
                           <div className="services__content">
                              <h3 className="services__title"><Link href="/services-details"><a>OptimalSort</a></Link></h3>
                              <p>Absolutely bladdered he  blimey guvnor.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <div className={`services__inner hover__active mb-30 wow fadeInUp ${open==="a3" ? "active":""}`} onMouseOver={() => setOpen("a3")} data-wow-delay=".7s">
                        <div className="services__item white-bg text-center transition-3">
                           <div className="services__icon mb-25 d-flex align-items-end justify-content-center">
                              <img src="/img/icon/services/home-1/services-3.png" alt=""/>
                           </div>
                           <div className="services__content">
                              <h3 className="services__title"><Link href="/services-details"><a>Influencing</a></Link></h3>
                              <p>Absolutely bladdered he  blimey guvnor.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <div className={`services__inner hover__active mb-30 wow fadeInUp ${open==="a4" ? "active":""}`} onMouseOver={() => setOpen("a4")} data-wow-delay=".9s">
                        <div className="services__item white-bg text-center transition-3">
                           <div className="services__icon mb-25 d-flex align-items-end justify-content-center">
                              <img src="/img/icon/services/home-1/services-4.png" alt=""/>
                           </div>
                           <div className="services__content">
                              <h3 className="services__title"><Link href="/services-details"><a>Technology</a></Link></h3>
                              <p>Absolutely bladdered he  blimey guvnor.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
