import React from 'react'
import Accordion2 from './Accordion2';
import CounterUp from './CounterUp';

export default function FAQArea2() {
  return (
    <section className="faq__area pt-140 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <Accordion2/>
          </div>
          <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 col-md-8">
            <div className="faq__content">
              <div className="section__title-wrapper section__title-wrapper-2 mb-35 wow fadeInUp" data-wow-delay=".5s">
                <h2 className="section__title section__title-2">Loved and trusted by over 40k+ users!</h2>
                <p>Over the last few years, podcasts have become a huge deal. They’ve taken on a growing role.</p>
              </div>
              <div className="faq__counter wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
                <ul>
                  <li>
                    <h3 className="pink"><span className="counter"><CounterUp count={876}/></span></h3>
                    <p>Happy Clients</p>
                  </li>
                  <li>
                    <h3 className="blue"><span className="counter"><CounterUp count={156}/></span></h3>
                    <p>Projects</p>
                  </li>
                  <li>
                    <h3 className="yellow"><span className="counter"><CounterUp count={430}/></span></h3>
                    <p>Trusted Users</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
