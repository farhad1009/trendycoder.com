
// import Loading from "../components/layout/Loading";
import ServicesTitleArea from "../components/Elements/Services/ServicesTitleArea";
import ServicesServicesArea from "../components/Elements/Services/ServicesServicesArea";
import ServicesFeaturesArea from "../components/Elements/Services/ServicesFeaturesArea";
import ServicesCTAArea from "../components/Elements/Services/ServicesCTAArea";
import Layout5 from "../components/Layout/Layout5";




export default function Services() {
    return (
        <>
            <Layout5>
                {/* Main-Body Started */}
                <ServicesTitleArea />
                <ServicesServicesArea />
                <ServicesFeaturesArea />
                <ServicesCTAArea />
                {/* Main-Body Ended */}
            </Layout5>
        </>
    )
}
