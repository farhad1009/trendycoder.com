// import Loading from "../components/layout/Loading";
import AboutPageTitle from "../components/Elements/About/AboutPageTitle";
import AboutServicesArea from "../components/Elements/About/AboutServicesArea";
import AboutAboutArea from "../components/Elements/About/AboutAboutArea";
import AboutFAQArea from "../components/Elements/About/AboutFAQArea";
import AboutPromotionArea from "../components/Elements/About/AboutPromotionArea";
import Layout2 from "../components/Layout/Layout2";




export default function About() {
    return (
        <>
            <Layout2>
                {/* Main-Body Started */}
                <AboutPageTitle />
                <AboutServicesArea />
                <AboutAboutArea />
                <AboutFAQArea />
                <AboutPromotionArea />
                {/* Main-Body Ended */}
            </Layout2>
        </>
    )
}
