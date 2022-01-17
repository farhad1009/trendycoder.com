import React from 'react'
import Slider from 'react-slick'

export default function TestimonialArea3() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows:false,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
         {
           breakpoint: 991,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 575,
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
        <section className="testimonial__area grey-bg-5 pb-175 overflow-y-visible">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 offset-xxl-2">
                     <div className="section__title-wrapper section__title-wrapper-3 text-center section-padding-4 mb-55 wow fadeInUp" data-wow-delay=".3s">
                        <span className="section__pre-title-img"><img src="/img/icon/title/testimonial.png" alt=""/></span>
                        <h2 className="section__title section__title-3 section-mb-15">See What Others Have to Say</h2>
                        <p>Connect with our support team and ask for our Business & eCommerce Premium plans</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-12">
                     <Slider {...settings} className="testimonial__slider-3 owl-carousel wow fadeInUp" data-wow-delay=".4s">
                        <div className="testimonial__item-3 white-bg mb-30">
                           <div className="rating">
                              <ul>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                              </ul>
                           </div>
                           <div className="testimonial__text-3">
                              <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                           </div>

                           <div className="testimonial__person d-flex align-items-center">
                              <div className="testimonial__avater mr-20">
                                 <img src="/img/testimonial/home-1/testi-1.png" alt=""/>
                              </div>
                              <div className="testimonial__author-3">
                                 <h4>Hilary Ouse</h4>
                                 <span>Developer</span>
                              </div>
                           </div>
                        </div>
                        <div className="testimonial__item-3 white-bg mb-30">
                           <div className="rating">
                              <ul>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                              </ul>
                           </div>
                           <div className="testimonial__text-3">
                              <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                           </div>

                           <div className="testimonial__person d-flex align-items-center">
                              <div className="testimonial__avater mr-20">
                                 <img src="/img/testimonial/home-1/testi-2.png" alt=""/>
                              </div>
                              <div className="testimonial__author-3">
                                 <h4>INNA Gomz</h4>
                                 <span>Designer</span>
                              </div>
                           </div>
                        </div>
                        <div className="testimonial__item-3 white-bg mb-30">
                           <div className="rating">
                              <ul>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                              </ul>
                           </div>
                           <div className="testimonial__text-3">
                              <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                           </div>

                           <div className="testimonial__person d-flex align-items-center">
                              <div className="testimonial__avater mr-20">
                                 <img src="/img/testimonial/home-1/testi-3.png" alt=""/>
                              </div>
                              <div className="testimonial__author-3">
                                 <h4>Shahnewaz Sakil</h4>
                                 <span>Web Developer</span>
                              </div>
                           </div>
                        </div>
                        <div className="testimonial__item-3 white-bg mb-30">
                           <div className="rating">
                              <ul>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                              </ul>
                           </div>
                           <div className="testimonial__text-3">
                              <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                           </div>

                           <div className="testimonial__person d-flex align-items-center">
                              <div className="testimonial__avater mr-20">
                                 <img src="/img/testimonial/home-1/testi-4.png" alt=""/>
                              </div>
                              <div className="testimonial__author-3">
                                 <h4>Charlie</h4>
                                 <span>Business Man</span>
                              </div>
                           </div>
                        </div>
                        <div className="testimonial__item-3 white-bg mb-30">
                           <div className="rating">
                              <ul>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                              </ul>
                           </div>
                           <div className="testimonial__text-3">
                              <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                           </div>

                           <div className="testimonial__person d-flex align-items-center">
                              <div className="testimonial__avater mr-20">
                                 <img src="/img/testimonial/home-1/testi-4.png" alt=""/>
                              </div>
                              <div className="testimonial__author-3">
                                 <h4>Decaprio Helson</h4>
                                 <span>Digital Marketer</span>
                              </div>
                           </div>
                        </div>
                        <div className="testimonial__item-3 white-bg mb-30">
                           <div className="rating">
                              <ul>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                              </ul>
                           </div>
                           <div className="testimonial__text-3">
                              <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                           </div>

                           <div className="testimonial__person d-flex align-items-center">
                              <div className="testimonial__avater mr-20">
                                 <img src="/img/testimonial/home-1/testi-5.png" alt=""/>
                              </div>
                              <div className="testimonial__author-3">
                                 <h4>Thomas Edison</h4>
                                 <span>Inventor</span>
                              </div>
                           </div>
                        </div>
                        <div className="testimonial__item-3 white-bg mb-30">
                           <div className="rating">
                              <ul>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                                 <li><i className="icon_star"></i></li>
                              </ul>
                           </div>
                           <div className="testimonial__text-3">
                              <p>‘’Cobblers posh cras victoria sponge some dodgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>
                           </div>

                           <div className="testimonial__person d-flex align-items-center">
                              <div className="testimonial__avater mr-20">
                                 <img src="/img/testimonial/home-1/testi-6.png" alt=""/>
                              </div>
                              <div className="testimonial__author-3">
                                 <h4>Robert Downey Jr.</h4>
                                 <span>Inventor</span>
                              </div>
                           </div>
                        </div>
                     </Slider>
                  </div>
               </div>
            </div>
         </section>
    )
}
