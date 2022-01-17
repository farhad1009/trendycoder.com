import React from 'react'
import Link from 'next/link'
import Slider from "react-slick";

export default function TeamArea2() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows:false,
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
      <section className="team__area grey-bg-3 pt-120 pb-195 overflow-y-visible p-relative">
         <div className="team__shape">
            <img className="team-dot" src="/img/icon/team/home-2/team-dot.png" alt="" />
            <img className="team-triangle" src="/img/icon/team/home-2/team-triangle.png" alt="" />
         </div>
         <div className="container">
            <div className="row align-items-end">
               <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-8">
                  <div className="section__title-wrapper mb-70 wow fadeInUp" data-wow-delay=".3s">
                     <span className="section__pre-title blue">Team</span>
                     <h2 className="section__title section__title-2">Our expert team thinking creative</h2>
                  </div>
               </div>
               <div className="col-xxl-8 col-xl-7 col-lg-7 col-md-5 col-sm-4">
                  <div className="team__more text-sm-end mb-70">
                     <Link href="/team"><a className="w-btn w-btn-blue w-btn-7">View all team </a></Link>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-xxl-12">
                  <Slider {...settings} className="team__slider slick-carousel slick fadeInUp" data-wow-delay=".5s">
                     <div className="team__item">
                        <div className="team__thumb w-img p-relative mb-20 fix">
                           <img src="/img/team/home-2/team-1.jpg" alt="" />

                           <div className="team__social">
                              <ul>
                                 <li><Link href="#"><a><i className="fab fa-facebook-f"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-twitter"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-pinterest-p"></i></a></Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="team__content">
                           <h3 className="team__title"><Link href="/team-details"><a>Habib Hemel</a></Link></h3>
                           <span className="team__position">UI UX Designer</span>
                        </div>
                     </div>
                     <div className="team__item">
                        <div className="team__thumb w-img p-relative mb-20 fix">
                           <img src="/img/team/home-2/team-2.jpg" alt="" />

                           <div className="team__social">
                              <ul>
                                 <li><Link href="#"><a><i className="fab fa-facebook-f"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-twitter"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-pinterest-p"></i></a></Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="team__content">
                           <h3 className="team__title"><Link href="/team-details"><a>Nathaneal Down</a></Link></h3>
                           <span className="team__position">Developer</span>
                        </div>
                     </div>
                     <div className="team__item">
                        <div className="team__thumb w-img p-relative mb-20 fix">
                           <img src="/img/team/home-2/team-3.jpg" alt="" />

                           <div className="team__social">
                              <ul>
                                 <li><Link href="#"><a><i className="fab fa-facebook-f"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-twitter"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-pinterest-p"></i></a></Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="team__content">
                           <h3 className="team__title"><Link href="/team-details"><a>Russell Sprout</a></Link></h3>
                           <span className="team__position">Supporter</span>
                        </div>
                     </div>
                     <div className="team__item">
                        <div className="team__thumb w-img p-relative mb-20 fix">
                           <img src="/img/team/home-2/team-4.jpg" alt="" />

                           <div className="team__social">
                              <ul>
                                 <li><Link href="#"><a><i className="fab fa-facebook-f"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-twitter"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-pinterest-p"></i></a></Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="team__content">
                           <h3 className="team__title"><Link href="/team-details"><a>Parsley Montana</a></Link></h3>
                           <span className="team__position">Supporter</span>
                        </div>
                     </div>
                     <div className="team__item">
                        <div className="team__thumb w-img p-relative mb-20 fix">
                           <img src="/img/team/home-2/team-5.jpg" alt="" />

                           <div className="team__social">
                              <ul>
                                 <li><Link href="#"><a><i className="fab fa-facebook-f"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-twitter"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-pinterest-p"></i></a></Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="team__content">
                           <h3 className="team__title"><Link href="/team-details"><a>Illian Decap</a></Link></h3>
                           <span className="team__position">Envato Customer</span>
                        </div>
                     </div>
                     <div className="team__item">
                        <div className="team__thumb w-img p-relative mb-20 fix">
                           <img src="/img/team/home-2/team-6.jpg" alt="" />

                           <div className="team__social">
                              <ul>
                                 <li><Link href="#"><a><i className="fab fa-facebook-f"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-twitter"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-pinterest-p"></i></a></Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="team__content">
                           <h3 className="team__title"><Link href="/team-details"><a>Jonas John</a></Link></h3>
                           <span className="team__position">Creator</span>
                        </div>
                     </div>
                     <div className="team__item">
                        <div className="team__thumb w-img p-relative mb-20 fix">
                           <img src="/img/team/home-2/team-7.jpg" alt="" />

                           <div className="team__social">
                              <ul>
                                 <li><Link href="#"><a><i className="fab fa-facebook-f"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-twitter"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-pinterest-p"></i></a></Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="team__content">
                           <h3 className="team__title"><Link href="/team-details"><a>Darly Devid</a></Link></h3>
                           <span className="team__position">Digital Marketor</span>
                        </div>
                     </div>
                 </Slider>
               </div>
            </div>
         </div>
      </section>
   )
}
