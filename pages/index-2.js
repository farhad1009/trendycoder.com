// import Loading from "../components/layout/Loading";
import React from 'react'
import HeroArea2 from '../components/Elements/Home2/HeroArea2'
import ServicesArea2 from "../components/Elements/Home2/ServicesArea2";
import FeaturesArea2 from "../components/Elements/Home2/FeaturesArea2";
import CTAArea2 from "../components/Elements/Home2/CTAArea2";
import TeamArea2 from "../components/Elements/Home2/TeamArea2";
import FAQArea2 from "../components/Elements/Home2/FAQArea2";
import BlogArea2 from "../components/Elements/Home2/BlogArea2";
import PromotionArea2 from "../components/Elements/Home2/PromotionArea2";
import Layout2 from "../components/Layout/Layout2";
import AboutArea2 from '../components/Elements/Home2/AboutArea2';

export default function Index2() {
  return (
    <>
      <Layout2>
        {/* Main-Body Started */}
        <HeroArea2 />
        <ServicesArea2 />
        <AboutArea2/>
        <FeaturesArea2 />
        <CTAArea2 />
        <TeamArea2 />
        <FAQArea2 />
        <BlogArea2 />
        <PromotionArea2 />
        {/* Main-Body Ended */}
      </Layout2>
    </>
  )
}
