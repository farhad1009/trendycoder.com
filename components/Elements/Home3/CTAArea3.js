import React from 'react'
import Link from 'next/link'

export default function CTAArea3() {
    return (
        <section className="cta__area pb-140 p-relative">
            <div className="container">
               <div className="cta__inner-3 p-relative fix wow fadeInUp" data-wow-delay=".4s" style={{"backgroundImage":"url(/img/cta/home-3/cta-3-bg.jpg)","visibility":"visible","animationDelay":"0.4s","animationName":"fadeInUp"}}>
                  <div className="row align-items-center">
                     <div className="col-xxl-7 col-xl-8 col-lg-10 col-md-9">
                        <div className="cta__content-3">
                           <h3 className="cta__title cta__title-3">Need Some Custom Plan?</h3>
                           <p>Connect with our support team and ask for our Business & eCommerce Premium plans.</p>
                        </div>
                     </div>
                     <div className="col-xxl-5 col-xl-4 col-lg-2 col-md-3">
                        <div className="cta__btn text-md-end">
                           <Link href="/contact"><a className="w-btn w-btn-white-3">Request Plan</a></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
