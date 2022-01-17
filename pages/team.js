// import Loading from "../components/layout/Loading";
import TeamArea from "../components/Elements/Team/TeamArea";
import TeamCTA from "../components/Elements/Team/TeamCTA";
import TeamTitle from "../components/Elements/Team/TeamTitle";
import Layout2 from "../components/Layout/Layout2";



export default function Team() {
    return (
        <>
            <Layout2>
                {/* Main-Body Started */}
                <TeamTitle/>
                <TeamArea/>
                <TeamCTA/>
                {/* Main-Body Ended */}
            </Layout2>

        </>
    )
}
