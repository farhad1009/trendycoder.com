import React from 'react'
import Link from 'next/link'

export default function SignInArea() {
    return (
        <section className="signup__area po-rel-z1 pt-100 pb-145">
            <div className="sign__shape">
               <img className="man-1" src="/img/icon/sign/man-1.png" alt=""/>
               <img className="man-2" src="/img/icon/sign/man-2.png" alt=""/>
               <img className="circle" src="/img/icon/sign/circle.png" alt=""/>
               <img className="zigzag" src="/img/icon/sign/zigzag.png" alt=""/>
               <img className="dot" src="/img/icon/sign/dot.png" alt=""/>
               <img className="bg" src="/img/icon/sign/sign-up.png" alt=""/>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
                     <div className="page__title-wrapper text-center mb-55">
                        <h2 className="page__title-2">Sign in to <br/>  recharge direct.</h2>
                        <p>it you don&#39;t have an account you can <Link href="#"><a>Register here!</a></Link></p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                     <div className="sign__wrapper white-bg">
                        <div className="sign__header mb-35">
                           <div className="sign__in text-center">
                              <Link href="#"><a className="sign__social text-start mb-15"><i className="fab fa-facebook-f"></i>Sign in with Facebook</a></Link>
                              <p> <span>........</span> Or, <Link href="/sign-in"><a>sign in</a></Link> with your email<span> ........</span> </p>
                           </div>
                        </div>
                        <div className="sign__form">
                           <form action="#">
                              <div className="sign__input-wrapper mb-25">
                                 <h5>Work email</h5>
                                 <div className="sign__input">
                                    <input type="email" placeholder="e-mail address"/>
                                    <i className="fal fa-envelope"></i>
                                 </div>
                              </div>
                              <div className="sign__input-wrapper mb-10">
                                 <h5>Password</h5>
                                 <div className="sign__input">
                                    <input type="password" placeholder="Password"/>
                                    <i className="fal fa-lock"></i>
                                 </div>
                              </div>
                              <div className="sign__action d-sm-flex justify-content-between mb-30">
                                 <div className="sign__agree d-flex align-items-center">
                                    <input className="m-check-input" type="checkbox" id="m-agree"/>
                                    <label className="m-check-label" htmlFor="m-agree">Keep me signed in
                                       </label>
                                 </div>
                                 <div className="sign__forgot">
                                    <Link href="#"><a>Forgot your password?</a></Link>
                                 </div>
                              </div>
                              <button className="w-btn w-btn-11 w-100"> <span></span> Sign In</button>
                              <div className="sign__new text-center mt-20">
                                 <p>New to Markit? <Link href="/sign-up"><a>Sign Up</a></Link></p>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
