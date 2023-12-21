import { Link, Outlet } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Dashboard = () => {
  

    return (

            
    
    <div className="w-[95%] mx-auto">
           <div className="text-primary font-semibold flex  gap-1 justify-center items-center">
        {/* admin routes */}
                
                   <Link to='/dashboard/createnewtasks' className="p-2.5 border-2 border-color1 text-color1 my-2 flex items-center  rounded-md px-4 duration-300 cursor-pointer  hover:bg-color1 hover:text-white">Create new tasks</Link>
        <Link to='/dashboard/seeprevioustasks' className="p-2.5 my-2 flex border-2 text-color1 border-color1 items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-color1 hover:text-white">See previous tasks</Link>
      
      

 
    
      
 
     
  </div>
  <div className="flex-1">
    <Outlet></Outlet>
</div>
    </div>
    


        
    );
};

export default Dashboard;