// import Loading from "../components/layout/Loading";
import PortfolioArea from '../components/Elements/Portfolio/PortfolioArea';
import PortfolioTitle from '../components/Elements/Portfolio/PortfolioTitle';
import Layout5 from "../components/Layout/Layout5";

export default function Portfolio() {
  return (
    <>
      <Layout5>
        {/* Main-Body Started */}
        <PortfolioTitle/>
        <PortfolioArea/>
        {/* Main-Body Ended */}
      </Layout5>
    </>
  )
}
