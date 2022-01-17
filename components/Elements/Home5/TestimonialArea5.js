import React from 'react'
import Slider from 'react-slick'

export default function TestimonialArea5() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      
      responsive: [
         {
           breakpoint: 1199,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 767,
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
        <section className="testimonial__area dark-blue-bg pt-110 pb-200 fix p-relative">
            <div className="testimonial__5-img d-none d-md-block">
               <img className="testi-big testi-1" src="/img/testimonial/home-5/testi-1.jpg" alt=""/>
               <img className="testi-big testi-2" src="/img/testimonial/home-5/testi-2.jpg" alt=""/>
               <img className="testi-big testi-3" src="/img/testimonial/home-5/testi-3.jpg" alt=""/>
               <img className="testi-big testi-4" src="/img/testimonial/home-5/testi-4.jpg" alt=""/>
               <img className="testi-big testi-5" src="/img/testimonial/home-5/testi-5.jpg" alt=""/>
               <img className="testi-sm testi-6" src="/img/testimonial/home-5/testi-sm-1.jpg" alt=""/>
               <img className="testi-sm testi-7" src="/img/testimonial/home-5/testi-sm-2.jpg" alt=""/>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-6 offset-xxl-3">
                     <div className="section__title-wrapper section__title-wrapper-5 section__title-white text-center mb-55 wow fadeInUp" data-wow-delay=".3s">
                        <h2 className="section__title-5 mb-15">What people say <br/> about our products.</h2>
                        <p>A blinding shot the bee&#39;s knees chancer skive off the full monty A bit of how&#39;s your.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
                     <Slider {...settings} className="testimonial__slider-5 owl-carousel pb-10">
                        <div className="testimonial__item-5 text-center">
                           <p>‘’Cobblers posh cras victoria sponge some dgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>

                           <div className="testimonial__info">
                              <h4>Hilary Ouse</h4>
                              <span>Developer</span>
                           </div>
                        </div>
                        <div className="testimonial__item-5 text-center">
                           <p>‘’Cobblers posh cras victoria sponge some dgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>

                           <div className="testimonial__info">
                              <h4>Hilary Ouse</h4>
                              <span>Developer</span>
                           </div>
                        </div>
                        <div className="testimonial__item-5 text-center">
                           <p>‘’Cobblers posh cras victoria sponge some dgy chaverat barney only a quid, boot bubble and squeak wind up bits and boes bleeding up the duff brolly. ’’ </p>

                           <div className="testimonial__info">
                              <h4>Hilary Ouse</h4>
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
