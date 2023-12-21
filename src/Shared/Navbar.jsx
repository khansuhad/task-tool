import  { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu } from "react-icons/hi"; 
import { RxCross1 } from "react-icons/rx"; 
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {user , logOut  } = useContext(AuthContext);
    const handleSignOut = () => {
      logOut()
      .then(() => {
        console.log('successfully sign out ')
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "sign out successfully",
            showConfirmButton: false,
            timer: 1500
          });
      })
      .catch(error => {
        console.log(error.message)
      })
     }





    return (
        <header className="w-full  ">
      <nav
        className={`py-4 md:px-12 px-4 bg-white `}
      >
        <div className="flex items-center justify-between">
    <div className='flex items-center'>
    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-body text-3xl">
            { isMenuOpen === false ? <HiMenu /> : <RxCross1/> }
          </button>
          <div className="text-white font-bold text-lg cursor-pointer">
            <img src='https://i.postimg.cc/NMxGW3Xr/Whats-App-Image-2023-12-20-at-10-06-27-PM.jpg'  className=" w-40 lg:w-60" />
          </div>
    </div>
          <div className="lg:flex items-center gap-3 hidden text-body font-medium">
            <NavLink 
              to="/"
              className="block  hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Home
            </NavLink>
            <NavLink  to="/dashboard" className="block  hover:text-gray-400 py-2 px-4 cursor-pointer">
            Dashboard
            </NavLink>
         
      
          </div>

        

   
        <div className='flex items-center'>
      
          <div className=" ">
          {
                user ? <div className='flex gap-2 items-center'>
              
                <div>
                <label  className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                </div>
            
    <div>
    <Link  className="px-4 py-2 bg-transparent border border-primary text-primary rounded hover:bg-primary hover:text-white transition-all duration-300" onClick={handleSignOut}>Log out</Link>
    </div>
             
              </div>  :
                <Link to='/login' className="px-4 py-2 bg-transparent border border-color1 text-color1 rounded hover:bg-color1 hover:text-white transition-all duration-300">Login</Link>
             }
          </div>
         
        </div>
        </div>

     
        {isMenuOpen && (
          <div className="mt-4 bg-navmenu p-4 rounded-lg lg:hidden text-black font-medium text-center">
            <NavLink   to="/" className="block hover:text-gray-400 py-2">
              Home
            </NavLink>
            <NavLink  to="/dashboard" className="block  hover:text-gray-400 py-2 px-4 cursor-pointer">
            Dashboard
            </NavLink>
          </div>
        )}
      
         
      </nav>
    </header>
    );
};

export default Navbar;