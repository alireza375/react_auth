import { useState } from "react";
import { NavLink } from "react-router";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);;

    const handleLogin = e => {
        e.preventDefault();
        console.log('Form Submitted');
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Enter Email" name="email" required />
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
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        <p className="text-xl mt-1">Don't have an account? <NavLink className="text-blue-600" to='/registration'>Register</NavLink></p>
                        </fieldset>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;