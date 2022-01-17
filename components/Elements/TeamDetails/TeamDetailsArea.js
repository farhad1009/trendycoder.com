import React from 'react'
import Link from 'next/link'

export default function TeamDetailsArea() {
    return (
        <section className="team__details pt-120 pb-160">
               <div className="container">
                   <div className="team__details-inner p-relative white-bg">
                       <div className="team__details-shape p-absolute wow fadeInRight" data-wow-delay=".2s">
                           <img src="/img/icon/team/shape-1.png" alt=""/>
                       </div>
                       <div className="row">
                           <div className="col-xl-6 col-lg-6">
                               <div className="team__details-img w-img mr-70">
                                   <img src="/img/team/details/team-01.jpg" alt=""/>
                               </div>
                           </div>
                           <div className="col-xl-6 col-lg-6">
                               <div className="team__details-content pt-105">
                                   <span className="wow fadeInUp" data-wow-delay=".4s">UI/UX Designer</span>
                                   <h3 className="wow fadeInUp" data-wow-delay=".6s">Parsley Montana</h3>
                                   <p className="wow fadeInUp" data-wow-delay=".8s">So I said on your bike mate easy peasy dropped a clanger blow  porkies is fantastic show off show.!</p>
                                   <div className="team__details-contact mb-45">
                                       <ul>
                                           <li className="wow fadeInUp" data-wow-delay="1s">
                                               <div className="icon theme-color ">
                                                   <i className="fal fa-envelope"></i>
                                               </div>
                                               <div className="text theme-color ">
                                                   <span><Link href="/mailto:support@zibber.com"><a>support@zibber.com</a></Link></span>
                                               </div>
                                           </li>
                                           <li className="wow fadeInUp" data-wow-delay="1s">
                                               <div className="icon theme-color">
                                                   <i className="fas fa-phone-alt"></i>
                                               </div>
                                               <div className="text theme-color">
                                                   <span><Link href="/tel:(+642)-394-396-432"><a>(+642) 394 396 432</a></Link></span>
                                               </div>
                                           </li>
                                           <li className="wow fadeInUp" data-wow-delay="1s">
                                               <div className="icon">
                                                   <i className="fal fa-map-marker-alt"></i>
                                               </div>
                                               <div className="text">
                                                   <span>Ave 14th Street, Mirpur 210, <br/> San Franciso, USA 3296.</span>
                                               </div>
                                           </li>
                                       </ul>
                                   </div>
                                   <div className="team__details-social theme-social wow fadeInUp" data-wow-delay="1s">
                                       <ul>
                                           <li>
                                               <Link href="#"><a>
                                                   <i className="fab fa-facebook-f"></i>
                                               </a></Link>
                                           </li>
                                           <li>
                                               <Link href="#"><a>
                                                   <i className="fab fa-twitter"></i>
                                               </a></Link>
                                           </li>
                                           <li>
                                               <Link href="#"><a>
                                                   <i className="fab fa-vimeo-v"></i>
                                               </a></Link>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-xl-10 offset-xl-1">
                           <div className="team__details-info mt-60">
                               <h4 className="wow fadeInUp" data-wow-delay=".4s">Information</h4>
                               <p className="wow fadeInUp" data-wow-delay=".6s">jolly good codswallop what a plonker he nicked it bog-standard porkies gosh the full monty, wind up at public school hanky panky cheeky bugger Richard do one some dodgy chav bite your arm off. Argy-bargy excuse my French brown bread up the duff bleeder fanny around spend a penny barmy bonnet, bubble and squeak brolly bugger no biggie smashing get stuffed mate old lurgy, cup of tea nice one mufty that I knackered some dodgy chav. Say vagabond morish crikey excuse my French bonnet William blatant spend a penny, knackered bite your arm off what a plonker blimey smashing a blinding shot pardon me grub, wind up cracking goal Jeffrey hanky panky are you taking the piss such a fibber hunky-dory.</p>
                               <p className="wow fadeInUp" data-wow-delay=".8s">So I said on your bike mate easy peasy dropped a clanger blow off porkies is fantastic show off show off pick your nose and blow off, faff about bubble and squeak bugger all mate happy days hotpot don&#39;t get shirty with me jolly good gormless barmy.</p>

                               <Link href="/contact"><a className="w-btn mt-10 wow fadeInUp" data-wow-delay="1s">Appionment</a></Link>
                           </div>
                       </div>
                   </div>
               </div>
            </section>
    )
}
