import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router";

const Register = () => {

     const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e =>{
        e.preventDefault();
        console.log('Form Submitted');
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password);
    }
    
    

    return (
      <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Registration Form!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Enter Name" name="name" />
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Enter Email" name="email" />
                        <label className="label">Password</label>
                        <div className="relative">
                            <input 
                            type={ showPassword ? "text" : "password" } 
                            className="input" 
                            placeholder="Enter Password" 
                            name="password" 
                            required /> <span className="absolute top-2 right-6" onClick={ () => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />
                                }
                                </span>
                        </div>
                        <br />
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="terms"
                                id="terms"
                                className="w-5 h-5 accent-primary cursor-pointer"
                            />

                            <label
                                htmlFor="terms"
                                className="text-sm font-medium cursor-pointer"
                            >
                                Accept our Terms and Conditions
                            </label>
                        </div>
                        <button className="btn btn-neutral mt-1">Sign Up</button>
                        </fieldset>
                        <p className="text-xl mt-1">You've already an account? <NavLink className="text-blue-600" to='/login'>Login</NavLink></p>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;