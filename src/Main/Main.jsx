import { Outlet } from "react-router-dom";
import Footer from "../Components/Pages/SharedPages/Footer/Footer";
import Navbar from "../Components/Pages/SharedPages/NavBar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;