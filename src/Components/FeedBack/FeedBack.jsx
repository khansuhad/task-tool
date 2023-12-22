import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/AxiosPublic";
import { Link } from "react-router-dom";


const FeedBack = () => {
 const [feedback, setFeedback] = useState([])
 const axiosPublic = useAxiosPublic();
 useEffect(( ) => {
    axiosPublic.get('/newfeedback')
    .then(res => {
        const data = res?.data ;
        setFeedback(data)
    })
 },[axiosPublic])
    return (
        <div className="py-10">
            <div className="my-10 ">
            <div className="flex flex-col gap-4 justify-center items-center ">
                <h1 className="bg-primary text-white px-5 py-3 font-semibold italic text-5xl rounded w-fit">Feedback</h1>
                <Link to='/createfeedback' className="border-2 border-color1 p-3 mx-5 rounded text-xl font-medium underline">Send your Feedback</Link>
            </div>
            <div className="py-20">
                {
                    feedback?.map(feedback => <div key={feedback?._id} className="w-[80%] mx-auto">
                            <div className="flex gap-3 items-center ">
                                <div className="w-16 h-16">
                                    <img src={feedback?.photo} alt="" className="rounded-full" />
                                </div>
                                <div className="font-medium text-left">
                                    <h1>{feedback?.name}</h1>
                                    <h1>{feedback?.email}</h1>
                                </div>
                            </div>
                            <div className="text-xl font-normal py-4 text-left">
                                <p>{feedback?.description}</p>
                            </div>
                            <div className="divider"></div>
                    </div>)
                }
            </div>
           
        </div>
        </div>

    );
};

export default FeedBack;