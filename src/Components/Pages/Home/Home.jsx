import HomeAbout from "./About/HomeAbout";
import Banner from "./Banner/Banner";
import HomeServices from "./Services/HomeServices";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;