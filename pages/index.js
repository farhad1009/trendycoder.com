// import Loading from "../components/layout/Loading";
import HeroArea from "../components/Elements/Home1/HeroArea";
import ServicesArea from "../components/Elements/Home1/ServicesArea";
import AboutArea from "../components/Elements/Home1/AboutArea";
import PricingArea from "../components/Elements/Home1/PricingArea";
import TestimonialArea from "../components/Elements/Home1/TestimonialArea";
import FeaturesArea from "../components/Elements/Home1/FeaturesArea";
import CTAArea from "../components/Elements/Home1/CTAArea";
import Layout1 from "../components/Layout/Layout1";


export default function Home() {
  return (
    <>
      {/* <Loading/> */}
      <Layout1>
        {/* Main-Body Started */}        
        <HeroArea />
        <ServicesArea />
        <AboutArea />
        <PricingArea />
        <TestimonialArea />
        <FeaturesArea />
        <CTAArea />

        {/* Main-Body Ended */}
      </Layout1>

    </>
  )
}
