import React from 'react'
import Link from 'next/link'

export default function BlogArea3() {
    return (
        <section className="blog__area pt-120 pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-9 col-xl-12 col-lg-12 col-md-10">
                     <div className="section__title-wrapper section__title-wrapper-3 mb-65 wow fadeInUp" data-wow-delay=".3s">
                        <span className="section__pre-title-img"><img src="/img/icon/title/blog.png" alt=""/></span>
                        <h2 className="section__title section__title-3 section-mb-15">The Ultimate Marketing Technology News.</h2>
                        <p>Connect with our support team and ask for our Business & eCommerce Premium plans.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                     <div className="blog__item-3 white-bg mb-30">
                        <div className="blog__thumb-3 p-relative w-img fix">
                           <Link href="/blog-details"><a>
                              <img src="/img/blog/home-3/blog-1.jpg" alt=""/>
                           </a></Link>
                           <div className="blog__meta-3">
                              <span className="tag-3"><Link href="/blog-details"><a>Design</a></Link></span>
                           </div>
                        </div>
                        <div className="blog__content-3">
                           <div className="blog__meta-3 mb-10">
                              <span className="date">May 18, 2021</span>
                           </div>
                           <h3 className="blog__title-3"><Link href="/blog-details"><a>What is a digital agency & what can they do for my business?</a></Link></h3>

                           <Link href="/blog-details"><a className="link-btn">More Details <i className="arrow_right"></i> </a></Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                     <div className="blog__item-3 white-bg mb-30">
                        <div className="blog__thumb-3 p-relative w-img fix">
                           <Link href="/blog-details"><a>
                              <img src="/img/blog/home-3/blog-2.jpg" alt=""/>
                           </a></Link>
                           <div className="blog__meta-3">
                              <span className="tag-3"><Link href="#"><a>Creative</a></Link></span>
                           </div>
                        </div>
                        <div className="blog__content-3">
                           <div className="blog__meta-3 mb-10">
                              <span className="date">May 20, 2021</span>
                           </div>
                           <h3 className="blog__title-3"><Link href="/blog-details"><a>How to Create an Amazon Affiliate Store in WordPress?</a></Link></h3>

                           <Link href="/blog-details"><a className="link-btn">More Details <i className="arrow_right"></i> </a></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
