
import { useNavigate } from "react-router-dom";

import { Controller, useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/AxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const CreateNewTasks = () => {
    const {user} = useContext(AuthContext)
    const email = user?.email ;
    const status = 'todo' ;
    console.log(email);
    const AxiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
       control,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log("clicked");
        AxiosPublic.post("/newtask", {...data , email, status})
        .then(res => {
            console.log(res?.data);
           if(res?.data?.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title:`  Succesfully Created`,
                showConfirmButton: false,
                timer: 1500
              });
               navigate('/dashboard/seeprevioustasks')
           }
        })
      }
    const navigate = useNavigate();
    
   
    return (
        <div className="bg-gradient-to-r from-purple-300 to-blue-300 bg-opacity-90 pb-20 py-10 rounded">
           
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
            <Controller
        name="priority"
        control={control}
     
        render={({ field }) => (
          <select {...field} className="w-full py-2 border rounded font-medium outline-none px-3">
            {/* Use the option tags for different options */}
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
        )}
      />
                    {errors.priority && <h1 className=" p-2 text-red-500">This field is required*</h1>}
                   </div>
            </div>
            <div className="w-full mt-5">
            <textarea {...register("description", { required: true })} name="description"  className="textarea textarea-error w-full col-span-10 text-xs md:text-xl border-orange-600 border-2 outline-none" placeholder="Description"></textarea>
            {errors.description && <h1 className=" p-2 text-red-500">This field is required*</h1>}
            </div>
            <button type="submit" className="btn btn-primary w-full mt-3">Submit</button>
            </form>
    
        </div>
    );
};

export default CreateNewTasks;