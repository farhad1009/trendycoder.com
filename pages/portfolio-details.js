// import Loading from "../components/layout/Loading";
import PortfolioDetailsTitle from "../components/Elements/PortfolioDetails/PortfolioDetailsTitle";
import PortfolioDetailsArea from "../components/Elements/PortfolioDetails/PortfolioDetailsArea";
import Layout2 from "../components/Layout/Layout2";


export default function PortFolioDetails() {
  return (
    <>
      <Layout2>
        {/* Main-Body Started */}
        <PortfolioDetailsTitle/>
        <PortfolioDetailsArea/>
        {/* Main-Body Ended */}
      </Layout2>
    </>
  )
}
