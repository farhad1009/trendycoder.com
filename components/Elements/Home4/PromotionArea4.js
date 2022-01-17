import React from 'react'
import Link from 'next/link'

export default function PromotionArea4() {
    return (
        <section className="promotion__area pt-200 pb-120">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-7 col-md-10 order-last order-lg-first">
                     <div className="promotion__content-4 mb-90 pr-85">
                        <div className="section__title-wrapper section__title-wrapper-4  mb-30 wow fadeInUp" data-wow-delay=".3s">
                           <h2 className="section__title section__title-4">Send Marketing Email Like a Pro.</h2>
                           <p>Brown bread don&#39;t get shirty with me loo James Bond knees up argy-bargy arse bamboozled porkies bender, cheeky chap.</p>
                        </div>

                        <Link href="/contact"><a className="w-btn-round">Start Free Trial</a></Link>
                     </div>
                     
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-5">
                     <div className="promotion__thumb-4 p-relative">
                        <img className="promotion-4-big" src="/img/promotion/home-4/promotion-big.jpg" alt=""/>
                        <img className="promotion-4-sm" src="/img/promotion/home-4/promotion-sm.jpg" alt=""/>
                        <img className="promotion-4-circle" src="/img/promotion/home-4/circle.png" alt=""/>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
