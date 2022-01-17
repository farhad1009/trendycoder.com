// import Loading from "../components/layout/Loading";
import HeroArea3 from "../components/Elements/Home3/HeroArea3";
import ServicesArea3 from "../components/Elements/Home3/ServicesArea3";
import AboutArea3 from "../components/Elements/Home3/AboutArea3";
import PlatformArea3 from "../components/Elements/Home3/PlatformArea3";
import PriceArea3 from "../components/Elements/Home3/PriceArea3";
import CTAArea3 from "../components/Elements/Home3/CTAArea3";
import WhyArea3 from "../components/Elements/Home3/WhyArea3";
import TestimonialArea3 from "../components/Elements/Home3/TestimonialArea3";
import BlogArea3 from "../components/Elements/Home3/BlogArea3";
import Layout3 from "../components/Layout/Layout3";



export default function Index2() {
    return (
        <>
            <Layout3>
                {/* Main-Body Started */}
                <HeroArea3 />
                <ServicesArea3 />
                <AboutArea3 />
                <PlatformArea3 />
                <PriceArea3 />
                <CTAArea3 />
                <WhyArea3 />
                <TestimonialArea3 />
                <BlogArea3 />
                {/* Main-Body Ended */}
            </Layout3>
        </>
    )
}
