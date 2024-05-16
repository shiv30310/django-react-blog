import Header from "./common/header";
import Footer from "./common/footer";
import "./App.css";
import { Outlet, useLoaderData } from "react-router-dom";
import PostCard from "./common/card";
import Pagination from "./common/pagination";

const Root = () => {
    const posts = useLoaderData()

    return (
        <div className="app-container">
            <Header />
                {posts.map((index, post) => 
                    <PostCard key={index} content={post.content} mainCard={false}/>
                )}
                <Pagination />
                <Outlet/>
            <Footer />
        </div>
    );
}

export default Root