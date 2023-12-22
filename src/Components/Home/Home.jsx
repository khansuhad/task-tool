import { Link } from "react-router-dom";
import BenefitSection from "./Benefited/BenefitSection";


const Home = () => {
    return (
        <div className="pt-10">
            <div >
            <div className="flex justify-center items-center " data-aos="fade-right">
          
                <img src="https://i.postimg.cc/QC3DnJP8/pngtree-business-team-banner-task-management-image-1312343.jpg" alt="" className=" rounded "/>
            </div>
                <div className="flex justify-center items-center mt-10 ">
                    <Link to='/dashboard' className="btn bg-color1 text-white">Let&rsquo;s Explore</Link>
                </div>
</div>
<div className="mt-10" data-aos="fade-up"
    >

    <BenefitSection/>
</div>
        </div>
    );
};

export default Home;