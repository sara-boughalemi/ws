import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
export default function Home({ darkMode, posts }) {
    return (
        <>
            <Header />
            <div className="home">
                <Posts Posts={posts} />

                <Sidebar darkMode={darkMode} />
            </div>
        </>
    );
}
