import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="mt-10">
            <div >
            <div className="flex justify-center items-center">
                <img src="https://i.postimg.cc/QC3DnJP8/pngtree-business-team-banner-task-management-image-1312343.jpg" alt="" className="h-96 rounded w-[60%]"/>
            </div>
                <div className="flex justify-center items-center mt-10 ">
                    <Link to='/dashboard' className="btn bg-color1 text-white">Let&rsquo;s Explore</Link>
                </div>
</div>
        </div>
    );
};

export default Home;