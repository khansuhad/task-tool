import { Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { FaEye } from "react-icons/fa";
import useAxiosPublic from '../../../hooks/AxiosPublic';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const SingleTodo = ({todo ,index}) => {
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
   const {title , priority , date , _id , description} = todo ;
const handleDeleted = (id) => {
console.log(id);
axiosPublic.delete(`/newtasks/${id}`)
.then(res => {
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


    return (    
        <div className='my-5'>
             <Draggable draggableId={todo?._id.toString()} index={index} >
                           {
                            (provided) => (
                                <div  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                     <div  className="p-3 bg-white rounded mt-5 "   >
                                <div className="flex justify-between gap-2 px-2 py-2">
                                <h1 className="font-medium">Title : {title}</h1>
                                <Link className='btn text-xl' to={`/dashboard/taskupdate/${_id}`}><GrUpdate/></Link>
                                </div>
                                <div className="flex justify-between px-2 py-2">
                                <h1 className="font-medium">DeadLine : {date}</h1>
                                <button className='btn text-xl' onClick={() => handleDeleted(_id)}><MdDelete/></button>
                                </div>
                                <div className="flex justify-between px-2 py-2">
                                <h1 className="font-medium">Priority : {priority}</h1>
                               
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn text-xl" onClick={()=>document.getElementById(`${_id}`).showModal()}><FaEye/></button>
<dialog id={_id} className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Title : {title}</h3>
    <p className="py-1 ">Priority : {priority}</p>
    <p className="py-1 ">Date : {date}</p>
    <p className="py-1 ">Description : {description}</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
                                </div>
                            </div>
                                </div>
                            )
                           }
                                </Draggable>
        </div>
      
    );
};

export default SingleTodo;
SingleTodo.propTypes = {
    todo: PropTypes.node,
    index: PropTypes.node,
 }