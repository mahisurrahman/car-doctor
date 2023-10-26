import { Outlet } from "react-router-dom";
import Footer from "../Components/Pages/SharedPages/Footer/Footer";
import Navbar from "../Components/Pages/SharedPages/NavBar/Navbar";


const Main = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <div className="w-full">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;