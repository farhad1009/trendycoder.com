import React from 'react'
import Link from 'next/link'

export default function PromotionArea5() {
    return (
        <section className="promotion__area pt-110 pb-140">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 col-md-6 order-last order-md-first">
                     <div className="promotion__content-2 pr-70 mb-25">
                        <div className="section__title-wrapper section__title-wrapper-5 mb-25 wow fadeInUp" data-wow-delay=".3s">
                           <h2 className="section__title-5 mb-25 wow fadeInUp" data-wow-delay=".3s">Build a great site with bdeves.</h2>
                        </div>
                        <p className="promotion__sub wow fadeInUp" data-wow-delay=".5s">Starkers pardon you knees up is Elizabeth geez Why, quain standard  guvnor gosh cras briliant.</p>
                        <p className=" wow fadeInUp" data-wow-delay=".7s">On your bike mate it&#39;s your round cracking goal bloke chimne pot Queen&#39;s English lemon squeezy young  musa bamboozled peary.</p>
                        <Link href="/about"><a className="w-btn w-btn-blue-5 w-btn-6 w-btn-14 w-btn-1-5 wow fadeInUp" data-wow-delay=".9s">More Details</a></Link>
                     </div>
                  </div>
                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                     <div className="promotion__thumb w-img wow fadeInRight" data-wow-delay="1.2s">
                        <img src="/img/promotion/home-5/promotion-1.jpg" alt=""/>

                        <div className="promotion__play">
                           <Link href="https://www.youtube.com/watch?v=yJg-Y5byMMw"><a data-fancybox="" className="pulse-play"><i className="arrow_triangle-right"></i></a></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
