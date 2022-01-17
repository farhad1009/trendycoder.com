import React from 'react'
import Link from 'next/link'

export default function BlogDetailsBlog() {
    return (
        <section className="blog__area pt-120 pb-120">
           <div className="container">
              <div className="row">
                 <div className="col-xxl-8 col-xl-8 col-lg-8">
                    <div className="blog__wrapper">
                       <div className="postbox__item">
                          <div className="postbox__thumb w-img wow fadeInUp" data-wow-delay=".3s">
                             <Link href="/blog-details"><a><img src="/img/blog/blog-big-1.jpg" alt=""/></a></Link>

                             <div className="postbox__meta">
                                <div className="postbox__date">
                                   <h5>17</h5>
                                    <span>Nov.</span>
                                </div>
                             </div>
                          </div>
                          <div className="postbox__content wow fadeInUp" data-wow-delay=".5s">
                             <div className="postbox__meta mb-20">
                                <span><Link href="#"><a> <i className="icon_chat_alt"></i> 4 Comments </a></Link></span>
                                <span><Link href="#"><a> <i className="icon_tag_alt"></i> Saas & App</a></Link></span>
                                <span><Link href="#"><a> <i className="fal fa-user"></i> wetLand</a></Link></span>
                             </div>
                              <h3 className="postbox__title"><Link href="/blog-details"><a>The Importance of Functional Animation in UX The End  Culture Is Coming to Wall Street</a></Link></h3>
                              <p>Twit pukka blow off nice one cack bubble and squeak that, quaint blimey don&#39;t get shirty with me up the kyver bamboozled bobby spiffing, cuppa chap lavatory hunky-dory only a quid. Cack hanky panky show off show off pick your nose and blow off cracking goal. Why cup of tea chap blatant porkies say gosh sloshed bevvy, a a blinding shot down the pub bamboozled butty barmy blimey bleeding bum bag faff about cor blimey guvnor. Why I say old chap that is spiffing, only a quid Oxford matie boy cras cup of tea golly gosh, down the pub Eaton so I said crikey cor blimey guvnor amongst.</p>
                              <div className="postbox__img w-img mt-50 mb-50">
                                 <img src="/img/blog/blog-big-2.jpg" alt=""/>
                              </div>
                              <p>Twit pukka blow off nice one cack bubble and squeak that, quaint blimey don&#39;t get shirty with me up the kyver bamboozled bobby spiffing, cuppa chap lavatory hunky-dory only a quid. Cack hanky panky show off show off pick your nose and blow off cracking goal. Why cup of tea chap blatant porkies say gosh sloshed bevvy, a a blinding shot down the pub bamboozled butty barmy blimey bleeding bum bag faff about cor blimey guvnor. Why I say old chap that is spiffing, only a quid Oxford matie boy cras cup of tea golly gosh, down the pub Eaton so I said crikey cor blimey guvnor amongst.</p>
                          </div>

                          <div className="postbox__tag mb-65 mt-65 wow fadeInUp" data-wow-delay=".7s">
                             <h3>Tags : </h3>
                             <Link href="#"><a>Web Template</a></Link>
                             <Link href="#"><a>Saas</a></Link>
                          </div>
                          <div className="postbox__share d-flex justify-content-between align-items-center mb-75 wow fadeInUp" data-wow-delay=".9s">
                             <h3>Share :</h3>
                             <ul>
                                <li><Link href="#"><a><i className="fab fa-facebook-f"></i></a></Link></li>
                                <li><Link href="#"><a><i className="fab fa-twitter"></i></a></Link></li>
                                <li><Link href="#"><a><i className="fab fa-vimeo-v"></i></a></Link></li>
                             </ul>
                          </div>
                          <div className="postbox__author grey-bg-13 d-sm-flex mb-65 wow fadeInUp" data-wow-delay="1.2s">
                             <div className="postbox__author-thumb mr-20">
                                <img src="/img/blog/author/author-1.png" alt=""/>
                             </div>
                             <div className="postbox__author-content">
                                <h4>Fleece Marigold</h4>
                                <span>About Author</span>
                                <p>The only way to track your client’s feedback far and himself to he conduct, see a spirit, of them they set was then.</p>
                             </div>
                          </div>
                          <div className="post-comments wow fadeInUp" data-wow-delay=".5s">
                              <div className="post-comment-title mb-35">
                                 <h3>3 Comments</h3>
                              </div>
                              <div className="latest-comments mb-80">
                                 <ul>
                                    <li>
                                          <div className="comments-box">
                                             <div className="comments-avatar">
                                                <img src="/img/blog/comments/comments-rep-1.jpg" alt=""/>
                                             </div>
                                             <div className="comments-text">
                                                <div className="avatar-name">
                                                      <h5>David Angel Makel</h5>
                                                      <span className="comment-meta">October 26, 2020 at 6 : 30 pm</span>
                                                </div>
                                                <p>The only way to track your client’s feedback far and himself to he conduct, see a spirit, of them they set was then.</p>
                                                <Link href="#"><a className="comment-reply">Reply</a></Link>
                                             </div>
                                          </div>
                                    </li>
                                    <li className="children">
                                          <div className="comments-box">
                                             <div className="comments-avatar">
                                                <img src="/img/blog/comments/comments-rep-2.jpg" alt=""/>
                                             </div>
                                             <div className="comments-text">
                                                <div className="avatar-name">
                                                      <h5>Bailey Wonger</h5>
                                                      <span className="post-meta">October 27, 2020</span>
                                                </div>
                                                <p>he conduct, could project a for the sign his support space soon was then. The only way to track your client’s feedback.</p>
                                                <Link href="#"><a className="comment-reply">Reply</a></Link>
                                             </div>
                                          </div>
                                    </li>
                                    <li className="children">
                                          <div className="comments-box">
                                             <div className="comments-avatar">
                                                <img src="/img/blog/comments/comments-rep-3.jpg" alt=""/>
                                             </div>
                                             <div className="comments-text">
                                                <div className="avatar-name">
                                                      <h5>Hilary Ouse</h5>
                                                      <span className="post-meta">October 28, 2020</span>
                                                </div>
                                                <p>he conduct, could project a for the sign his support space soon was then. The only way to track your client’s feedback. </p>
                                                <Link href="#"><a className="comment-reply">Reply</a></Link>
                                             </div>
                                          </div>
                                    </li>
                                 </ul>
                              </div>
                              <div className="postbox__form">
                                 <h3>Post Comments</h3>
                                 <form action="#">
                                    <div className="row">
                                       <div className="col-xxl-6">
                                          <input type="text" placeholder="Your Name*"/>
                                       </div>
                                       <div className="col-xxl-6">
                                          <input type="text" placeholder="Your Email*"/>
                                       </div>
                                    </div>
                                    <div className="row">
                                       <div className="col-xxl-12">
                                          <textarea placeholder="Your Comment*"></textarea>
                                       </div>
                                    </div>
                                    <div className="row">
                                       <div className="col-xxl-12">
                                          <div className="postbox__form-btn d-md-flex align-items-center justify-content-between">
                                             <div className="postbox__agree d-flex align-items-center">
                                                <input className="m-check-input" type="checkbox" id="m-agree"/>
                                                <label className="m-check-label" htmlFor="m-agree">Email me when this comment receives a reply</label>
                                             </div>
                                             <button type="submit" className="w-btn w-btn-blue w-btn-6">Post Comment</button>
                                          </div>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                           </div>
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
                                   <li><Link href="/blog-details"><a>Project Management <span>(05)</span></a></Link></li>
                                   <li><Link href="/blog-details"><a> Consulting <span> (04)</span></a></Link></li>
                                   <li><Link href="/blog-details"><a>Finacial News <span>(09)</span> </a></Link></li>
                                   <li><Link href="/blog-details"><a>Ideas & Strategies <span> (07)</span></a></Link></li>
                                   <li><Link href="/blog-details"><a>News <span>(22)</span></a></Link></li>
                                   <li><Link href="/blog-details"><a>Trending <span>(51)</span></a></Link></li>
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
                                          <p><Link href="#"><a>on How to Win The Attention of New Clients: Tips & Tricks</a></Link></p>
                                       </div>
                                   </li>
                                   <li className="d-flex mb-30">
                                       <div className="rc__comment-icon mr-20">
                                          <i className="icon_comment_alt"></i>
                                       </div>
                                       <div className="rc__comment-content">
                                          <h5>Wisteria Ravenclaw</h5>
                                          <p><Link href="#"><a>on How to Win The Attention of New Clients: Tips & Tricks</a></Link></p>
                                       </div>
                                   </li>
                                   <li className="d-flex mb-30">
                                       <div className="rc__comment-icon mr-20">
                                          <i className="icon_comment_alt"></i>
                                       </div>
                                       <div className="rc__comment-content">
                                          <h5>Inverness McKenzie</h5>
                                          <p><Link href="#"><a>on How to Win The Attention of New Clients: Tips & Tricks</a></Link></p>
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
