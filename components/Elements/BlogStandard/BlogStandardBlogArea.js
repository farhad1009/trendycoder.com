import React from 'react'
import Link from 'next/link'

export default function BlogStandardBlogArea() {
    return (
        <section className="blog__area pt-120 pb-120">
           <div className="container">
              <div className="row">
                 <div className="col-xxl-8 col-xl-8 col-lg-8">
                    <div className="blog__wrapper">
                       <div className="postbox__item mb-70 wow fadeInUp" data-wow-delay=".3s">
                          <div className="postbox__thumb w-img">
                             <Link href="/blog-details"><a><img src="/img/blog/blog-big-1.jpg" alt=""/></a></Link>

                             <div className="postbox__meta">
                                <div className="postbox__date">
                                   <h5>17</h5>
                                    <span>Nov.</span>
                                </div>
                             </div>
                          </div>
                          <div className="postbox__content">
                             <div className="postbox__meta mb-20">
                                <span><Link href="#"><a> <i className="icon_chat_alt"></i> 4 Comments </a></Link></span>
                                <span><Link href="#"><a> <i className="icon_tag_alt"></i> Saas & App</a></Link></span>
                                <span><Link href="#"><a> <i className="fal fa-user"></i> wetLand</a></Link></span>
                             </div>
                             <h3 className="postbox__title"><Link href="/blog-details"><a>The Importance of Functional Animation in UX The End  Culture Is Coming to Wall Street</a></Link></h3>
                             <p>Twit pukka blow off nice one cack bubble and squeak that, quaint blimey don&#39;t get shirty with me up the kyver bamboozled bobby spiffing, cuppa chap lavatory hunky-dory only a quid. Cack hanky panky show off show off pick your nose and blow off cracking goal. Why cup of tea chap blatant porkies say gosh sloshed bevvy, a a blinding shot down the pub bamboozled butty barmy blimey bleeding bum bag faff about cor blimey guvnor. Why I say old chap that is spiffing, only a quid Oxford matie boy cras cup of tea golly gosh, down the pub Eaton so I said crikey cor blimey guvnor amongst.</p>
                             <Link href="/blog-details"><a className="w-btn w-btn-blue"> Read More</a></Link>
                          </div>
                       </div>
                       <div className="postbox__item mb-70 wow fadeInUp" data-wow-delay=".5s">
                          <div className="postbox__thumb postbox__video w-img">
                             <Link href="/blog-details"><a><img src="/img/blog/blog-big-2.jpg" alt=""/></a></Link>
                             <div className="postbox__play">
                                <Link href="https://youtu.be/yJg-Y5byMMw"><a className="blog-play-btn" data-fancybox=""><i className="arrow_triangle-right"></i></a></Link>
                             </div>
                             <div className="postbox__meta">
                              <div className="postbox__date">
                                 <h5>12</h5>
                                  <span>Nov.</span>
                              </div>
                           </div>
                          </div>
                          <div className="postbox__content">
                             <div className="postbox__meta mb-20">
                                <span><Link href="#"><a> <i className="icon_chat_alt"></i> 4 Comments </a></Link></span>
                                <span><Link href="#"><a> <i className="icon_tag_alt"></i> Saas & App</a></Link></span>
                                <span><Link href="#"><a> <i className="fal fa-user"></i> wetLand</a></Link></span>
                             </div>
                             <h3 className="postbox__title"><Link href="/blog-details"><a>Why we decide to build a collaborative UX design tools platform?</a></Link></h3>
                             <p>Twit pukka blow off nice one cack bubble and squeak that, quaint blimey don&#39;t get shirty with me up the kyver bamboozled bobby spiffing, cuppa chap lavatory hunky-dory only a quid. Cack hanky panky show off show off pick your nose and blow off cracking goal. Why cup of tea chap blatant porkies say gosh sloshed bevvy, a a blinding shot down the pub bamboozled butty barmy blimey bleeding bum bag faff about cor blimey guvnor. Why I say old chap that is spiffing, only a quid Oxford matie boy cras cup of tea golly gosh, down the pub Eaton so I said crikey cor blimey guvnor amongst.</p>
                             <Link href="/blog-details"><a className="w-btn w-btn-blue"> Read More</a></Link>
                          </div>
                       </div>
                       <div className="postbox__quote grey-bg-13 mb-70 wow fadeInUp" data-wow-delay=".7s">
                          <img className="quote" src="/img/blog/quote.png" alt=""/>
                          <blockquote>
                             <h3>Actionable Tips for Promoting Your WordPress Website on Social Media and Getting Started with Google Analytics.</h3>
                             <span>Natalya Undergrowth</span>
                          </blockquote>
                       </div>
                       <div className="basic-pagination wow fadeInUp" data-wow-delay=".9s">
                        <ul>
                           <li>
                              <Link href="/blog-standard"><a>
                                 <i className="arrow_left"></i>
                              </a></Link>
                           </li>
                           <li>
                              <Link href="/blog-standard"><a>
                                 <span>1</span>
                              </a></Link>
                           </li>
                           <li className="active">
                              <Link href="#"><a>
                                 <span>2</span>
                              </a></Link>
                           </li>
                           <li>
                              <Link href="/blog-standard"><a>
                                 <span>3</span>
                              </a></Link>
                           </li>
                           <li>
                              <Link href="/blog-standard"><a>
                                 <i className="fal fa-ellipsis-h"></i>
                              </a></Link>
                           </li>
                           <li>
                              <Link href="/blog-standard"><a>
                                 <span>30</span>
                              </a></Link>
                           </li>
                           <li>
                              <Link href="/blog-standard"><a>
                                 <i className="arrow_right"></i>
                              </a></Link>
                           </li>
                        </ul>
                     </div>
                    </div>
                 </div>
                 <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8">
                    <div className="blog__sidebar pl-30">
                       <div className="sidebar__widget mb-60 wow fadeInUp" data-wow-delay=".3s">
                          <div className="sidebar__search">
                             <form action="#">
                                <input type="text" placeholder="Search"/>
                                <button type="submit"><i className="far fa-search"></i></button>
                             </form>
                          </div>
                       </div>
                       <div className="sidebar__widget mb-60 wow fadeInUp" data-wow-delay=".5s">
                          <div className="sidebar__widget-head">
                             <h3 className="sidebar__widget-title">Categories</h3>
                          </div>
                          <div className="sidebar__widget-body">
                             <div className="sidebar__category">
                                <ul>
                                   <li><Link href="/blog-standard"><a>Project Management <span>(05)</span></a></Link></li>
                                   <li><Link href="/blog-standard"><a> Consulting <span> (04)</span></a></Link></li>
                                   <li><Link href="/blog-standard"><a>Finacial News <span>(09)</span> </a></Link></li>
                                   <li><Link href="/blog-standard"><a>Ideas & Strategies <span> (07)</span></a></Link></li>
                                   <li><Link href="/blog-standard"><a>News <span>(22)</span></a></Link></li>
                                   <li><Link href="/blog-standard"><a>Trending <span>(51)</span></a></Link></li>
                                </ul>
                             </div>
                          </div>
                       </div>
                       <div className="sidebar__widget mb-60 wow fadeInUp" data-wow-delay=".7s">
                          <div className="sidebar__widget-head">
                             <h3 className="sidebar__widget-title">Recent Post</h3>
                          </div>
                          <div className="sidebar__widget-body">
                             <div className="rc__post">
                                <ul>
                                   <li className="d-flex align-items-center mb-30">
                                      <div className="rc__thumb mr-30">
                                         <Link href="/blog-details"><a>
                                            <img src="/img/blog/rc-post/rc-img-1.png" alt=""/>
                                         </a></Link>
                                      </div>
                                      <div className="rc__content">
                                         <div className="rc__meta">
                                            <span>April 10, 2021</span>
                                         </div>
                                         <h3 className="rc__title"><Link href="/blog-details"><a>Building a New Successful Hostel Campaign.</a></Link></h3>
                                      </div>
                                   </li>
                                   <li className="d-flex align-items-center mb-30">
                                      <div className="rc__thumb mr-30">
                                         <Link href="/blog-details"><a>
                                            <img src="/img/blog/rc-post/rc-img-2.png" alt=""/>
                                         </a></Link>
                                      </div>
                                      <div className="rc__content">
                                         <div className="rc__meta">
                                            <span>May 23, 2021</span>
                                         </div>
                                         <h3 className="rc__title"><Link href="/blog-details"><a>How to Win The Attention of New Clients: Tips & Tricks</a></Link></h3>
                                      </div>
                                   </li>
                                   <li className="d-flex align-items-center mb-30">
                                      <div className="rc__thumb mr-30">
                                         <Link href="/blog-details"><a>
                                            <img src="/img/blog/rc-post/rc-img-3.png" alt=""/>
                                         </a></Link>
                                      </div>
                                      <div className="rc__content">
                                         <div className="rc__meta">
                                            <span>June 04, 2021</span>
                                         </div>
                                         <h3 className="rc__title"><Link href="/blog-details"><a>Dream Team of the Future We Predict Your Business.</a></Link></h3>
                                      </div>
                                   </li>
                                </ul>
                             </div>
                          </div>
                       </div>
                       <div className="sidebar__widget mb-60 wow fadeInUp" data-wow-delay=".9s">
                          <div className="sidebar__widget-head">
                             <h3 className="sidebar__widget-title">Recent Comment</h3>
                          </div>
                          <div className="sidebar__widget-body">
                             <div className="rc__comment">
                                <ul>
                                   <li className="d-flex mb-30">
                                       <div className="rc__comment-icon mr-20">
                                          <i className="icon_comment_alt"></i>
                                       </div>
                                       <div className="rc__comment-content">
                                          <h5>Pelican Steve</h5>
                                          <p><Link href="/blog-details"><a>on How to Win The Attention of New Clients: Tips & Tricks</a></Link></p>
                                       </div>
                                   </li>
                                   <li className="d-flex mb-30">
                                       <div className="rc__comment-icon mr-20">
                                          <i className="icon_comment_alt"></i>
                                       </div>
                                       <div className="rc__comment-content">
                                          <h5>Wisteria Ravenclaw</h5>
                                          <p><Link href="/blog-details"><a>on How to Win The Attention of New Clients: Tips & Tricks</a></Link></p>
                                       </div>
                                   </li>
                                   <li className="d-flex mb-30">
                                       <div className="rc__comment-icon mr-20">
                                          <i className="icon_comment_alt"></i>
                                       </div>
                                       <div className="rc__comment-content">
                                          <h5>Inverness McKenzie</h5>
                                          <p><Link href="/blog-details"><a>on How to Win The Attention of New Clients: Tips & Tricks</a></Link></p>
                                       </div>
                                   </li>
                                </ul>
                             </div>
                          </div>
                       </div>
                       <div className="sidebar__widget mb-60 wow fadeInUp" data-wow-delay="1.2s">
                          <div className="sidebar__widget-head">
                             <h3 className="sidebar__widget-title">Tags</h3>
                          </div>
                          <div className="sidebar__widget-body">
                              <div className="sidebar__tags">
                                 <Link href="#"><a>UI/Ux</a></Link>
                                 <Link href="#"><a>Web Template</a></Link>
                                 <Link href="#"><a>Design</a></Link>
                                 <Link href="#"><a>Landing Page</a></Link>
                                 <Link href="#"><a>Update</a></Link>
                                 <Link href="#"><a>Branding</a></Link>
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
