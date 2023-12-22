import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./AxiosPublic";


const useTask  = () => {
    const {user} = useContext(AuthContext);
 const axiosPublic = useAxiosPublic();
    const { data : tasks = [] , isPending : isLoading , refetch} = useQuery({
        queryKey:[user?.email,'tasks'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/newtask?email=${user?.email}`)
            // console.log(res?.data);
            return res?.data
        }
    })  
    return {tasks , isLoading , refetch}
};

export default useTask ;