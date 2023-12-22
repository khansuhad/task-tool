
import  { useContext } from 'react';


import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxiosPublic from '../../hooks/AxiosPublic';
const CreateFeedback = () => {
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext);
    const name = user?.displayName;
    const email = user?.email;
    const photo = user?.photoURL;
    const handleFeedBack = (e) => {
        e.preventDefault();
        const form = e.target ;
        const description = form.description.value ;
        const addFeedback = {name ,email , description , photo};
        console.log(addFeedback);
        axiosPublic.post('/newfeedback', addFeedback)
        .then(res => {
            Swal.fire({ 
                position: "top-end",
                icon: "success",
                title: "created a successfully",
                showConfirmButton: false,
                timer: 1500
              });
              console.log(res?.data);
              navigate('/')
            console.log(res?.data);
        })

    }
    return (
        <div className="lg:mx-12 mx-4  py-10" id="about">
        <div className="flex justify-center">
              <h1 className="text-4xl font-semibold text-primary italic">Send your Feedback</h1>
          </div>
        <div className="py-10">
          <form onSubmit={handleFeedBack}>
        <div className="flex flex-col items-center justify-center w-[95%] md:w-[85%] lg:w-[60%]  mx-auto">
        <div className="  w-full mb-5">
        <textarea required name="description" className="textarea border-primary col-span-10 row-span-6 textarea-lg w-full" placeholder="send your feedback..."></textarea>
        </div>
        <button type="submit" className=" px-10 py-2 w-full rounded border-[#860A35] transition-all duration-700  hover:bg-primary hover:text-white  text-black font-medium text-xl">Submit</button>
        </div>
          </form>
        </div>
        </div>
    );
};

export default CreateFeedback;