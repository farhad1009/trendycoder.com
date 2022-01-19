// import Loading from "../components/layout/Loading";
import TeamCTA from "../components/Elements/Team/TeamCTA";
import TeamDetailsArea from "../components/Elements/TeamDetails/TeamDetailsArea";
import TeamDetailsTitle from "../components/Elements/TeamDetails/TeamDetailsTitle";
import Layout5 from "../components/Layout/Layout5";



export default function TeamDetails() {
    return (
        <>
            <Layout5>
                {/* Main-Body Started */}
                <TeamDetailsTitle/>
                <TeamDetailsArea/>
                <TeamCTA/>
                {/* Main-Body Ended */}
            </Layout5>

        </>
    )
}
