import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import BreakingNews from "../../components/BreakingNews/BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {

    const news = useLoaderData()
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 md: md:grid-cols-4">
                <div className="md:col-span-1">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                 {
                    news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                 }
                </div>
                <div className="md:col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;