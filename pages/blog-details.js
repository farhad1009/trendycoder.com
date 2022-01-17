// import Loading from "../components/layout/Loading";
import BlogDetailsTitle from "../components/Elements/BlogDetails/BlogDetailsTitle";
import BlogDetailsBlog from "../components/Elements/BlogDetails/BlogDetailsBlog";
import Layout2 from "../components/Layout/Layout2";



export default function BlogDetails() {
    return (
        <>
            <Layout2>
                {/* Main-Body Started */}
                <BlogDetailsTitle />
                <BlogDetailsBlog />
                {/* Main-Body Ended */}
            </Layout2>
        </>
    )
}
