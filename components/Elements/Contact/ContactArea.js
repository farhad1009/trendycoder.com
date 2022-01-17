import React from 'react'
import Link from 'next/link'

export default function ContactArea() {
    return (
        <section className="contact__area pb-150 p-relative z-index-1">
             <div className="container">
                <div className="row">
                   <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                      <div className="contact__wrapper white-bg mt--70 p-relative z-index-1 wow fadeInUp" data-wow-delay=".3s">
                         <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                               <div className="contact__info pr-80">
                                  <h3 className="contact__title">Let&#39;s talk</h3>
      
                                  <div className="contact__details">
                                     <ul>
                                        <li>
                                           <h4>Our Location</h4>
                                           <p>12 Mirpur DOHS, Cantonment, avenue6, road 6, Area 6300, Bedevs </p>
                                        </li>
                                        <li>
                                           <h4>Email Adress</h4>
                                           <p><Link href="/mailto:supportdesk@gmail.com"><a>supportdesk@gmail.com</a></Link></p>
                                           <p><Link href="/mailto:informaion@gmail.com"><a>informaion@gmail.com</a></Link></p>
                                        </li>
                                        <li>
                                           <h4>Hotline Number</h4>
                                           <p><Link href="/tel:+(046)-320-474-458"><a>+ (046) 320 474 458</a></Link></p>
                                           <p><Link href="/tel:+(123)-213-147-897"><a>+ (123) 213 147 897</a></Link></p>
                                        </li>
                                     </ul>
                                  </div>
                               </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                               <div className="contact__form">
                                  <form action="#">
                                     <input type="text" placeholder="Name"/>
                                     <input type="email" placeholder="Email"/>
                                     <input type="subject" placeholder="Subject"/>
                                     <textarea placeholder="Message"></textarea>
                                     <button type="submit" className="w-btn w-btn-blue-5 w-btn-6 w-btn-14">Send Massage</button>
                                  </form>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>
    )
}
