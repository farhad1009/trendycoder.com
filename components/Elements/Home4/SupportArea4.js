import React from 'react'
import Link from 'next/link'

export default function SupportArea4() {
    return (
        <section className="support__area grey-bg-12 pt-105 pb-90">
           <div className="container">
              <div className="row">
                 <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                  <div className="section__title-wrapper section__title-wrapper-4 text-center mb-60 wow fadeInUp" data-wow-delay=".3s">
                     <h2 className="section__title section__title-4 section__title-4-p-2">Keep conversations going across channels</h2>
                     <p>Connect with our support team and ask for our Business & eCommerce Premium plans.</p>
                  </div>
                 </div>
              </div>
              <div className="row row-cols row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                 <div className="col wow fadeInUp" data-wow-delay=".3s">
                    <div className="support__item white-bg mb-30 transition-3 text-center">
                       <div className="support__icon mb-15 d-flex align-items-end justify-content-center">
                          <Link href="#"><a>
                             <img src="/img/support/stack-1.png" alt=""/>
                          </a></Link>
                       </div>
                       <div className="support__content">
                          <h3 className="support__title"><Link href="#"><a>Slack</a></Link></h3>
                       </div>
                    </div>
                 </div>
                 <div className="col wow fadeInUp" data-wow-delay=".5s">
                    <div className="support__item white-bg mb-30 transition-3 text-center">
                       <div className="support__icon mb-15 d-flex align-items-end justify-content-center">
                          <Link href="#"><a>
                             <img src="/img/support/twitter.png" alt=""/>
                          </a></Link>
                       </div>
                       <div className="support__content">
                          <h3 className="support__title"><Link href="#"><a>Twitter</a></Link></h3>
                       </div>
                    </div>
                 </div>
                 <div className="col wow fadeInUp" data-wow-delay=".7s">
                    <div className="support__item white-bg mb-30 transition-3 text-center">
                       <div className="support__icon mb-15 d-flex align-items-end justify-content-center">
                          <Link href="#"><a>
                             <img src="/img/support/google-drive.png" alt=""/>
                          </a></Link>
                       </div>
                       <div className="support__content">
                          <h3 className="support__title"><Link href="#"><a>Drive</a></Link></h3>
                       </div>
                    </div>
                 </div>
                 <div className="col wow fadeInUp" data-wow-delay=".9s">
                    <div className="support__item white-bg mb-30 transition-3 text-center">
                       <div className="support__icon mb-15 d-flex align-items-end justify-content-center">
                          <Link href="#"><a>
                             <img src="/img/support/behance.png" alt=""/>
                          </a></Link>
                       </div>
                       <div className="support__content">
                          <h3 className="support__title"><Link href="#"><a>Behance</a></Link></h3>
                       </div>
                    </div>
                 </div>
                 <div className="col wow fadeInUp" data-wow-delay="1.2s">
                    <div className="support__item white-bg mb-30 transition-3 text-center">
                       <div className="support__icon mb-15 d-flex align-items-end justify-content-center">
                          <Link href="#"><a>
                             <img src="/img/support/whatsapp.png" alt=""/>
                          </a></Link>
                       </div>
                       <div className="support__content">
                          <h3 className="support__title"><Link href="#"><a>What’s app</a></Link></h3>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
    )
}
