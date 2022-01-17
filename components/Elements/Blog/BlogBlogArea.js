import React from 'react'
import Link from 'next/link'

export default function BlogBlogArea() {
    return (
        <section className="blog__area pt-120 pb-60">
        <div className="container">
           <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                 <div className="blog__item-5 mb-50">
                    <div className="blog__thumb-5 fix w-img">
                       <Link href="/blog-details"><a>
                          <img src="/img/blog/home-5/blog-4.jpg" alt=""/>
                       </a></Link>
                    </div>
                    <div className="blog__content-5">
                       <div className="blog__meta-5">
                          <span className="date">28,March 20, 2021</span>
                          <span className="tag"><Link href="#"><a>Marketing</a></Link></span>
                       </div>
                       <h3 className="blog__title-5"><Link href="/blog-details"><a>Web design is now trending on freelancing platform</a></Link></h3>
                       <Link href="/blog-details"><a className="link-btn">View More <i className="arrow_right"></i> </a></Link>
                    </div>
                 </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                 <div className="blog__item-5 mb-50">
                    <div className="blog__thumb-5 fix w-img">
                       <Link href="/blog-details"><a>
                          <img src="/img/blog/home-5/blog-5.jpg" alt=""/>
                       </a></Link>
                    </div>
                    <div className="blog__content-5">
                       <div className="blog__meta-5">
                          <span className="date">28,March 20, 2021</span>
                          <span className="tag"><Link href="#"><a>Marketing</a></Link></span>
                       </div>
                       <h3 className="blog__title-5"><Link href="/blog-details"><a>Why we decide to build UX design tools platform?</a></Link></h3>
                       <Link href="/blog-details"><a className="link-btn">View More <i className="arrow_right"></i> </a></Link>
                    </div>
                 </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                 <div className="blog__item-5 mb-50">
                    <div className="blog__thumb-5 fix w-img">
                       <Link href="/blog-details"><a>
                          <img src="/img/blog/home-5/blog-6.jpg" alt=""/>
                       </a></Link>
                    </div>
                    <div className="blog__content-5">
                       <div className="blog__meta-5">
                          <span className="date">28,March 20, 2021</span>
                          <span className="tag"><Link href="#"><a>Marketing</a></Link></span>
                       </div>
                       <h3 className="blog__title-5"><Link href="/blog-details"><a>How to get your handmade website found on Google</a></Link></h3>
                       <Link href="/blog-details"><a className="link-btn">View More <i className="arrow_right"></i> </a></Link>
                    </div>
                 </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                 <div className="blog__item-5 mb-50">
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
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="1.2s">
                 <div className="blog__item-5 mb-50">
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
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="1.5s">
                 <div className="blog__item-5 mb-50">
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
