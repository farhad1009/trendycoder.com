// import Loading from "../components/layout/Loading";
import BlogTitleArea from "../components/Elements/Blog/BlogTitleArea";
import BlogBlogArea from "../components/Elements/Blog/BlogBlogArea";
import Layout2 from "../components/Layout/Layout2";



export default function Blog() {
    return (
        <>
            <Layout2>
                {/* Main-Body Started */}
                <BlogTitleArea />
                <BlogBlogArea />
                {/* Main-Body Ended */}
            </Layout2>

        </>
    )
}
