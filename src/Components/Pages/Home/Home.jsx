import HomeAbout from "./About/HomeAbout";
import Banner from "./Banner/Banner";
import CoQuestions from "./CommonQuestion/CoQuestions";
import HomeServices from "./Services/HomeServices";
import Team from "./Team/Team";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <HomeServices></HomeServices>
            <CoQuestions></CoQuestions>
            <Team></Team>
        </div>
    );
};

export default Home;