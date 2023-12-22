import { Link, NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-bgShade py-5 md:px-12 px-4 text-black">
            <div className='flex flex-col md:flex-row md:items-center  justify-between gap-8 py-3 '>
                <div>
                <a href="/"><img src='https://i.postimg.cc/NMxGW3Xr/Whats-App-Image-2023-12-20-at-10-06-27-PM.jpg' alt=""className='w-44 h-10' /></a>
                </div>
                <div className='flex flex-col md:flex-row md:items-center gap-4 flex-wrap'>
            <NavLink to='/' className="block hover:text-gray-400 py-2 px-4">
              Home
            </NavLink>

                </div>
                <div className='flex items-center gap-4 ml-4'>
                 <a href="https://web.facebook.com/profile.php?id=100092229053409"> <FaFacebookF className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary'/></a>
                    <a href="https://www.instagram.com/suhad_ahmod_khan"><FaInstagram className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary'/></a>
                    <a href=""><FaLinkedin className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary'/></a>
                </div>
            </div>
            <hr />
            <div className='mt-10 flex flex-col md:flex-row justify-center gap-8'>
            <p className='text-center hover:text-slate-400'>Copyright © 2023 - All right reserved by <br /> <Link to="/" className='font-bold'>Task Tool</Link></p>
            </div>
        </div>
    );
};

export default Footer;