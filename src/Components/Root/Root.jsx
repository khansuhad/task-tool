import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";


const Root = () => {
    return (
        <div className="lg:w-[60%] mx-auto px-2 min-h-[100vh] ">
            <Navbar/>
            <div className="min-h-[50vh] bg-gray-100">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;