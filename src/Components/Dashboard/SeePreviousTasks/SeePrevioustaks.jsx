import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/AxiosPublic";

import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { FaEye } from "react-icons/fa";
import {  useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTask from "../../../hooks/useTasks";

const SeePrevioustaks = () => {


    const {tasks,refetch} = useTask();
    console.log(tasks);
    const axiosPublic = useAxiosPublic();
    const [toDo , setToDo] = useState([])
    const [inProgress , setInProgress] = useState([])
    const [completed , setCompleted] = useState([])
    useEffect(() => {
      const toDo = tasks?.filter(item => item.status === 'todo')
      setToDo(toDo)
      const inProgress = tasks?.filter(item => item.status === 'inprogress')
      setInProgress(inProgress)
      const completed = tasks?.filter(item => item.status === 'completed' )
      setCompleted(completed)
    },[tasks])
   
    const navigate = useNavigate();
const handleDeleted = (id) => {
console.log(id);
axiosPublic.delete(`/newtasks/${id}`)
.then(res => {
  console.log(res);
    Swal.fire({
        position: "top-end",
        icon: "success",
        title:`  Succesfully Deleted`,
        showConfirmButton: false,
        timer: 1500
      });

    navigate('/dashboard')
})

}
const handleInProgress = (id) => {
    const thisTask = tasks.find(item => item._id === id)
    console.log(thisTask);
    const {title , description , priority , email,date} = thisTask ;
    const  status = 'inprogress'
    axiosPublic.patch(`/newtasks/${id}` , {title, description , priority , email, date ,status})
    .then(res => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title:` Task In Progress`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch();
        console.log(res?.data);
    })
}
const handleCompleted = (id) => {
    const thisTask = tasks.find(item => item._id === id)
    console.log(thisTask);
    const {title , description , priority , email,date} = thisTask ;
    const  status = 'completed'
    axiosPublic.patch(`/newtasks/${id}` , {title, description , priority , email, date ,status})
    .then(res => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title:` Task Completed`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch();
        console.log(res?.data);
    })
}
    return (
        <div className="w-[90%] mx-auto">
           
            <div className="grid lg:grid-cols-3 gap-5 mt-20">
             
                
                    <div >
                        <div className="bg-green-400 text-center py-4 px-auto rounded text-3xl text-white">
                         <h1 >ToDo</h1>
                         </div>
                    
                  <div>
                
                         
{
toDo?.map((todo) =>  <div key={todo._id} >

    <div>
          <div  className="p-3 bg-white rounded mt-5 "   >
     <div className="flex justify-between gap-2 px-2 py-2">
     <h1 className="font-medium">Title : {todo?.title}</h1>
     <Link className='btn text-xl' to={`/dashboard/taskupdate/${todo?._id}`}><GrUpdate/></Link>
     </div>
     <div className="flex justify-between px-2 py-2">
     <h1 className="font-medium">DeadLine : {todo?.date}</h1>
     <button className='btn text-xl' onClick={() => handleDeleted(todo?._id)}><MdDelete/></button>
     </div>
     <div className="flex justify-between px-2 py-2">
     <h1 className="font-medium">Priority : {todo?.priority}</h1>
    
     {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn text-xl" onClick={()=>document.getElementById(`${todo?._id}`).showModal()}><FaEye/></button>
<dialog id={todo?._id} className="modal">
<div className="modal-box">
<h3 className="font-bold text-lg">Title : {todo?.title}</h3>
<p className="py-1 ">Priority : {todo?.priority}</p>
<p className="py-1 ">Date : {todo?.date}</p>
<p className="py-1 ">Description : {todo?.description}</p>
</div>
<form method="dialog" className="modal-backdrop">
<button>close</button>
</form>
</dialog>

     </div>
     <div onClick={() => handleInProgress(todo?._id)} className="btn flex justify-center items-center border-2 rounded border-color1">InProgress</div>
     
 </div>
 
     </div>
 
     </div>

 
         )
}
                    
                  </div>
                    
                        </div>
                
              
                   <div>
                   <div className="bg-red-400 text-center py-4 px-auto rounded text-3xl text-white">
                   <h1>In Progress</h1>
                   </div>
                   <div>
                
                         
{
inProgress?.map((todo) =>  <div key={todo._id} >

    <div>
          <div  className="p-3 bg-white rounded mt-5 "   >
     <div className="flex justify-between gap-2 px-2 py-2">
     <h1 className="font-medium">Title : {todo?.title}</h1>
     <Link className='btn text-xl' to={`/dashboard/taskupdate/${todo?._id}`}><GrUpdate/></Link>
     </div>
     <div className="flex justify-between px-2 py-2">
     <h1 className="font-medium">DeadLine : {todo?.date}</h1>
     <button className='btn text-xl' onClick={() => handleDeleted(todo?._id)}><MdDelete/></button>
     </div>
     <div className="flex justify-between px-2 py-2">
     <h1 className="font-medium">Priority : {todo?.priority}</h1>
    
     {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn text-xl" onClick={()=>document.getElementById(`${todo?._id}`).showModal()}><FaEye/></button>
<dialog id={todo?._id} className="modal">
<div className="modal-box">
<h3 className="font-bold text-lg">Title : {todo?.title}</h3>
<p className="py-1 ">Priority : {todo?.priority}</p>
<p className="py-1 ">Date : {todo?.date}</p>
<p className="py-1 ">Description : {todo?.description}</p>
</div>
<form method="dialog" className="modal-backdrop">
<button>close</button>
</form>
</dialog>
     </div>
     <div onClick={() => handleCompleted(todo?._id)} className="btn flex justify-center items-center border-2 rounded border-color1">Completed</div>
 </div>
     </div>
 
     </div>

 
         )
}
                    
                  </div>
                   </div>
                   <div>
                   <div className="bg-yellow-400 text-center py-4 px-auto rounded text-3xl text-white">
                   <h1>Completed</h1>
                   </div>
                   <div>
                
                         
{
completed?.map((todo) =>  <div key={todo._id} >

    <div>
          <div  className="p-3 bg-white rounded mt-5 "   >
     <div className="flex justify-between gap-2 px-2 py-2">
     <h1 className="font-medium">Title : {todo?.title}</h1>
     <Link className='btn text-xl' to={`/dashboard/taskupdate/${todo?._id}`}><GrUpdate/></Link>
     </div>
     <div className="flex justify-between px-2 py-2">
     <h1 className="font-medium">DeadLine : {todo?.date}</h1>
     <button className='btn text-xl' onClick={() => handleDeleted(todo?._id)}><MdDelete/></button>
     </div>
     <div className="flex justify-between px-2 py-2">
     <h1 className="font-medium">Priority : {todo?.priority}</h1>
    
     {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn text-xl" onClick={()=>document.getElementById(`${todo?._id}`).showModal()}><FaEye/></button>
<dialog id={todo?._id} className="modal">
<div className="modal-box">
<h3 className="font-bold text-lg">Title : {todo?.title}</h3>
<p className="py-1 ">Priority : {todo?.priority}</p>
<p className="py-1 ">Date : {todo?.date}</p>
<p className="py-1 ">Description : {todo?.description}</p>
</div>
<form method="dialog" className="modal-backdrop">
<button>close</button>
</form>
</dialog>
     </div>
 </div>
     </div>
 
     </div>

 
         )
}
                    
                  </div>
                   </div>
                    
                    
            </div>
         
            
        </div>
    );
};
 
export default SeePrevioustaks;