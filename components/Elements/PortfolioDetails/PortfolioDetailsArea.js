import React from 'react'
import Link from 'next/link'

export default function PortfolioDetailsArea() {
    return (
        <section className="portfolio__details pt-120 pb-60">
            <div className="container">
                  <div className="row">
                     <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="portfolio__img-wrapper">
                              <div className="portfolio__img mb-30 w-img wow fadeInUp" data-wow-delay=".2s">
                                 <img src="/img/portfolio/details/port-01.jpg" alt=""/>
                              </div>
                              <div className="portfolio__img mb-30 w-img wow fadeInUp" data-wow-delay=".4s">
                                 <img src="/img/portfolio/details/port-02.jpg" alt=""/>
                              </div>
                              <div className="portfolio__img mb-30 w-img wow fadeInUp" data-wow-delay=".6s">
                                 <img src="/img/portfolio/details/port-03.jpg" alt=""/>
                              </div>
                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-6 col-md-6 offset-xl-1">
                        <div className="portfolio__details-content mt-10">
                              <div className="portfolio__meta mb-5 wow fadeInUp" data-wow-delay=".2s">
                                 <h4>Branding Creative :</h4>
                                 <span> June 14, 2021</span>
                              </div>
                              <h1 className="wow fadeInUp" data-wow-delay=".4s">Branding New <br/> Clock</h1>
                              <div className="portfolio__info mb-25 wow fadeInUp" data-wow-delay=".6s">
                                 <h3>Category:</h3>
                                 <p> UX Design, Art Direction, Consulting</p>
                              </div>
                              <div className="portfolio__info mb-25 wow fadeInUp" data-wow-delay=".8s">
                                 <h3>Customer: </h3>
                                 <p>Envato Market</p>
                              </div>
                              <div className="portfolio__overview mt-40 wow fadeInUp" data-wow-delay="1s">
                                 <h2>Project Overview</h2>
                                 <p>My lady the full monty pukka a blinding shot owt to do with me that bubble and squeak lurgy faff about, gosh A bit of how&#39;s your father tinkety tonk old fruit knees up bobby bugger barmy, bloke the little rotter tickety-boo bevvy me old mucker Charles show off show off pick your nose and blow off. Knackered what a load of rubbish cuppa tinkety tonk old fruit the full monty faff about you mug brown bread, pukka bleeding give us a bell smashing cup of char bugger all mate chimney pot, it&#39;s all gone to pot down the pub crikey me old mucker fanny around horse play. Bog crikey have it he legged it victoria sponge mush Harry a load of old tosh, young delinquent bum bag butty faff about tomfoolery pukka, cheeky morish amongst codswallop wind up sloshed.</p>
                              </div>
                        </div>
                     </div>
                  </div>
                  <div className="portfolio__pagination-wrapper mt-70">
                     <div className="row">
                        <div className="col-xxl-12">
                           <div className="portfolio__more-btn d-flex justify-content-between align-items-center mb-120 mt-50">
                              <Link href="/portfolio-details"><a className="prev d-flex align-items-center"> <i className="arrow_left"></i> Previous</a></Link>
                               <Link href="/portfolio-details"><a className="next d-flex align-items-center">Next <i className="arrow_right"></i></a></Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row mb-30">
                     <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="portfolio__item mb-30">
                           <div className="portfolio__thumb w-img">
                              <img src="/img/portfolio/port-10.jpg" alt=""/>
                              <div className="portfolio__content">
                                 <span>Marketing</span>
                                 <h3 className="portfolio__title"><Link href="/portfolio-details"><a>Online digital marketing</a></Link></h3>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="portfolio__item mb-30">
                           <div className="portfolio__thumb w-img">
                              <img src="/img/portfolio/port-11.jpg" alt=""/>
                              <div className="portfolio__content">
                                 <span>Marketing</span>
                                 <h3 className="portfolio__title"><Link href="/portfolio-details"><a>Online digital marketing</a></Link></h3>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="portfolio__item mb-30">
                           <div className="portfolio__thumb w-img">
                              <img src="/img/portfolio/port-12.jpg" alt=""/>
                              <div className="portfolio__content">
                                 <span>Marketing</span>
                                 <h3 className="portfolio__title"><Link href="/portfolio-details"><a>Online digital marketing</a></Link></h3>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
            </div>
         </section>
    )
}
