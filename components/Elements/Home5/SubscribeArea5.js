import React from 'react'

export default function SubscribeArea5() {
    return (
        <section className="subscribe__area grey-bg-8 pt-105 pb-110">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="subscribe__wrapper d-xl-flex justify-content-between align-items-center wow fadeInUp" data-wow-delay=".5s">
                        <div className="subscribe__content">
                           <h3 className="subscribe__title">Got an idea? <br/> Let’s get in touch!</h3>
                           <p>They’ve taken on a growing role Over the last few year.</p>
                        </div>
                        <div className="subscribe__form">
                           <form action="#">
                              <input type="text" placeholder="Your name*"/>
                              <input type="email" placeholder="Email*"/>

                              <button className="w-btn w-btn-11">send</button>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
