
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/AxiosPublic";

const CreateNewTasks = () => {
    const AxiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
      
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log("clicked");
        AxiosPublic.post("/newtask", data)
        .then(res => {
            console.log(res?.data);
           if(res?.data?.insertedId){
             
               navigate('/dashboard/seeprevioustasks')
           }
        })
      }
    const navigate = useNavigate();
    
   
    return (
        <div className="bg-gradient-to-r from-purple-300 to-blue-300 bg-opacity-90 pb-20 pt-10 rounded">
           
            <h1 className="text-5xl text-center font-bold w-fit mx-auto px-4 py-2 rounded mb-20 bg-gradient-to-r  from-purple-500 to-pink-500 text-white border-none">Create New Tasks</h1>
            

            <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto text-black">
             
            <div className="flex flex-col  gap-5  mt-5">
                   <div>
                   <input  {...register("title", { required: true })} type="text"  placeholder="title" className="text-xs md:text-xl border-orange-600 border-2 outline-none input input-bordered input-error w-full " />
                    <br/>
                    {errors.title && <h1 className=" p-2 text-red-500">This field is required*</h1>}
                   </div>
                   <div>
                   <input  {...register("date", { required: true })} type="date"  placeholder="title" className="text-xs md:text-xl border-orange-600 border-2 outline-none input input-bordered input-error w-full " />
                    <br/>
                    {errors.date && <h1 className=" p-2 text-red-500">This field is required*</h1>}
                   </div>
                  
            </div>
            <div className="flex flex-col  gap-5  mt-5">
            <div>
            <select  {...register("priority", { required: true })} id="dropdown" name="dropdown" className=" w-full py-2 border rounded font-medium outline-none px-3 " >
                    
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
   </select>
                    {errors.priority && <h1 className=" p-2 text-red-500">This field is required*</h1>}
                   </div>
            </div>
            <div className="w-full mt-5">
            <textarea  name="description"  className="textarea textarea-error w-full col-span-10 text-xs md:text-xl border-orange-600 border-2 outline-none" placeholder="Description"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full mt-3">Submit</button>
            </form>
    
        </div>
    );
};

export default CreateNewTasks;