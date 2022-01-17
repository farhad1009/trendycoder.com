import React from 'react'
import Slider from 'react-slick';

export default function TestimonialArea() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
    ]
  };
   return (
      <section className="testimonial__area pt-150 pb-70 p-relative overflow-y-visible">
         <div className="circle-animation testimonial">
            <span></span>
         </div>
         <div className="testimonial__shape">
            <img className="testimonial-circle-1" src="/img/icon/testimonial/home-1/circle-1.png" alt="" />
            <img className="testimonial-circle-2" src="/img/icon/testimonial/home-1/circle-2.png" alt="" />
         </div>
         <div className="container">
            <div className="row">
               <div className="col-xxl-6 offset-xxl-3 col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
                  <div className="section__title-wrapper text-center section-padding mb-65 wow fadeInUp" data-wow-delay=".3s">
                     <h2 className="section__title">What People Say About Our Products.</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-xxl-12">
               <Slider {...settings} className="testimonial__slider owl-carousel wow fadeInUp" data-wow-delay=".5s">
                    <div className="testimonial__item white-bg transition-3 mb-110">
                        <div className="testimonial__thumb mb-25">
                            <img src="/img/testimonial/home-1/testi-5.png" alt="" />
                        </div>
                        <div className="testimonial__text mb-25">
                            <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                        </div>
                        <div className="testimonial__author">
                            <h3>Shinna</h3>
                            <span>Developer</span>
                        </div>
                    </div>
                    <div className="testimonial__item white-bg transition-3 mb-110">
                        <div className="testimonial__thumb mb-25">
                            <img src="/img/testimonial/home-1/testi-6.png" alt="" />
                        </div>
                        <div className="testimonial__text mb-25">
                            <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                        </div>
                        <div className="testimonial__author">
                            <h3>Steve Smith</h3>
                            <span>Designer</span>
                        </div>
                    </div>
                    <div className="testimonial__item white-bg transition-3 mb-110">
                        <div className="testimonial__thumb mb-25">
                            <img src="/img/testimonial/home-1/testi-1.png" alt="" />
                        </div>
                        <div className="testimonial__text mb-25">
                            <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                        </div>
                        <div className="testimonial__author">
                            <h3>Hilary Ouse</h3>
                            <span>Developer</span>
                        </div>
                    </div>
                    <div className="testimonial__item white-bg transition-3 mb-110">
                        <div className="testimonial__thumb mb-25">
                            <img src="/img/testimonial/home-1/testi-2.png" alt="" />
                        </div>
                        <div className="testimonial__text mb-25">
                            <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                        </div>
                        <div className="testimonial__author">
                            <h3>Elon Gated</h3>
                            <span>Designer</span>
                        </div>
                    </div>
                    <div className="testimonial__item white-bg transition-3 mb-110">
                        <div className="testimonial__thumb mb-25">
                            <img src="/img/testimonial/home-1/testi-3.png" alt="" />
                        </div>
                        <div className="testimonial__text mb-25">
                            <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                        </div>
                        <div className="testimonial__author">
                            <h3>Victor </h3>
                            <span>Developer</span>
                        </div>
                    </div>
                    <div className="testimonial__item white-bg transition-3 mb-110">
                        <div className="testimonial__thumb mb-25">
                            <img src="/img/testimonial/home-1/testi-4.png" alt="" />
                        </div>
                        <div className="testimonial__text mb-25">
                            <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                        </div>
                        <div className="testimonial__author">
                            <h3>Lily Gomz</h3>
                            <span>Developer</span>
                        </div>
                    </div>
                </Slider>
               </div>
            </div>
         </div>
      </section>
   )
}
