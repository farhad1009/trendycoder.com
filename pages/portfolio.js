// import Loading from "../components/layout/Loading";
import PortfolioArea from '../components/Elements/Portfolio/PortfolioArea';
import PortfolioTitle from '../components/Elements/Portfolio/PortfolioTitle';
import Layout2 from "../components/Layout/Layout2";

export default function Portfolio() {
  return (
    <>
      <Layout2>
        {/* Main-Body Started */}
        <PortfolioTitle/>
        <PortfolioArea/>
        {/* Main-Body Ended */}
      </Layout2>
    </>
  )
}
