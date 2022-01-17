// import Loading from "../components/layout/Loading";
import BlogStandardTitle from "../components/Elements/BlogStandard/BlogStandardTitle";
import BlogStandardBlogArea from "../components/Elements/BlogStandard/BlogStandardBlogArea";
import Layout2 from "../components/Layout/Layout2";



export default function BlogStandard() {
    return (
        <>
            <Layout2>
                {/* Main-Body Started */}
                <BlogStandardTitle />
                <BlogStandardBlogArea />
                {/* Main-Body Ended */}
            </Layout2>
        </>
    )
}
