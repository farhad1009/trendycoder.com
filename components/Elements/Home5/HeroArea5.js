import React from 'react'
import Link from 'next/link'

export default function HeroArea5() {
    return (
        <section className="hero__area hero__height-5 hero__bg p-relative d-flex align-items-center" style={{"backgroundImage":"url(/img/hero/home-5/hero-bg.jpg)"}}>
            <div className="hero__shape-5">
               <img className="hero-5-triangle-1" src="/img/icon/hero/home-5/hero-5-triangle.png" alt=""/>
               <img className="hero-5-triangle-2" src="/img/icon/hero/home-5/hero-5-triangle-2.png" alt=""/>
               <img className="hero-5-line" src="/img/icon/hero/home-5/hero-line.png" alt=""/>
            </div>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                     <div className="hero__content-5">
                        <h3 className="hero__title-5 wow fadeInUp" data-wow-delay=".3s">Creative digital solution agency.</h3>
                        <p className="wow fadeInUp" data-wow-delay=".5s">Impression is a multi-award winning, strategic-thinking team of digital marketing quis ipsum suspendisse. </p>

                        <div className="hero__btn d-sm-flex align-items-center">
                           <Link href="/portfolio"><a className="w-btn w-btn-6 w-btn-white w-btn-white-4 mr-30 wow fadeInUp" data-wow-delay=".7s">View our work</a></Link>
                           <Link href="https://www.youtube.com/watch?v=yJg-Y5byMMw"><a data-fancybox="" className="play-btn d-flex align-items-center wow fadeInUp" data-wow-delay=".9s"> <span> <i className="arrow_triangle-right "></i></span> Watch video</a></Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-5 col-xl-6 col-lg-6">
                     <div className="hero__thumb-5 p-relative wow fadeInRight" data-wow-delay=".5s">
                        <img className="hero-5-thumb" src="/img/hero/home-5/hero-thumb.jpg" alt=""/>
                        <img className="hero-5-shape" src="/img/hero/home-5/hero-shape.png" alt=""/>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
