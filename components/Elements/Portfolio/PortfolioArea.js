import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from "react";

export default function PortfolioArea() {
   const portfolio = [
      {
         title: "Online digital marketing",
         category: ["all", "marketing", "seo"],
         img: (
            <Image
               src="/img/portfolio/port-1.jpg"
               layout="responsive"
               width={370}
               height={370}
            />
         )
      },
      {
         title: "Web SEO",
         category: ["all", "seo", "branding"],
         img: (
            <Image
               src="/img/portfolio/port-2.jpg"
               layout="responsive"
               width={370}
               height={370}
            />
         )
      },
      {
         title: "Product Branding",
         category: ["all", "branding", "marketing"],
         img: (
            <Image
               src="/img/portfolio/port-3.jpg"
               layout="responsive"
               width={370}
               height={370}
            />
         )
      },
      {
         title: "Graphics Desiging",
         category: ["all", "branding", "design", "seo"],
         img: (
            <Image
               src="/img/portfolio/port-4.jpg"
               layout="responsive"
               width={370}
               height={370}
            />
         )
      },
      {
         title: "International Branding",
         category: ["all", "branding", "marketing"],
         img: (
            <Image
               src="/img/portfolio/port-5.jpg"
               layout="responsive"
               width={370}
               height={370}
            />
         )
      },
      {
         title: "Design and Development",
         category: ["all", "design", "seo"],
         img: (
            <Image
               src="/img/portfolio/port-6.jpg"
               layout="responsive"
               width={370}
               height={370}
            />
         )
      },
      {
         title: "Online digital marketing",
         category: ["all", "design", "seo"],
         img: (
            <Image
               src="/img/portfolio/port-7.jpg"
               layout="responsive"
               width={370}
               height={370}
            />
         )
      },
      {
         title: "Web SEO",
         category: ["all", "seo", "branding", "marketing"],
         img: (
            <Image
               src="/img/portfolio/port-8.jpg"
               layout="responsive"
               width={370}
               height={370}
            />
         )
      },
      {
         title: "Product Branding",
         category: ["all", "branding", "design"],
         img: (
            <Image
               src="/img/portfolio/port-9.jpg"
               layout="responsive"
               width={370}
               height={370}
            />
         )
      },
      {
         title: "Graphics Desiging",
         category: ["all", "marketing", "design", "seo"],
         img: (
            <Image
               src="/img/portfolio/port-10.jpg"
               layout="responsive"
               width={370}
               height={370}
            />
         )
      },
      {
         title: "International Branding",
         category: ["all", "branding", "seo"],
         img: (
            <Image
               src="/img/portfolio/port-11.jpg"
               layout="responsive"
               width={370}
               height={370}
            />
         )
      },
      {
         title: "Design and Development",
         category: ["all", "design", "marketing"],
         img: (
            <Image
               src="/img/portfolio/port-12.jpg"
               layout="responsive"
               width={370}
               height={370}
            />
         )
      }
   ];

   const [filter, setFilter] = useState("all");
   const [projects, setProjects] = useState([]);

   useEffect(() => {
      setProjects([]);

      const filtered = portfolio.map((p) => ({
         ...p,
         filtered: p.category.includes(filter),
      }));
      setProjects(filtered);
   }, [filter]);
   return (
      <section className="portfolio__area pb-90 pt-130">
         <div className="container">
            <div className="row align-items-end">
               <div className="col-xxl-5 col-xl-5 col-lg-6">
                  <div className="section__title-wrapper section__title-wrapper-5 mb-50 wow fadeInUp" data-wow-delay=".3s">
                     <h2 className="section__title-5 mb-10">Build a great site with bdeves.</h2>
                     <p>Elizabeth geeza quain standard  guvnor gosh cras brilliant</p>
                  </div>
               </div>
               <div className="col-xxl-7 col-xl-7 col-lg-6">
                  <div className="portfolio__menu d-flex justify-content-lg-end mb-50 wow fadeInUp" data-wow-delay=".5s">
                     <div className="masonary-menu filter-button-group">
                        <button className={`btn ${filter === "all" ? "active" : ""}`}  onClick={() => setFilter("all")} >ALL</button>
                        <button className={`btn ${filter === "marketing" ? "active" : ""}`}  onClick={() => setFilter("marketing")} >Marketing</button>
                        <button className={`btn ${filter === "seo" ? "active" : ""}`}  onClick={() => setFilter("seo")} >SEO</button>
                        <button className={`btn ${filter === "branding" ? "active" : ""}`}  onClick={() => setFilter("branding")} >Branding</button>
                        <button className={`btn ${filter === "design" ? "active" : ""}`}  onClick={() => setFilter("design")} >Design</button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row grid">
               {projects.map((item,i) =>
                  item.filtered === true ? (
                     <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat2 cat4 wow fadeInUp" data-wow-delay=".3s" key={i}>
                        <div className="portfolio__item mb-30">
                           <div className="portfolio__thumb w-img">
                              {item.img}
                              <div className="portfolio__content">
                                 <span>{filter}</span>
                                 <h3 className="portfolio__title"><Link href="/portfolio-details"><a>{item.title}</a></Link></h3>
                              </div>
                           </div>
                        </div>
                     </div>
                  ) : (
                     ""
                  )
               )}
            </div>
         </div>
      </section>
   )
}
