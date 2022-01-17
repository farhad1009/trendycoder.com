import React from 'react'
import Link from 'next/link'

export default function BlogArea5() {
    return (
        <section className="blog__area pt-130 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
                     <div className="section__title-wrapper section__title-wrapper-5 text-center mb-55 wow fadeInUp" data-wow-delay=".3s">
                        <h2 className="section__title-5 section__title-5-p mb-15">Trend in web design and other modern media.</h2>
                        <p>Mush owt to do with me in my flat barney baking cakes argy-bargy a load of old tosh lemon</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                     <div className="blog__item-5 mb-30">
                        <div className="blog__thumb-5 fix w-img">
                           <Link href="/blog-details"><a>
                              <img src="/img/blog/home-5/blog-1.jpg" alt=""/>
                           </a></Link>
                        </div>
                        <div className="blog__content-5">
                           <div className="blog__meta-5">
                              <span className="date">28,March 20, 2021</span>
                              <span className="tag"><Link href="#"><a>Marketing</a></Link></span>
                           </div>
                           <h3 className="blog__title-5"><Link href="/blog-details"><a>Exciting Examples of Hidden Menus in Web Design?</a></Link></h3>
                           <Link href="/blog-details"><a className="link-btn">View More <i className="arrow_right"></i> </a></Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                     <div className="blog__item-5 mb-30">
                        <div className="blog__thumb-5 fix w-img">
                           <Link href="/blog-details"><a>
                              <img src="/img/blog/home-5/blog-2.jpg" alt=""/>
                           </a></Link>
                        </div>
                        <div className="blog__content-5">
                           <div className="blog__meta-5">
                              <span className="date">28,March 20, 2021</span>
                              <span className="tag"><Link href="#"><a>Marketing</a></Link></span>
                           </div>
                           <h3 className="blog__title-5"><Link href="/blog-details"><a>What is a digital agency & what can they do for my business?</a></Link></h3>
                           <Link href="/blog-details"><a className="link-btn">View More <i className="arrow_right"></i> </a></Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                     <div className="blog__item-5 mb-30">
                        <div className="blog__thumb-5 fix w-img">
                           <Link href="/blog-details"><a>
                              <img src="/img/blog/home-5/blog-3.jpg" alt=""/>
                           </a></Link>
                        </div>
                        <div className="blog__content-5">
                           <div className="blog__meta-5">
                              <span className="date">28,March 20, 2021</span>
                              <span className="tag"><Link href="#"><a>Marketing</a></Link></span>
                           </div>
                           <h3 className="blog__title-5"><Link href="/blog-details"><a>What about the design, which are not published ?</a></Link></h3>
                           <Link href="/blog-details"><a className="link-btn">View More <i className="arrow_right"></i> </a></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
