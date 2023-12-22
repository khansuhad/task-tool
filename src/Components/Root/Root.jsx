import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";


const Root = () => {
    return (
        <div >
            <Navbar/>
            <div className="min-h-[50vh] bg-gray-100">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;