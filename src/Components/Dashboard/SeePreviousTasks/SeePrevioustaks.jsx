import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/AxiosPublic";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import SingleTodo from "./SingleTodo";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const SeePrevioustaks = () => {
    const {user} = useContext(AuthContext)
    const email = user?.email;
    const axiosPublic = useAxiosPublic();
    const [toDo , setToDo] = useState([])
    useEffect(() => {
        axiosPublic.get(`/newtask?email=${email}`)
        .then(res => {
            console.log(res?.data);
            const data = res?.data;
            setToDo(data)
        })
    },[axiosPublic,email])
    console.log(toDo);
    return (
        <div className="w-[90%] mx-auto">
            <DragDropContext>
            <div className="grid lg:grid-cols-3 gap-5 mt-20">
                <Droppable droppableId="ToDoList">
                {
                    (provided) => (<div ref={provided.innerRef} {...provided.droppableProps} >
                        <div className="bg-green-400 text-center py-4 px-auto rounded text-3xl text-white">
                         <h1 >ToDo</h1>
                         </div>
                    
                  <div>
                
                         
{
    toDo?.map((todo,index) => <SingleTodo key={todo?._id} todo={todo} index={index}></SingleTodo>)
}
                    
                  </div>
                    
                        </div>)
                }
                </Droppable>
                   <div>
                   <div className="bg-red-400 text-center py-4 px-auto rounded text-3xl text-white">
                   <h1>In Progress</h1>
                   </div>
                   </div>
                   <div>
                   <div className="bg-yellow-400 text-center py-4 px-auto rounded text-3xl text-white">
                   <h1>Completed</h1>
                   </div>
                   </div>
                    
                    
            </div>
            </DragDropContext>
            
        </div>
    );
};
 
export default SeePrevioustaks;