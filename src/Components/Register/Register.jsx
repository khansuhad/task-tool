import { useContext } from "react";
import { Link, useNavigate} from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
 

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value ; 
        const email = e.target.email.value;
        const password = e.target.password.value ;
        const photoURL = e.target.photoUrl.value; 
        console.log(name , email , password);
        createUser(email , password)
        .then( res => {
            const user = res.user ;
            updateProfile(user , {
                displayName: name ,
                photoURL:photoURL,
            })
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title:` Account created and login succesfully`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                    navigate('/')
                    
            })
            .catch(error => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title:` ${error.message}`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                    return;
            })
           
                
          
        })
        .catch(error =>   {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title:` ${error.message}`,
                showConfirmButton: false,
                timer: 1500
              });
          
            
        })
      
    }
    return (
        <div>
                <div className="bg-gray-200 flex justify-center  lg:max-h-screen py-10 lg:p-56">
      <div className=" border-t-8 rounded border-indigo-600 bg-white   p-12 shadow-2xl  w-96 lg:h-1/2">
        <h1 className="font-bold text-center block text-2xl">Create an account</h1>
        <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="name" className="mt-5 border rounded h-10 w-full pl-3" required/>
        <input type="text"  name="photoUrl"  placeholder="your photo url " className="mt-5 border rounded h-10 w-full  pl-3" required/>
        <input type="email" id="email" name="email" label="Email Address" placeholder="your email" className="mt-5 border rounded h-10 w-full  pl-3"required />
        <input type="password" id="password" name="password" label="Password" placeholder="Password" className="mt-5 border rounded h-10 w-full  pl-3" required/>
        <button className="mt-6  block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg">Register</button>
          
        </form>
        <h1 className="my-5">Do you have an account ? <span className="underline text-blue-600"><Link to='/login'>Please Login</Link></span></h1>
      </div>
    </div>

        </div>
    );
};

export default Register;